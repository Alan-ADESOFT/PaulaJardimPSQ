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
Regras de celular e de tablet/desktop da foto em `components/Hero/Hero.module.css`.

### Critérios de aceite
- [x] Cabeça livre das letras em 360, 390, 430, 600 e 720px
- [x] Em nenhuma largura (360 a 1920px) a foto encosta no botão
- [x] `build`, `lint` e `check:ui` verdes; publicado e conferido no ar

## Resultado
### Feito
- `.ghosts` no celular: `top: 2%` → `top: 34%` (testados 24% e 34%; com 24% o "SQ" ainda encostava no cabelo).
- 2ª rodada (Brenno: "tá do mesmo jeito"): em notebook de 1200 a ~1390px a foto era maior que o palco e o
  cabelo cobria o botão "Faça sua aplicação individual". A regra que limita a foto pela altura do palco valia só
  até 1199px; passou a valer de 721px para cima. Medido de 360 a 1920px: foto sempre abaixo do botão (8 a 60px de folga).
  Em telas grandes a foto foi de 520 para 512px.

### Arquivos tocados
`components/Hero/Hero.module.css`, `STATUS.md`, `CHANGELOG.md`, esta sprint.

### Comandos executados e saída resumida
`NODE_ENV=production npm run build` ✔ · `npm run lint` ✔ (0 problemas) · `npm run check:ui` ✔ · prints antes/depois em 5 larguras de celular.
