# Instruções para agentes
1. `CLAUDE.md` — regras de trabalho e comandos verificados
2. `STATUS.md` — onde paramos (e `HANDOFF.md`, se existir)
3. Arquivo da sprint atual em `docs/sprints/`
Só quando a tarefa tocar o assunto: UI → `brandbook/` · Pixel/WhatsApp → `integrations/README.md` ·
publicação → `deploy/README.md` · produto → `docs/CONTEXTO.md` · por que algo é assim → `DECISIONS.md`.
Padrão de trabalho: skill `flowtech-project-setup` (não copiar a skill para o repositório).
Não introduza padrões diferentes sem inventário, análise de impacto e registro em `DECISIONS.md`.
Toda entrega termina atualizando `STATUS.md`, `CHANGELOG.md`, `FEATURES.md` e a sprint, com `node scripts/check-docs.mjs` verde.
