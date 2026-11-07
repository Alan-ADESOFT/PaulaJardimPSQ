# Sprint 02 — Letras PSP/PSQ da Hero no celular
Status: concluída · Aberta: 2026-11-07 · Fechada: 2026-11-07

## Planejamento
### Objetivo
Pedido do Brenno: na Hero, a cabeça da Paula ficava no meio da escrita grande "PSP PSQ". Deixar a Paula em cima e
a escrita embaixo.

### Diagnóstico
Prints em 8 larguras (390 a 1920px). Do tablet para cima as letras já passam na altura do peito. Só no celular
(até 720px) o CSS subia as letras para o topo (`.ghosts { top: 2% }`) e elas cruzavam a cabeça.

### Escopo
Só a regra de celular de `components/Hero/Hero.module.css`. Desktop e tablet sem mudança.

### Critérios de aceite
- [x] Cabeça livre das letras em 360, 390, 430, 600 e 720px
- [x] Desktop e tablet iguais a antes
- [x] `build`, `lint` e `check:ui` verdes; publicado e conferido no ar

## Resultado
### Feito
- `.ghosts` no celular: `top: 2%` → `top: 34%` (testados 24% e 34%; com 24% o "SQ" ainda encostava no cabelo).

### Arquivos tocados
`components/Hero/Hero.module.css`, `STATUS.md`, `CHANGELOG.md`, esta sprint.

### Comandos executados e saída resumida
`NODE_ENV=production npm run build` ✔ · `npm run lint` ✔ (0 problemas) · `npm run check:ui` ✔ · prints antes/depois em 5 larguras de celular.
