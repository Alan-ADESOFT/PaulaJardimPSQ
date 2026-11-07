# Paula Jardim · Protocolos PSP e PSQ — regras para agentes
> Atualizado em 2026-11-07. Regras aqui valem para toda sessão; conhecimento ocasional está nos documentos apontados.

## Ordem de leitura
STATUS.md → sprint atual (`docs/sprints/`) → só então, conforme a tarefa: `brandbook/` (UI) ·
`integrations/README.md` (Pixel/WhatsApp) · `deploy/README.md` (publicação) · `docs/CONTEXTO.md` (produto) · código envolvido.
Padrão: skill `flowtech-project-setup` (citada pelo nome, nunca copiada para o repositório).

## Stack e comandos verificados
Next.js 16.4 (Pages Router) · React 19.3 · JavaScript (`.js/.jsx`) · CSS Modules · Node >= 20.9 (`.nvmrc`: 22).
- `npm run dev` · `npm run build` · `npm start`
- `npm run lint` — ESLint 9, config `eslint.config.mjs` (core-web-vitals do Next)
- `npm run check:ui` — Playwright em celular/tablet/desktop: alvos de toque, rolagem lateral, console, nomes acessíveis. Precisa de build antes.
- `npm run check:docs` — limites e arquivos obrigatórios desta documentação
Critério de entrega de código: `build`, `lint` e `check:ui` verdes.

## Arquitetura real
Landing page de uma página só. Sem banco, sem `pages/api`, sem variáveis de ambiente, sem e-mail.
- `pages/index.js` monta as seções na ordem, define SEO/OG e carrega o Pixel. `_app.js` registra as fontes locais.
- `components/<Secao>/<Secao>.jsx` + `.module.css` colocalizado (padrão do projeto). Texto da página fica no JSX.
- `components/ui/` — componentes compartilhados entre seções (hoje: `ApplyButton`).
- `libs/config.js` — links de aplicação, WhatsApp e Pixel (constantes, não env). `libs/animations.js` — todas as animações (JS puro, roda uma vez no `useEffect` da página).
- `styles/globals.css` — classes globais `pj-*` compartilhadas (botão, cards, tipografia, reveal).

## Regras de design e componentes
- Fonte única dos tokens: `styles/tokens.css`. Componente consome **semântico** (`--surface-*`, `--text-*`, `--border-*`, `--primary*`, `--accent*`, `--focus-ring`, `--shadow-color`, `--mask-solid`). Não use `--color-ivory`, `--color-gold` etc. direto; se faltar papel, crie o semântico no `tokens.css`.
- Exceção documentada: brilhos, sombras e gradientes usam a paleta de efeitos (`--color-<base>-aNN`, `--color-<base>-<hex>`) e o canvas usa `--rgb-*`. Detalhes em `brandbook/brand-system.md`.
- Medidas ainda são px/clamp soltos no CSS (herdado do zip). Código novo não aumenta isso sem necessidade; a migração para escala de espaçamento é decisão pendente (`DECISIONS.md`).
- Todo botão "aplicar" é `<ApplyButton>` (`withLock` para a variante com cadeado). Não copie o markup de `.pj-btn`.
- Classes `pj-*`, `js-apply`, `magnetic` e as de estado (`in`, `on`, `lit`, `loaded`, `js-on`) são lidas por `libs/animations.js`: não renomeie; em CSS Module use `:global(...)`.
- Contraste mínimo: texto 4,5:1, foco e ícones 3:1. Alvo de toque 44px em `pointer: coarse`. Valores medidos em `brandbook/brand-system.md`.

## Regras de domínio, segurança e banco
- Não há dado pessoal nem segredo no projeto. `META_PIXEL_ID` e links são públicos por natureza.
- Copy da página é da cliente (Paula Jardim): não reescreva texto de venda sem pedido; correção de digitação, sim, avisando.

## Fluxo por entrega
Abertura (ler STATUS) → inventário → impacto → reutilizar → exemplos (skill GitHub, se disponível) → implementar → validar com evidência → polimento final → revisar → fechar (STATUS, CHANGELOG, FEATURES, sprint).

## Ao finalizar qualquer tarefa (polimento obrigatório)
- Logs: não há logs no projeto; se criar, `console.error/warn` só com o que, onde e próximo passo, nunca em fluxo normal.
- Comentários: o porquê, regra da cliente, risco; sem narrar código, sem tom de IA; TODO só com dono e contexto.
- Copy vista pelo visitante: tom da marca (`brandbook/brand-system.md` → Voz e tom), sem jargão técnico.

## Armadilhas (regra dos dois erros)
- Não rode `npm run build` com `NODE_ENV=development` no terminal (o build quebra com "`<Html>` should not be imported outside of pages/_document"); use `NODE_ENV=production npm run build`.
- Não suba servidor de teste com `npx next start` em background e só mate o `npx`: o `next-server` fica órfão segurando a porta. Use `npm run check:ui` (gerencia o próprio servidor) ou mate `next-server`.
- Não "conserte" o `reduce = false` de `libs/animations.js` sozinho: é decisão de produto pendente (`DECISIONS.md`).

## Não inventar
Endpoint, versão, env, comando, teste "que passou", aprovação de design: só com comprovação. Rotular Confirmado no código / Documentado pelo provedor / Pendente de verificação.
