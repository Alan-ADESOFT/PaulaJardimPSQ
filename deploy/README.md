# Deploy — Paula Jardim · Protocolos PSP e PSQ
Última verificação: 2026-11-07 (primeiro deploy feito e conferido nesta data)

## Arquitetura de produção (Confirmado na Railway)
- Provedor: **Railway** · workspace "Alan_Dias's Projects" · projeto **Sigma System** · ambiente `production`.
- Serviço: **`paulajardim_psq`** · região `us-west2` · 1 réplica · builder Railpack (padrão).
- Origem: GitHub `Alan-ADESOFT/PaulaJardimPSQ`, branch **`main`**. Todo push na `main` publica sozinho.
- Domínio: https://paulajardimpsq-production.up.railway.app (domínio da Railway). Domínio próprio: **pendente**.
- Um serviço Node com `next start`; a página é gerada estática no build. Sem banco, fila, storage ou e-mail.

## Runtime e comandos (confirmados no package.json e no log de build)
- Node pela versão do `.nvmrc` (22). Railpack roda `npm install` → `npm run build` → `npm start` (Next lê `PORT`).
- Antes de publicar: `npm run lint` e `npm run check:ui` verdes. Depois: `npm run check:ui -- --url <domínio>`.

## Variáveis por nome
Nenhuma. A configuração fica em `libs/config.js` (ver README → "O que configurar antes de publicar").

## Healthcheck
`GET /` responde 200 (conferido em 2026-11-07). Não há healthcheck configurado no serviço.

## Domínio próprio
Na Railway: serviço `paulajardim_psq` → Settings → Networking → Custom Domain. Ela mostra o registro DNS (CNAME)
que precisa ser criado no provedor do domínio. Depois, preencher `SITE_URL` em `libs/config.js`.

## Rollback
Railway → serviço `paulajardim_psq` → Deployments → deploy anterior → Redeploy. Sem banco, voltar a versão não
tem efeito colateral.

## Observação
No mesmo projeto existem outros serviços da Paula (`landingpage_paula`, `paulajardim_app_livro`) e de outros
clientes. Este serviço é independente deles.
