# Deploy — Paula Jardim · Protocolos PSP e PSQ
Última verificação: 2026-11-07 (primeiro deploy feito e conferido nesta data)

## Arquitetura de produção (Confirmado na Railway)
- Provedor: **Railway** · workspace "Alan_Dias's Projects" · projeto **Sigma System** · ambiente `production`.
- Serviço: **`paulajardim_psq`** · região `us-west2` · 1 réplica · builder Railpack (padrão).
- Origem: GitHub `Alan-ADESOFT/PaulaJardimPSQ`, branch **`main`**. Todo push na `main` publica sozinho.
- Domínio Railway: https://paulajardimpsq-production.up.railway.app
- Domínio próprio: **protocolos.apaulajardim.com.br** — cadastrado na Railway em 2026-11-07; aguardando os registros
  na Cloudflare (DNS de apaulajardim.com.br fica na Cloudflare; o domínio raiz é a página do workshop, serviço `landingpage_paula`).
- Um serviço Node com `next start`; a página é gerada estática no build. Sem banco, fila, storage ou e-mail.

## Runtime e comandos (confirmados no package.json e no log de build)
- Node pela versão do `.nvmrc` (22). Railpack roda `npm install` → `npm run build` → `npm start` (Next lê `PORT`).
- Antes de publicar: `npm run lint` e `npm run check:ui` verdes. Depois: `npm run check:ui -- --url <domínio>`.

## Variáveis por nome
Nenhuma. A configuração fica em `libs/config.js` (ver README → "O que configurar antes de publicar").

## Healthcheck
`GET /` responde 200 (conferido em 2026-11-07). Não há healthcheck configurado no serviço.

## Domínio próprio
Registros que a Railway pediu para `protocolos.apaulajardim.com.br` (criar na Cloudflare, zona apaulajardim.com.br):
| Tipo | Nome | Valor | Para quê |
|---|---|---|---|
| CNAME | `protocolos` | `ted24xlq.up.railway.app` | levar o tráfego para o serviço |
| TXT | `_railway-verify.protocolos` | `railway-verify=85399e35f0d523ce8060793ca22b95d17bc9147e2772bfd137a35b2af9c21157` | provar que o domínio é nosso |
Proxy da Cloudflare: "Somente DNS" (nuvem cinza) até o certificado sair; se ligar o proxy, SSL/TLS em "Full".
Depois que responder: preencher `SITE_URL` em `libs/config.js` com `https://protocolos.apaulajardim.com.br`.
Conferir: `mcp Railway domain-status` ou painel da Railway → serviço → Settings → Networking.

## Rollback
Railway → serviço `paulajardim_psq` → Deployments → deploy anterior → Redeploy. Sem banco, voltar a versão não
tem efeito colateral.

## Observação
No mesmo projeto existem outros serviços da Paula (`landingpage_paula`, `paulajardim_app_livro`) e de outros
clientes. Este serviço é independente deles.
