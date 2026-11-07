# STATUS — Paula Jardim · Protocolos PSP e PSQ
Atualizado: 2026-11-07 · por: Claude Code · branch: claude/serene-shannon-dmwco9 · commit: 05b181a

## Sprint atual
00 — Base no padrão FlowTech · aberta e fechada em 2026-11-07 · arquivo: docs/sprints/sprint-00-base-padrao-flowtech.md

## Em andamento
- Nada. Sprint 00 concluída; próxima sprint ainda não aberta.

## Concluído nesta sprint
- Zip importado para o repositório e compilando (Next.js 16, Pages Router, CSS Modules).
- Cores migradas para tokens semânticos sem mudar o visual (conferido elemento a elemento).
- Botão "aplicar" virou um componente só (`components/ui/ApplyButton`).
- Lint, conferência automática de celular/tablet/desktop e documentação do padrão.
- Corrigido: "voltar ao início" pequeno demais no toque; contorno de foco com pouco contraste.

## Bloqueios
- Links de aplicação, WhatsApp, ID do Pixel e domínio vazios em `libs/config.js`: os botões levam ao fim da página.

## Precisa de decisão do Brenno
- Animações: respeitar ou não quem desliga "efeitos de animação" no computador/celular (hoje ignora; ver DECISIONS.md).
- Dourado dos rótulos pequenos (ex.: "Rota 1") tem contraste 4,42:1, um pouco abaixo de 4,5:1. Escurecer levemente o tom?
- Avisar sobre cookies (LGPD) antes de ligar o Pixel da Meta?

## Próxima ação
- Receber da cliente o link do formulário (ou WhatsApp), o ID do Pixel e o domínio; preencher `libs/config.js` e publicar na Railway.

## Observações (candidatas a regra — ver regra dos dois erros)
- Nenhuma nova (as duas desta sprint já viraram armadilha no CLAUDE.md).
