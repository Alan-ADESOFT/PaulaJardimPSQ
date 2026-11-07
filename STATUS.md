# STATUS — Paula Jardim · Protocolos PSP e PSQ
Atualizado: 2026-11-07 · por: Claude Code · branch: main (e claude/serene-shannon-dmwco9) · commit: ver `git log` (sprint 02)

## Sprint atual
02 — Letras PSP/PSQ da Hero no celular · aberta e fechada em 2026-11-07 · arquivo: docs/sprints/sprint-02-hero-letras-celular.md

## Em andamento
- Nada. Próxima sprint ainda não aberta.

## Concluído (sprints 00 a 02)
- Zip importado, no padrão FlowTech (tokens semânticos, `ApplyButton`, lint, check:ui, documentação).
- No ar na Railway (projeto Sigma System, serviço `paulajardim_psq`): https://paulajardimpsq-production.up.railway.app
- Branch `main` no GitHub; push na `main` publica sozinho.
- Botões "aplicar" levam ao formulário https://forms.gle/3WcByLFe7bQRJoXZA (abre em nova aba).
- Hero: no celular as letras PSP/PSQ passam no peito; no notebook a foto não cobre mais o botão.

## Bloqueios
- Subdomínio protocolos.apaulajardim.com.br cadastrado na Railway; falta criar CNAME + TXT na Cloudflare (valores em `deploy/README.md`).
- ID do Pixel ainda vazio em `libs/config.js`.
- No GitHub, a branch padrão ainda é `claude/serene-shannon-dmwco9`; trocar para `main` em Settings → Branches.

## Precisa de decisão do Brenno
- Animações: respeitar ou não quem desliga "efeitos de animação" no computador/celular (hoje ignora; ver DECISIONS.md).
- Dourado dos rótulos pequenos (ex.: "Rota 1") tem contraste 4,42:1, um pouco abaixo de 4,5:1. Escurecer levemente o tom?
- Avisar sobre cookies (LGPD) antes de ligar o Pixel da Meta?

## Próxima ação
- Quando o subdomínio responder: `SITE_URL = 'https://protocolos.apaulajardim.com.br'` em `libs/config.js` e publicar.

## Observações (candidatas a regra — ver regra dos dois erros)
- Ao ajustar layout, conferir de 360 a 1920px (o 1º ajuste da Hero só olhou o celular e o problema do Brenno era no notebook).
