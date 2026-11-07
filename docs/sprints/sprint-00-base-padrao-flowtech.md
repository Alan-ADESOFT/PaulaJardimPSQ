# Sprint 00 — Base no padrão FlowTech
Status: concluída · Aberta: 2026-11-07 · Fechada: 2026-11-07

## Planejamento
### Objetivo
Transformar o zip `pa_gina-paula-jardim.zip` no repositório do projeto, em Next.js no padrão FlowTech
(modo "projeto existente"), sem mudar o que o visitante vê.

### Escopo
- Importar o código do zip e confirmar que instala e compila.
- Tokens semânticos sobre a paleta existente e migração dos componentes para eles.
- Extrair o que se repete entre seções para `components/ui/`.
- Lint, conferência automática de UI e de documentação.
- Documentação obrigatória do padrão a partir do que está confirmado no código.

### Fora do escopo
- Mudar textos, layout, cores visíveis ou animações.
- Preencher `libs/config.js` (links e Pixel dependem da cliente).
- Migrar medidas para escala de espaçamento; trocar `<img>` por `next/image`; publicar.

### Critérios de aceite
- [x] `npm run build` verde
- [x] `npm run lint` verde (0 erros, 0 avisos)
- [x] `npm run check:ui` verde em 390px, 820px e 1440px
- [x] Nenhuma diferença visual: estilos calculados idênticos antes/depois da migração de tokens
- [x] Nenhum componente usa cor base primitiva direto
- [x] `node scripts/check-docs.mjs` verde

### Impacto previsto
Rotas: `/` · componentes: todas as seções (CSS), Hero/PSP/PSQ/Aplicação (JSX) · banco/integrações: nenhum · docs: todos.

## Resultado
### Feito
- Commit de base com o zip intacto; ajustes em commit separado para o diff mostrar só o que mudou.
- Camada semântica no `tokens.css`; 263 trocas de cor (script de migração por papel da propriedade CSS).
- `ApplyButton` substitui 4 cópias do botão; setas com `aria-hidden`.
- `check:ui` achou o link "voltar ao início" com 26px de altura no toque → corrigido para 46px sem mexer no desenho.
- Contraste medido: contorno de foco tinha 2,47:1 → `--focus-ring` em dourado escuro (≥ 3,16:1).
- ESLint 9 com regras do Next; `check-ui.mjs` (Playwright) e `check-docs.mjs`.
- Docs: README, CLAUDE, AGENTS, STATUS, FEATURES, DECISIONS, CHANGELOG, brandbook, integrations, deploy, CONTEXTO.

### Ficou de fora e por quê
- Respeitar "reduzir movimento": decisão de produto (ver `DECISIONS.md`).
- Dourado de destaque em texto pequeno (eyebrow 17px) com 4,42:1: ajustar a cor muda a identidade; decisão pendente.
- Tokens de espaço/raio: migração grande, baixo ganho agora.

### Arquivos tocados
`styles/tokens.css`, `styles/globals.css`, `components/*/*.module.css` (12), `components/{Hero,Psp,Psq,Application,Vault}/*.jsx`,
`components/ui/ApplyButton/ApplyButton.jsx` (novo), `libs/animations.js` (1 linha), `package.json`, `package-lock.json`,
`eslint.config.mjs`, `scripts/`, documentação.

### Comandos executados e saída resumida
- `npm ci` → 0 vulnerabilidades em produção (`npm audit --omit=dev`); 8 moderadas só no ESLint (minimatch), não vão para o site.
- `NODE_ENV=production npm run build` → `○ /` estática, sem erros.
- `npm run lint` → sem saída (0 problemas).
- `npm run check:ui` → `[SUCESSO]` celular, tablet e desktop.
- Comparação de estilos calculados (Playwright, 2.949 elementos e pseudoelementos) → 0 diferenças; HTML idêntico fora os nomes de token em `style=""`.

### Pendências e riscos
- Links de aplicação, WhatsApp, Pixel e `SITE_URL` vazios: hoje os botões levam a `#aplicacao`.
- Deploy feito e conferido na Railway em 2026-11-07 (check:ui verde no domínio publicado).
- Consentimento de cookies antes do Pixel (LGPD) não avaliado.

### Aprendizados (candidatos a CLAUDE.md)
- `NODE_ENV=development` no terminal quebra o build → virou armadilha no `CLAUDE.md`.
- `npx next start` em background deixa `next-server` órfão → `check:ui` chama o binário do Next direto.
