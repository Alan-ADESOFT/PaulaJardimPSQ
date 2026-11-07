#!/usr/bin/env node
// Confere a "memória" do projeto antes de fechar uma entrega: arquivos obrigatórios existem e cabem nos limites.
// Motivo dos limites: o agente lê esses arquivos em toda sessão; texto acumulado custa tokens e piora a atenção do
// modelo (context rot). Histórico sai do STATUS/CHANGELOG/DECISIONS para docs/arquivo/, não é apagado.
//
// Uso:
//   node scripts/check-docs.mjs            # projeto web (flowtech-project-setup)
//   node scripts/check-docs.mjs --mobile   # app (flowtech-mobile-setup): exige também TESTES, DEPLOY, ENDPOINTS e tokens.json
//   node scripts/check-docs.mjs --limit STATUS.md=50 --limit CLAUDE.md=140   # limite próprio, registrado no DECISIONS.md
// Sai com código 1 se algo obrigatório falhar; avisos não bloqueiam.

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const mobile = args.includes('--mobile');

const limits = {
  'AGENTS.md': 15,
  'CLAUDE.md': mobile ? 120 : 150,
  'STATUS.md': 40,
  'HANDOFF.md': 40,
  'DECISIONS.md': 200,
  'CHANGELOG.md': 200,
};
args.forEach((arg, i) => {
  if (arg === '--limit' && args[i + 1]) {
    const [file, value] = args[i + 1].split('=');
    if (file && Number(value) > 0) limits[file] = Number(value);
  }
});

const required = ['AGENTS.md', 'CLAUDE.md', 'STATUS.md', 'FEATURES.md', 'DECISIONS.md', 'CHANGELOG.md'];
if (mobile) required.push('docs/TESTES.md', 'DEPLOY.md', 'ENDPOINTS.md', 'brandbook/tokens.json');

const errors = [];
const warnings = [];
// Blocos gerados por ferramenta (ex.: <!-- BEGIN:nextjs-agent-rules --> … <!-- END:… --> no AGENTS.md) não contam.
const lineCount = (file) =>
  fs
    .readFileSync(file, 'utf8')
    .replace(/<!--\s*BEGIN:[\s\S]*?<!--\s*END:[^>]*-->/g, '')
    .split(/\r?\n/)
    .filter((l, i, all) => i < all.length - 1 || l !== '').length;

for (const file of required) {
  if (!fs.existsSync(file)) errors.push(`${file} não existe (modelo em references/templates.md da skill).`);
}

for (const [file, max] of Object.entries(limits)) {
  if (!fs.existsSync(file)) continue;
  const n = lineCount(file);
  if (n > max) {
    const hint =
      file === 'STATUS.md'
        ? 'reescreva só o estado atual; o histórico vai para o CHANGELOG.md'
        : file === 'CLAUDE.md'
          ? 'tire o que o README/package.json/código já mostram e o conhecimento ocasional (vira doc com ponteiro)'
          : file === 'AGENTS.md'
            ? 'deixe só a ordem de leitura'
            : 'mova o que é antigo ou substituído para docs/arquivo/';
    errors.push(`${file} tem ${n} linhas (limite ${max}): ${hint}.`);
  }
}

if (fs.existsSync('HANDOFF.md')) {
  warnings.push('HANDOFF.md existe: se a tarefa interrompida já foi concluída, apague-o.');
}

// Cópia de skill em pasta lida pelo agente (docs/ etc.): vira uma segunda verdade desatualizada e custa tokens.
// Exceção: .claude/skills/<nome>/SKILL.md, que é onde o Claude Code instala skills de projeto de verdade.
const walk = (dir, out = []) => {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.git', '.expo', '.next', 'ios', 'android', 'dist', 'build'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith('.md')) out.push(full);
  }
  return out;
};
const markdown = walk('.');
for (const file of markdown) {
  const head = fs.readFileSync(file, 'utf8').slice(0, 400);
  const installedSkill = /(^|[\\/])\.claude[\\/]skills[\\/]/.test(file);
  if (/^---\s*\r?\nname:\s*["']?flowtech-/m.test(head) && !installedSkill) {
    errors.push(`${file} parece uma cópia de skill FlowTech: cite a skill pelo nome no CLAUDE.md em vez de copiá-la.`);
  }
}

// Documento longo sem sumário: o agente costuma ler só o começo de arquivos grandes.
const exempt = new Set(['CHANGELOG.md', 'DECISIONS.md', 'FEATURES.md', 'README.md', 'STATUS.md', 'HANDOFF.md', 'CLAUDE.md', 'AGENTS.md']);
const noSummary = [];
for (const file of markdown) {
  const base = path.basename(file);
  if (exempt.has(base) || /(^|[\\/])(arquivo|sprints)[\\/]|(^|[\\/])\.claude[\\/]/.test(file)) continue;
  if (lineCount(file) <= 100) continue;
  const top = fs.readFileSync(file, 'utf8').split(/\r?\n/).slice(0, 20).join('\n');
  if (!/sum[áa]rio|índice|indice|table of contents/i.test(top)) noSummary.push(file.replace(/^\.[\\/]/, ''));
}
if (noSummary.length) {
  const shown = noSummary.slice(0, 5).join(', ');
  const more = noSummary.length > 5 ? ` e mais ${noSummary.length - 5}` : '';
  warnings.push(`${noSummary.length} documento(s) com mais de 100 linhas sem sumário no topo: ${shown}${more}.`);
}

warnings.forEach((w) => console.warn(`[INFO] ${w}`));
if (errors.length) {
  errors.forEach((e) => console.error(`[ERRO] ${e}`));
  console.error(`[ERRO] check-docs: ${errors.length} problema(s). Corrija antes de fechar a entrega.`);
  process.exit(1);
}
console.log(`[SUCESSO] check-docs: documentação dentro do padrão${mobile ? ' (mobile)' : ''}.`);
