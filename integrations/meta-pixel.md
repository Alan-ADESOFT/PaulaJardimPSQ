# Meta Pixel — integração
Status: pronto, inativo (ID vazio) · Responsável: FlowTech · Última revisão: 2026-11-07

## 1. Identificação
Mede visitas à página e cliques nos botões "aplicar" para otimizar anúncios da Meta. Consumidores: `pages/index.js`
(carrega o script) e `libs/animations.js` (evento de clique).

## 2. Fontes oficiais
Documentação do Meta Pixel (developers.facebook.com, seção Meta Pixel) — **não verificada nesta revisão**; o código
segue o snippet padrão `fbevents.js`.

## 3. Contratos usados de verdade (Confirmado no código)
- Script: `https://connect.facebook.net/en_US/fbevents.js`, carregado com `next/script` `afterInteractive`,
  só se `META_PIXEL_ID` (em `libs/config.js`) estiver preenchido.
- Na carga: `fbq('init', META_PIXEL_ID)` e `fbq('track', 'PageView')`.
- No clique de qualquer `.js-apply` (todo `<ApplyButton>`): `fbq('track', META_PIXEL_CLICK_EVENT)`; padrão `Lead`.

## 4. Regras do provedor e do negócio
- O ID do Pixel é público (aparece no HTML); não é segredo.
- **Pendente de verificação:** necessidade de aviso de cookies/consentimento (LGPD) antes de ativar o Pixel.

## 5. Implementação local
`libs/config.js` (`META_PIXEL_ID`, `META_PIXEL_CLICK_EVENT`) · `pages/index.js` (bloco `<Script id="meta-pixel">`) ·
`libs/animations.js` (listener em `.js-apply`).

## 6. Resiliência
Se o script não carregar (bloqueador de anúncios), `window.fbq` não existe e o clique segue normalmente, sem erro.

## 7. Operação
Conferir no Gerenciador de Eventos da Meta ou na extensão Meta Pixel Helper após preencher o ID e publicar.

## 8. Proveniência e frescor
Snippet copiado do zip original (2026-10). Revisar se a Meta mudar a versão do `fbevents.js`.
