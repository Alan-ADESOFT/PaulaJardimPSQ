# Sprint 01 — Link do formulário de aplicação
Status: concluída · Aberta: 2026-11-07 · Fechada: 2026-11-07

## Planejamento
### Objetivo
Todos os botões "aplicar" levam ao formulário de aplicação (pedido do Brenno).

### Escopo
Preencher `APPLY_URL` em `libs/config.js` com https://forms.gle/3WcByLFe7bQRJoXZA e publicar.

### Fora do escopo
WhatsApp, Pixel e domínio próprio (seguem vazios).

### Critérios de aceite
- [x] Os 4 botões apontam para o formulário e abrem em nova aba
- [x] `build`, `lint` e `check:ui` verdes
- [x] Publicado na Railway e conferido no domínio

### Impacto previsto
Só `libs/config.js`. Todos os botões já leem o destino de lá (`ApplyButton` → `applyLinkProps`).

## Resultado
### Feito
- `APPLY_URL` preenchido. O link curto redireciona para o Google Forms "Qualificação para protocolos Individuais" (conferido).
- Com o link preenchido, o WhatsApp deixa de ser usado nos botões (regra já existente em `libs/config.js`).

### Arquivos tocados
`libs/config.js`, `STATUS.md`, `FEATURES.md`, `CHANGELOG.md`, `integrations/README.md`, esta sprint.

### Comandos executados e saída resumida
- `NODE_ENV=production npm run build` → compilou · `npm run lint` → 0 problemas · `npm run check:ui` → `[SUCESSO]`.
- HTML gerado: 4 × `href="https://forms.gle/3WcByLFe7bQRJoXZA" target="_blank" rel="noopener noreferrer"`.

### Pendências e riscos
- Quando o Pixel for ligado, o evento `Lead` dispara no clique (antes de sair para o formulário); a conversão
  dentro do Google Forms não é medida pelo Pixel.
