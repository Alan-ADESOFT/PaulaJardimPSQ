# Protocolos PSP e PSQ | Paula Jardim

Landing page de venda dos dois protocolos individuais da Paula Jardim: **PSP** (Protocolo de Sustentação
de Prosperidade, 45 dias) e **PSQ** (Protocolo Salto Quântico, 90 dias). A página leva a pessoa até a
aplicação individual (formulário ou WhatsApp). Contexto do produto e glossário: `docs/CONTEXTO.md`.

Stack: **Next.js 16 (Pages Router)**, React 19, JavaScript puro e CSS Modules. Sem banco, sem API própria,
sem variáveis de ambiente. Padrão de trabalho: FlowTech (ver `CLAUDE.md`).

## Como rodar

Requisitos: Node.js 20.9 ou superior (recomendado 22, ver `.nvmrc`).

```bash
npm install
npm run dev          # desenvolvimento em http://localhost:3000
npm run build        # build de produção
npm start            # serve o build (usa a variável PORT, se existir)
npm run lint         # ESLint (regras do Next.js)
npm run check:ui     # confere celular, tablet e desktop (precisa de build e do Playwright)
npm run check:docs   # confere a documentação do padrão FlowTech
```

`check:ui` usa o Playwright, que não vem no `npm install` para não pesar a instalação. Na primeira vez:
`npm i -D playwright && npx playwright install chromium`.

Se o `npm run build` falhar com "`<Html>` should not be imported outside of pages/_document", a variável
`NODE_ENV` do terminal está como `development`. Rode `NODE_ENV=production npm run build`.

## O que configurar antes de publicar

Tudo fica em **`libs/config.js`**:

| Campo | Para que serve |
| --- | --- |
| `SITE_URL` | Domínio final, sem barra no fim. Usado na prévia de compartilhamento (og:image) |
| `APPLY_URL` | Link do formulário de aplicação. Todos os botões "aplicar" usam ele |
| `WHATSAPP_NUMBER` / `WHATSAPP_MESSAGE` | Usados nos botões só se `APPLY_URL` estiver vazio |
| `META_PIXEL_ID` | ID do Pixel da Meta. Se vazio, o Pixel não carrega |
| `META_PIXEL_CLICK_EVENT` | Evento enviado ao clicar em "aplicar" (padrão: `Lead`) |

Sem nenhum link preenchido, os botões levam até a seção final da página (`#aplicacao`).

## Estrutura

```
pages/index.js             página (monta as seções, SEO e Pixel; inicia as animações)
pages/_app.js              CSS global e fontes locais (next/font)
pages/_document.js         idioma, favicon e tema claro forçado
components/<Secao>/        uma pasta por seção: <Secao>.jsx + <Secao>.module.css
components/ui/ApplyButton/ botão "aplicar" compartilhado (usado em 4 seções)
styles/tokens.css          fonte única dos tokens: primitivos + semânticos
styles/globals.css         base, tipografia, botões, cards e efeitos compartilhados (classes pj-*)
styles/fonts/              Fraunces, Inter e Alex Brush (licença OFL em LICENSE.txt)
libs/config.js             links, WhatsApp e Pixel
libs/animations.js         animações da página (JavaScript puro, sem dependências)
public/                    imagens (WebP), favicon e imagem de compartilhamento
brandbook/                 regras visuais (brand-system.md) e componentes (components.md)
integrations/              Meta Pixel e link de WhatsApp: como o projeto usa
deploy/                    como publicar (Railway)
docs/                      contexto do produto e sprints
scripts/                   check-ui.mjs e check-docs.mjs
```

Seções, na ordem: `Hero`, `Intro`, `Journey`, `Psp`, `Psq`, `Vault`, `About`, `Faq`, `Application`,
`Footer` (mais `PageOverlays` e `IntroSignature`: textura de fundo, barra de progresso, indicador de
capítulo e assinatura de abertura).

## Observações

- **Textos:** ficam nos componentes de cada seção. Os rótulos animados (as 6 faculdades, o "+200" e as
  palavras riscadas da introdução) também estão no JSX, em atributos `data-*`.
- **Cores e medidas:** componentes usam os tokens semânticos de `styles/tokens.css`
  (`--surface-*`, `--text-*`, `--border-*`, `--accent*`...). Regras em `brandbook/brand-system.md`.
  As animações em canvas leem as cores das variáveis `--rgb-*`.
- **Classes globais:** as classes com prefixo `pj-` e as de estado (`in`, `on`, `loaded`...) são usadas
  pelas animações. Por isso aparecem como `:global(...)` dentro dos módulos. Não renomeie essas classes.
- **Modo escuro:** a página força o tema claro, para não mudar de cor em celulares com modo escuro.
- **Animações:** rodam sempre, inclusive em computadores com "efeitos de animação" desligados no sistema
  (decisão registrada em `DECISIONS.md`). Ao editar textos com `npm run dev`, recarregue a página (F5)
  para as animações de texto se refazerem.
