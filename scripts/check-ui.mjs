#!/usr/bin/env node
// Conferência automática de UI em celular, tablet e desktop: alvos de toque, rolagem lateral,
// erros de console/rede e nome acessível de links, botões e imagens.
// Não substitui olhar a página: contraste sobre gradiente/foto e foco visível seguem na conferência manual.
//
// Uso:
//   npm run build && npm run check:ui          # sobe `next start` numa porta livre e confere
//   npm run check:ui -- --url http://localhost:3000   # confere um servidor que já está rodando
//   npm run check:ui -- --shots .check-ui      # também salva um print do topo de cada tamanho
// Requer Playwright (não é dependência do projeto para não pesar o `npm install`):
//   npm i -D playwright && npx playwright install chromium
// Sai com código 1 se algo falhar.

import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import net from 'node:net';
import path from 'node:path';

const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  console.error('[ERRO] check:ui precisa do Playwright: rode `npm i -D playwright && npx playwright install chromium`.');
  process.exit(1);
}

const args = process.argv.slice(2);
const argValue = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};
const shotsDir = argValue('--shots');

// Alvo mínimo (WCAG 2.5.5/2.5.8 e padrão FlowTech): 44px no toque, 24px no mouse.
const VIEWPORTS = [
  { name: 'celular', width: 390, height: 844, touch: true, minTarget: 44 },
  { name: 'tablet', width: 820, height: 1180, touch: true, minTarget: 44 },
  { name: 'desktop', width: 1440, height: 900, touch: false, minTarget: 24 },
];

const freePort = () =>
  new Promise((resolve) => {
    const srv = net.createServer();
    srv.listen(0, () => {
      const { port } = srv.address();
      srv.close(() => resolve(port));
    });
  });

async function startServer() {
  if (!fs.existsSync('.next/BUILD_ID')) {
    console.error('[ERRO] Não achei o build. Rode `npm run build` antes do check:ui.');
    process.exit(1);
  }
  const port = await freePort();
  // Chama o binário do Next direto (sem npx) para que o kill encerre o servidor de verdade;
  // via npx o next-server ficava órfão e o script não terminava.
  // NODE_ENV fora do padrão quebra o `next start`; o servidor de conferência sempre roda como produção.
  const child = spawn(process.execPath, [require.resolve('next/dist/bin/next'), 'start', '-p', String(port)], {
    env: { ...process.env, NODE_ENV: 'production' },
    stdio: ['ignore', 'ignore', 'inherit'],
  });
  const url = `http://localhost:${port}`;
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(3000) });
      if (res.ok) return { url, stop: () => child.kill() };
    } catch {
      // servidor ainda subindo
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  child.kill();
  console.error('[ERRO] O servidor de conferência não respondeu em 30s.');
  process.exit(1);
}

async function checkViewport(browser, baseUrl, vp) {
  const problems = [];
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    hasTouch: vp.touch,
    isMobile: vp.touch && vp.width < 600,
  });
  // Pula a assinatura de abertura (já vista na sessão) para a página ficar estável mais rápido.
  await context.addInitScript(() => {
    try {
      sessionStorage.setItem('pjIntro', '1');
    } catch {
      // sessionStorage bloqueado: a abertura roda normalmente
    }
  });
  const page = await context.newPage();
  page.on('console', (msg) => {
    if (msg.type() === 'error') problems.push(`erro no console: ${msg.text()}`);
  });
  page.on('pageerror', (err) => problems.push(`erro de JavaScript: ${err.message}`));
  page.on('response', (res) => {
    if (res.status() >= 400) problems.push(`arquivo não carregou (${res.status()}): ${res.url()}`);
  });

  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  // Rola a página inteira para disparar as animações de cada seção (e os erros que elas causem).
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.8;
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(600);

  const result = await page.evaluate((minTarget) => {
    const out = { overflow: null, smallTargets: [], unnamed: [], imagesWithoutAlt: [] };
    const doc = document.documentElement;
    if (doc.scrollWidth > doc.clientWidth + 1) out.overflow = `${doc.scrollWidth}px de largura numa tela de ${doc.clientWidth}px`;

    const describe = (el) => {
      const text = (el.innerText || el.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ').slice(0, 50);
      return `<${el.tagName.toLowerCase()}${el.id ? `#${el.id}` : ''}> "${text}"`;
    };
    const isVisible = (el) => {
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return cs.display !== 'none' && cs.visibility !== 'hidden' && r.width > 0 && r.height > 0 && !el.closest('[aria-hidden="true"]');
    };
    const interactive = document.querySelectorAll('a[href], button, summary, input, select, textarea, [role="button"], [tabindex]:not([tabindex="-1"])');
    interactive.forEach((el) => {
      if (!isVisible(el)) return;
      const r = el.getBoundingClientRect();
      // Link dentro de frase é exceção da WCAG 2.5.8 (o alvo é o texto corrido).
      const inlineInText = el.tagName === 'A' && getComputedStyle(el).display === 'inline' && el.closest('p, li');
      if (!inlineInText && (r.width < minTarget || r.height < minTarget)) {
        out.smallTargets.push(`${describe(el)} ${Math.round(r.width)}x${Math.round(r.height)}px`);
      }
      const name =
        (el.innerText || '').trim() ||
        el.getAttribute('aria-label') ||
        el.getAttribute('aria-labelledby') ||
        el.getAttribute('title') ||
        [...el.querySelectorAll('img[alt]')].map((i) => i.alt).join('').trim();
      if (!name) out.unnamed.push(describe(el));
    });
    document.querySelectorAll('img').forEach((img) => {
      if (!img.hasAttribute('alt')) out.imagesWithoutAlt.push(img.currentSrc || img.src);
    });
    return out;
  }, vp.minTarget);

  if (result.overflow) problems.push(`rolagem lateral: ${result.overflow}`);
  result.smallTargets.forEach((t) => problems.push(`alvo menor que ${vp.minTarget}px: ${t}`));
  result.unnamed.forEach((t) => problems.push(`link/botão sem nome acessível: ${t}`));
  result.imagesWithoutAlt.forEach((src) => problems.push(`imagem sem alt: ${src}`));

  if (shotsDir) {
    fs.mkdirSync(shotsDir, { recursive: true });
    await page.screenshot({ path: path.join(shotsDir, `${vp.name}.png`) });
  }
  await context.close();
  return problems;
}

const external = argValue('--url');
const server = external ? { url: external, stop: () => {} } : await startServer();
const browser = await chromium.launch();
let failed = 0;
try {
  for (const vp of VIEWPORTS) {
    const problems = await checkViewport(browser, server.url, vp);
    if (problems.length) {
      failed += problems.length;
      problems.forEach((p) => console.error(`[ERRO] ${vp.name} (${vp.width}px): ${p}`));
    } else {
      console.log(`[OK] ${vp.name} (${vp.width}px): sem problemas.`);
    }
  }
} finally {
  await browser.close();
  server.stop();
}

if (failed) {
  console.error(`[ERRO] check:ui: ${failed} problema(s).`);
  process.exit(1);
}
console.log('[SUCESSO] check:ui: celular, tablet e desktop dentro do padrão.');
