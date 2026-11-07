# Changelog — últimas 5 sprints
> Anteriores em `docs/arquivo/changelog.md`. Limite: 200 linhas.

## Sprint 00 — Base no padrão FlowTech (2026-11-07)
### Adicionado
- Código da landing importado do zip `pa_gina-paula-jardim.zip` (commit de base sem alterações).
- Camada de tokens semânticos em `styles/tokens.css` (superfície, texto, borda, ação, destaque, foco, sombra, máscara).
- `components/ui/ApplyButton`: botão "aplicar" único, com variante `withLock`.
- `npm run lint` (ESLint 9 + `eslint-config-next`), `npm run check:ui` (Playwright) e `npm run check:docs`.
- Documentação do padrão: `CLAUDE.md`, `AGENTS.md`, `STATUS.md`, `FEATURES.md`, `DECISIONS.md`, `brandbook/`,
  `integrations/`, `deploy/`, `docs/CONTEXTO.md`, sprint 00.
### Alterado
- 263 usos de cor da paleta base (240 no CSS, 23 em SVG inline e canvas) passam a usar tokens semânticos;
  visual idêntico (estilos calculados comparados antes/depois).
- Hero, PSP, PSQ e Aplicação usam `<ApplyButton>` no lugar do markup copiado; setas decorativas com `aria-hidden`.
- `--focus-ring` passa para dourado escuro (contraste 3,16:1+ em todas as superfícies).
### Corrigido
- "Voltar ao início" no rodapé: área de toque de 26px para 46px no celular/tablet, sem mexer no desenho.
### Docs
- README com árvore real, comandos e armadilha do `NODE_ENV`.
