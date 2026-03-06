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

See `docs/architecture.md` and `docs/backlog.md` for current status and next steps.
