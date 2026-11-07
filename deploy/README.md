# Deploy — Paula Jardim · Protocolos PSP e PSQ
Última verificação: 2026-11-07 (só a documentação; nenhum deploy foi feito ou conferido nesta data)

## Arquitetura de produção
Um serviço Node rodando `next start`. A página é gerada estática no build (`○ /` no resumo do `next build`), então
não depende de banco, fila, storage ou e-mail.
- Provedor indicado no zip original: **Railway** (build `npm run build`, start `npm start`).
- **Pendente de verificação:** projeto Railway existente, região, domínio final e DNS.

## Runtime e comandos (confirmados no package.json)
- Node >= 20.9 (`engines`), recomendado 22 (`.nvmrc`).
- Build: `npm run build` · Start: `npm start` (Next lê `PORT` do ambiente).
- Antes de publicar: `npm run lint` e `npm run check:ui` verdes.

## Variáveis por nome
Nenhuma. A configuração fica em `libs/config.js` (ver README → "O que configurar antes de publicar").
`NODE_ENV` precisa ser `production` no build (a Railway já faz isso).

## Healthcheck
`GET /` deve responder 200.

## Rollback
Na Railway: reimplantar o deploy anterior pelo painel (Deployments → Redeploy). Como não há banco, voltar a versão
não tem efeito colateral.

## Alternativa
Por ser estática, a página também roda na Vercel sem mudança de código. Escolher um provedor só e registrar em
`DECISIONS.md`.
