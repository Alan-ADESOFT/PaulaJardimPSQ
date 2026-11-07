# Componentes — Paula Jardim · Protocolos PSP e PSQ

## Compartilhados (`components/ui/`)
### ApplyButton — `components/ui/ApplyButton/ApplyButton.jsx`
Botão-link para a aplicação individual. Destino vem de `libs/config.js` (`APPLY_URL` → WhatsApp → `#aplicacao`);
link externo abre em nova aba.
| Prop | Tipo | Padrão | Efeito |
|---|---|---|---|
| `children` | texto | — | rótulo do botão (nomeia a ação) |
| `withLock` | boolean | `false` | cadeado à esquerda que "abre" no hover |
- Usos: Hero (sem cadeado), PSP, PSQ e Aplicação (com cadeado).
- Estados: default · hover (brilho dourado, seta troca, cadeado abre) · focus-visible (contorno `--focus-ring`) ·
  magnético no mouse (segue o cursor; via `libs/animations.js`) · clique dispara o evento do Pixel.
- Sem disabled/loading: é um link, não envia formulário.
- Estilo em `styles/globals.css` (`.pj-btn`), não em CSS Module, porque as animações e as seções dependem das
  classes globais.

## Seções (`components/<Secao>/`)
Uma seção por pasta, sem props, na ordem de `pages/index.js`: Hero, Intro, Journey, Psp, Psq, Vault, About, Faq,
Application, Footer. Auxiliares: PageOverlays (grão, progresso, capítulo) e IntroSignature (assinatura de abertura).

## Padrões globais (`styles/globals.css`)
| Classe | Papel |
|---|---|
| `pj-wrap` | container central |
| `pj-t`, `pj-h2`, `pj-lead`, `pj-p`, `pj-eyebrow` | tipografia |
| `pj-dark` | seção escura (troca textos para os tokens `-inverse`) |
| `pj-ring-wrap` / `pj-ring` / `pj-cta-row` | moldura animada em volta do CTA |
| `pj-faq-item` | item de pergunta (`<details>`) |
| `data-rv`, `data-mask` | entrada animada ao rolar (classe `in`) |
