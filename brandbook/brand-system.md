# Sistema visual — Paula Jardim · Protocolos PSP e PSQ
Sumário: Identidade · Fonte de tokens · Tokens semânticos · Paleta de efeitos · Tipografia e layout ·
Componentes · Acessibilidade · Voz e tom · Checklist visual

## Identidade e referências aprovadas
- Marca pessoal da Paula Jardim: marfim + dourado + grafite, editorial e sofisticada. Assinatura manuscrita
  ("Paula Jardim" em Alex Brush) na abertura e nas seções.
- Origem: o visual veio pronto no zip do projeto (sem Figma, sem `brandbook/references/`). Tratamos o que está
  no código como a referência aprovada. **Pendente de verificação:** existência de manual de marca/Figma oficial.
- Sem logotipo em arquivo: o "logo" é o nome tipográfico e o selo "PJ" (lacre na seção de aplicação).

## Fonte de tokens
Arquivo único: `styles/tokens.css` (projeto só web; sem app ou e-mail com a mesma marca, por isso sem `tokens.json`).
Duas camadas no mesmo arquivo: **primitivos** (`--color-*`, `--rgb-*`) e **semânticos** (abaixo).
Para mudar a identidade: altere o primitivo (ex.: `--color-gold`) ou para onde o semântico aponta. Nunca crie
cor solta em componente.

## Tokens semânticos
| Papel | Token | Aponta para | Uso |
|---|---|---|---|
| Fundo da página | `--surface-page` | ivory `#f5f0e8` | fundo geral, seções claras |
| Fundo elevado | `--surface-raised` | ivory-light `#faf7f1` | cartões claros, gradientes de seção |
| Fundo areia | `--surface-muted` | sand `#eadfcf` | blocos de destaque claros |
| Fundo névoa | `--surface-subtle` | mist `#ece9e4` | transição de seção (PSP) |
| Cartão branco | `--surface-card` | white | balões e marcadores |
| Fundo escuro | `--surface-inverse` | ink `#1d1b18` | faixas e selos escuros |
| Fundo escuro elevado | `--surface-inverse-raised` | graphite `#24221f` | seções `.pj-dark` |
| Título | `--text-strong` | ink | títulos e destaques em fundo claro |
| Texto | `--text-body` | text `#3a3732` | parágrafos |
| Texto secundário | `--text-muted` | muted `#6a645c` | legendas, notas |
| Texto de destaque | `--text-accent` | gold-dark `#8a6a31` | `em` nos títulos, rótulos (eyebrow) |
| Texto em fundo escuro | `--text-inverse` | offwhite `#f3ede3` | parágrafos em seção escura |
| Título em fundo escuro | `--text-strong-inverse` | `#fbf6ec` | títulos `.pj-t` em seção escura |
| Texto máximo em escuro | `--text-inverse-strong` | white | números/realces em escuro |
| Destaque em escuro | `--text-accent-inverse` | gold-light `#e4ce9f` | `em` e rótulos em seção escura |
| Borda suave | `--border-subtle` | line (dourado 22%) | divisórias, FAQ |
| Borda dourada | `--border-accent` / `--border-accent-inverse` | gold / gold-light | contornos ativos |
| Borda de vidro | `--border-on-glass` | white | chips translúcidos do hero |
| Ação principal | `--primary` / `--primary-contrast` | ink / offwhite | botão "aplicar" |
| Dourado da marca | `--accent` / `--accent-strong` / `--accent-soft` | gold / gold-dark / gold-light | traços, pontos, SVGs |
| Foco | `--focus-ring` | gold-dark | contorno de foco (teclado) |
| Sombra | `--shadow-color` | ink | sombra sólida |
| Máscara | `--mask-solid` | black | `mask-image` (canal alfa, não aparece) |

Não há tokens de sucesso/aviso/erro: a página não tem formulário nem mensagens de sistema. Criar quando nascer o uso.

