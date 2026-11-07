# STATUS — Paula Jardim · Protocolos PSP e PSQ
Atualizado: 2026-11-07 · por: Claude Code · branch: main (e claude/serene-shannon-dmwco9) · commit: ver `git log` (sprint 01)

## Sprint atual
01 — Link do formulário de aplicação · aberta e fechada em 2026-11-07 · arquivo: docs/sprints/sprint-01-link-aplicacao.md

## Em andamento
- Nada. Próxima sprint ainda não aberta.

## Concluído (sprints 00 e 01)
- Zip importado, no padrão FlowTech (tokens semânticos, `ApplyButton`, lint, check:ui, documentação).
- No ar na Railway (projeto Sigma System, serviço `paulajardim_psq`): https://paulajardimpsq-production.up.railway.app
- Branch `main` no GitHub; push na `main` publica sozinho.
- Botões "aplicar" levam ao formulário https://forms.gle/3WcByLFe7bQRJoXZA (abre em nova aba).

## Bloqueios
- ID do Pixel e domínio próprio ainda vazios em `libs/config.js`.
- No GitHub, a branch padrão ainda é `claude/serene-shannon-dmwco9`; trocar para `main` em Settings → Branches.

## Precisa de decisão do Brenno
- Animações: respeitar ou não quem desliga "efeitos de animação" no computador/celular (hoje ignora; ver DECISIONS.md).
- Dourado dos rótulos pequenos (ex.: "Rota 1") tem contraste 4,42:1, um pouco abaixo de 4,5:1. Escurecer levemente o tom?
- Avisar sobre cookies (LGPD) antes de ligar o Pixel da Meta?

## Próxima ação
- Receber o ID do Pixel e o domínio próprio; preencher `libs/config.js` e apontar o DNS (ver `deploy/README.md`).

## Observações (candidatas a regra — ver regra dos dois erros)
- Nenhuma nova.
