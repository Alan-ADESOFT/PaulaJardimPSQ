# Decisões vigentes — Paula Jardim · Protocolos PSP e PSQ
> Substituídas vão para `docs/arquivo/decisoes.md` com a data em que caíram. Limite: 200 linhas.

## 2026-11-07 — Manter a estrutura do zip (CSS colocalizado, seções sem props)
**Contexto:** o projeto chegou em zip já em Next.js Pages Router + JS + CSS Modules, uma pasta por seção.
**Decisão:** manter a árvore e os nomes; só acrescentar `components/ui/` para o que se repete.
**Motivo:** já segue o padrão FlowTech; reestruturar por estética só traria risco de regressão visual.
**Alternativas descartadas:** separar em `layout/`/`ui/`/`[domain]/` todas as seções. **Revisar quando:** a página ganhar uma segunda rota.

## 2026-11-07 — Tokens: duas camadas no mesmo `styles/tokens.css`, com paleta de efeitos primitiva
**Contexto:** o zip trazia só primitivos (cores base + ~120 variações geradas automaticamente).
**Decisão:** criar a camada semântica e migrar 100% dos usos das cores base (CSS, SVG inline e canvas) para ela.
As variações de transparência/tons ficam primitivas como "paleta de efeitos" (brilho, sombra, gradiente, vidro).
**Motivo:** um semântico por opacidade inflaria o arquivo sem ganho. Migração conferida comparando os estilos
calculados de 2.949 elementos antes/depois: zero diferença.
**Alternativas descartadas:** `brandbook/tokens.json` + build (não há app nem e-mail com a mesma marca).
**Revisar quando:** surgir app, e-mail ou segunda marca.

## 2026-11-07 — Medidas (espaço, raio) seguem em px/clamp por enquanto
**Contexto:** o CSS herdado usa medidas soltas em ~4.000 linhas, ajustadas à mão para as animações.
**Decisão:** não migrar agora; código novo usa as medidas já existentes por perto e não cria valores novos sem motivo.
**Motivo:** migração grande, ganho baixo numa landing de página única e risco visual alto.
**Revisar quando:** houver redesenho ou segunda página — aí criar `--space-*` e `--radius-*`.

## 2026-11-07 — Animações ignoram "reduzir movimento" do sistema (decisão herdada, pendente de confirmação)
**Contexto:** `libs/animations.js` força `reduce = false`. Comentário original: muitos PCs Windows vêm com
"efeitos de animação" desligados, o que escondia todas as animações. Só FAQ e um bloco da introdução respeitam a preferência no CSS.
**Decisão:** manter como veio até o Brenno decidir.
**Motivo:** é escolha de produto da cliente; o padrão FlowTech pede respeitar `prefers-reduced-motion`.
**Alternativas:** (a) respeitar a preferência só no celular; (b) respeitar sempre, mantendo as entradas mais simples;
(c) manter. **Revisar quando:** o Brenno responder (ver `STATUS.md`).

## 2026-11-07 — Contorno de foco em dourado escuro
**Contexto:** `--focus-ring` em dourado médio dava 2,47:1 no fundo marfim (mínimo 3:1).
**Decisão:** apontar `--focus-ring` para `--color-gold-dark` (3,16:1 a 4,69:1 em todas as superfícies).
**Motivo:** só aparece na navegação por teclado; não altera o visual para quem usa mouse ou toque.

## 2026-11-07 — `<img>` em vez de `next/image`
**Contexto:** o lint do Next avisa sobre `<img>` nas 3 fotos.
**Decisão:** manter `<img>` e desligar a regra `@next/next/no-img-element` no `eslint.config.mjs`.
**Motivo:** fotos já em WebP no tamanho final, com width/height e preload do hero; o CSS das seções estiliza o
`<img>` direto. **Revisar quando:** entrarem fotos novas sem otimização.

## 2026-11-07 — Configuração em `libs/config.js`, não em variáveis de ambiente
**Contexto:** links, WhatsApp e ID do Pixel são públicos (aparecem no HTML).
**Decisão:** manter as constantes do zip; sem `.env`.
**Motivo:** publicação sem configurar nada no provedor. **Revisar quando:** precisar de valores diferentes por ambiente.

## 2026-11-07 — Playwright fora das dependências
**Contexto:** `npm run check:ui` usa Playwright.
**Decisão:** não declarar em `devDependencies`; o script orienta a instalar quando faltar.
**Motivo:** evita baixar navegador em todo `npm install` (inclusive no deploy).