## Paleta de efeitos (exceção documentada)
Transparências e tons derivados (`--color-gold-light-a35`, `--color-offwhite-a70`, `--color-ink-121110`...) e os
canais `--rgb-*` do canvas são usados só em brilhos, sombras, gradientes, vidro e animações. Ficam como primitivos
porque criar um semântico para cada opacidade inflaria o arquivo sem ganho. Os nomes vieram gerados no zip
(`<base>-<hex>`/`<base>-aNN`); renomear é limpeza opcional, não necessária.

## Tipografia, escalas e layout
- Famílias (arquivos locais em `styles/fonts/`, OFL): `--font-serif` Fraunces (títulos, itálicos), `--font-sans`
  Inter (texto, botões), `--font-script` Alex Brush (assinaturas). Fallbacks no `tokens.css`.
- Escala em uso: título de seção `clamp(30px, 3.2vw, 44px)`, lead `clamp(19px, 1.6vw, 22px)`, texto 16px/1.72–1.75,
  eyebrow 17px itálico, botão 15px/600.
- Container: `.pj-wrap` = `min(1120px, 100% - 48px)`. Respiro de seção: `--space-section`. Onda entre seções: `--wave-height`.
- Breakpoints em uso: 720px (celular), 980px (tablet), 1199px e 1359px (ajustes pontuais).
- Raio: `999px` (pílulas), `50%` (círculos), 24–28px (cartões). Ainda sem tokens de espaço/raio (ver `DECISIONS.md`).
- Movimento: `--ease-out`; animações em `libs/animations.js` e keyframes nos CSS.

## Componentes e padrões
Detalhes, variantes e estados em `brandbook/components.md`. Classes globais compartilhadas (`pj-btn`, `pj-t`,
`pj-h2`, `pj-p`, `pj-eyebrow`, `pj-dark`, `pj-wrap`) vivem em `styles/globals.css`.

## Acessibilidade e responsividade
Contraste medido (WCAG 2.x) dos pares principais:
| Par | Contraste | Resultado |
|---|---|---|
| `--text-strong` / `--surface-page` | 15,15:1 | ok |
| `--text-body` / `--surface-page` | 10,44:1 | ok |
| `--text-muted` / `--surface-page` | 5,16:1 | ok |
| `--text-muted` / `--surface-muted` | 4,44:1 | abaixo de 4,5 (evitar este par em texto pequeno) |
| `--text-accent` / `--surface-page` | 4,42:1 | ok só para texto grande; eyebrow de 17px fica no limite (decisão pendente) |
| `--primary-contrast` / `--primary` | 14,76:1 | ok |
| `--text-inverse` / `--surface-inverse-raised` | 13,62:1 | ok |
| `--text-accent-inverse` / `--surface-inverse-raised` | 10,30:1 | ok |
| `--focus-ring` em todas as superfícies | 3,16:1 a 4,69:1 | ok (mínimo 3:1) |
- Foco visível global: `.pj :focus-visible` com `--focus-ring`, 2px, offset 4px.
- Alvos: 44px no toque e 24px no mouse, conferidos por `npm run check:ui`.
- Movimento reduzido: só FAQ e um bloco da introdução respeitam `prefers-reduced-motion`; o JS ignora de
  propósito (`DECISIONS.md`).
- Tema: claro forçado (`color-scheme: only light`).

## Voz e tom
- Fala direto com "você", 2ª pessoa, frases curtas e afirmativas. A Paula fala em 1ª pessoa nas seções pessoais.
- Vocabulário: prosperidade, sustentação, identidade, alicerce, salto, piloto automático. Sem gíria, sem emoji.
- CTAs nomeiam a ação: "Faça sua aplicação individual", "Aplicar para o Protocolo PSP".
- Seletividade como valor: acesso por aplicação, processo individual e confidencial.

## Checklist visual
- [ ] Nenhuma cor fora de token semântico (exceto paleta de efeitos)
- [ ] CTA novo usa `<ApplyButton>`
- [ ] Contraste conferido (tabela acima) e `npm run check:ui` verde
- [ ] Testado em 390px, 820px e 1440px
