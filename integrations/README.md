# Integrações — Paula Jardim · Protocolos PSP e PSQ
Última revisão: 2026-11-07 · Tudo roda no navegador; não há servidor, chave secreta nem webhook.

| Provedor | Finalidade | Status | Arquivo | Código |
|---|---|---|---|---|
| Meta Pixel | medir visitas e cliques em "aplicar" para anúncios | pronto, desligado até preencher o ID | `integrations/meta-pixel.md` | `pages/index.js`, `libs/animations.js`, `libs/config.js` |
| WhatsApp (link `wa.me`) | destino dos botões quando não há formulário | pronto, desligado até preencher o número | (só link, sem API) | `libs/config.js` |
| Formulário de aplicação | destino principal dos botões | aguardando link | — | `libs/config.js` (`APPLY_URL`) |

WhatsApp: o link é montado como `https://wa.me/<WHATSAPP_NUMBER>?text=<WHATSAPP_MESSAGE codificada>` e só é usado
se `APPLY_URL` estiver vazio. Número somente com dígitos, com DDI e DDD.
