# MindMesh

MindMesh is a **persistent multi-LLM chatroom PoC**. This repository currently contains a minimal monorepo scaffold with:

- `apps/web` – placeholder frontend entrypoint
- `apps/server` – placeholder backend entrypoint
- `packages/shared` – shared types/contracts used by apps

This is intentionally an early-stage baseline focused on structure and tooling coherence.

## Monorepo layout

- `apps/web`
- `apps/server`
- `packages/shared`
- `docs/`

## Package manager

This repo is configured for **pnpm** workspaces.

## Quickstart

```bash
pnpm install
pnpm typecheck
pnpm build
```

## Scripts

- `pnpm typecheck` – TypeScript project-reference check across all workspaces
- `pnpm build` – compiles all workspaces
- `pnpm dev:server` – run backend dev entrypoint
- `pnpm dev:web` – run frontend placeholder entrypoint

## Environment

No runtime secrets are committed.

Server-side environment variables (planned):

- `OPENROUTER_API_KEY` (not yet wired)
- `DATABASE_URL` (not yet wired)
- `MINDMESH_REPLY_POLICY` (`always` | `mentioned` | `never`, default `mentioned`)
- `MINDMESH_MAX_AGENT_TURNS_PER_HUMAN_MESSAGE` (default `1`)
- `MINDMESH_SAME_AGENT_COOLDOWN_TURNS` (default `1`)
- `MINDMESH_MAX_CONSECUTIVE_AGENT_TURNS` (default `2`)

See `docs/architecture.md` and `docs/backlog.md` for current status and next steps.

## Guardrails baseline

The scaffold includes shared orchestration guardrails to reduce agent ping-pong:

- Reply policy (`always`, `mentioned`, `never`)
- Max agent turns per human message
- Same-agent cooldown (in turns)
- Max consecutive agent turns (stop condition)

These are defined in `@mindmesh/shared` and consumed by the server scaffold.
