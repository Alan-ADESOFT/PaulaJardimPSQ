# STATUS — Paula Jardim · Protocolos PSP e PSQ
Atualizado: 2026-11-07 · por: Claude Code · branch: main (e claude/serene-shannon-dmwco9) · commit: 6d2bbcf

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
- No ar na Railway (projeto Sigma System, serviço `paulajardim_psq`): https://paulajardimpsq-production.up.railway.app
- Branch `main` criada no GitHub; push na `main` publica sozinho.

## Bloqueios
- Link do formulário de aplicação pedido pelo Brenno, mas ainda não recebido: os botões levam ao fim da página.
- ID do Pixel e domínio próprio ainda vazios em `libs/config.js`.
- No GitHub, a branch padrão ainda é `claude/serene-shannon-dmwco9`; trocar para `main` em Settings → Branches.

## Precisa de decisão do Brenno
- Animações: respeitar ou não quem desliga "efeitos de animação" no computador/celular (hoje ignora; ver DECISIONS.md).
- Dourado dos rótulos pequenos (ex.: "Rota 1") tem contraste 4,42:1, um pouco abaixo de 4,5:1. Escurecer levemente o tom?
- Avisar sobre cookies (LGPD) antes de ligar o Pixel da Meta?

## Próxima ação
- Receber o link do formulário e colocar em `APPLY_URL` (`libs/config.js`); push na `main` publica.

## Observações (candidatas a regra — ver regra dos dois erros)
- Nenhuma nova (as duas desta sprint já viraram armadilha no CLAUDE.md).
