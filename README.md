# Protocolos PSP e PSQ | Paula Jardim

Landing page em **Next.js (Pages Router)**, JavaScript puro e CSS Modules.

## Como rodar

Requisitos: Node.js 20.9 ou superior (recomendado 22).

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:3000
npm run build    # build de produção
npm start        # serve o build (usa a variável PORT, se existir)
```

Na Railway não é preciso configurar nada além do padrão: build `npm run build` e start `npm start`.

## O que configurar antes de publicar

Tudo fica em **`libs/config.js`**:

| Campo | Para que serve |
| --- | --- |
| `SITE_URL` | Domínio final, sem barra no fim. Usado na prévia de compartilhamento (og:image) |
| `APPLY_URL` | Link do formulário de aplicação. Todos os botões "aplicar" usam ele |
| `WHATSAPP_NUMBER` / `WHATSAPP_MESSAGE` | Usados nos botões só se `APPLY_URL` estiver vazio |
| `META_PIXEL_ID` | ID do Pixel da Meta. Se vazio, o Pixel não carrega |
| `META_PIXEL_CLICK_EVENT` | Evento enviado ao clicar em "aplicar" (padrão: `Lead`) |

Sem nenhum link preenchido, os botões levam até a seção final da página.

## Estrutura

```
pages/index.js        página (monta as seções e inicia as animações)
pages/_app.js         CSS global e fontes (next/font)
pages/_document.js    idioma, favicon e tema claro
components/<Secao>/   uma pasta por seção: <Secao>.jsx + <Secao>.module.css
styles/tokens.css     cores, fontes e medidas em variáveis
styles/globals.css    base, tipografia, botões, cards e efeitos compartilhados
styles/fonts/         arquivos das fontes (Fraunces, Inter, Alex Brush)
libs/config.js        links, WhatsApp e Pixel
libs/animations.js    animações da página (JavaScript puro, sem dependências)
public/               imagens (WebP), favicon e imagem de compartilhamento
```

Seções, na ordem: `Hero`, `Intro`, `Journey`, `Psp`, `Psq`, `Vault`, `About`, `Faq`, `Application`, `Footer`
(mais `PageOverlays` e `IntroSignature`, que são a textura de fundo, a barra de progresso, o indicador de capítulo e a assinatura de abertura).

## Observações

- **Textos:** ficam nos componentes de cada seção. Os rótulos animados (as 6 faculdades, o "+200" e as palavras riscadas da introdução) também estão no JSX, em atributos `data-*`.
- **Cores e medidas:** use sempre as variáveis de `styles/tokens.css`. As animações em canvas leem as cores dessas mesmas variáveis (`--rgb-*`).
- **Classes globais:** as classes com prefixo `pj-` e as de estado (`in`, `on`, `loaded`...) são usadas pelas animações. Por isso aparecem como `:global(...)` dentro dos módulos. Não renomeie essas classes.
- **Modo escuro:** a página força o tema claro, para não mudar de cor em celulares com modo escuro.
- **Animações:** rodam sempre, inclusive em computadores com "efeitos de animação" desligados no sistema. Ao editar textos com `npm run dev`, recarregue a página (F5) para as animações de texto se refazerem.
