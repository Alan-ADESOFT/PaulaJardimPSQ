# Mapa de features — Paula Jardim · Protocolos PSP e PSQ
Legenda: planejada · em dev · bloqueada · pronta · validada · legado · removida
Confiança: [C] Confirmado no código · [P] Documentado pelo provedor · [V] Pendente de verificação

| Feature | Status | Sprint | Rotas / páginas | Componentes-chave | Obs |
|---|---|---|---|---|---|
| Landing com 10 seções (Hero → Footer) | validada [C] | 00 | `/` | `components/<Secao>/` | build, lint e check:ui verdes; prints em 390/820/1440px |
| Botão "aplicar" compartilhado | validada [C] | 00 | `/` | `ui/ApplyButton` | 4 usos; HTML idêntico ao original |
| Destino da aplicação (form → WhatsApp → #aplicacao) | validada [C] | 01 | `/` | `libs/config.js` | Google Forms (forms.gle/3WcByLFe7bQRJoXZA), nova aba; conferido no ar |
| Meta Pixel (PageView + Lead no clique) | pronta [C] | 00 | `/` | `pages/index.js`, `libs/animations.js` | desligado até preencher `META_PIXEL_ID`; disparo real [V] |
| SEO e prévia de compartilhamento (OG) | pronta [C] | 00 | `/` | `pages/index.js` | `og:image` precisa de `SITE_URL` para URL absoluta |
| Animações (abertura, revelação, canvas, magnético) | validada [C] | 00 | `/` | `libs/animations.js` | sem erros de console nos 3 tamanhos |
| Tokens semânticos | validada [C] | 00 | — | `styles/tokens.css` | zero diferença visual medida |
| Acessibilidade automatizada (check:ui) | validada [C] | 00 | — | `scripts/check-ui.mjs` | alvos 44/24px, rolagem lateral, console, nomes |
| Movimento reduzido | bloqueada | 00 | `/` | `libs/animations.js` | aguarda decisão (ver DECISIONS.md) |
