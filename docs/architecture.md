# Architecture (Scaffold Baseline)

## Intent
MindMesh targets a persistent, real-time, multi-agent chatroom architecture:

- Web frontend for room UX
- Backend for persistence + orchestration
- Shared contracts package for cross-app typing
- Storage layer (planned)
- Realtime transport (planned)

## Current scaffold

### `packages/shared`
Shared TypeScript types used by both frontend and backend.

### `apps/server`
Backend process entrypoint placeholder.

- Verifies process startup
- Imports shared contracts
- Loads shared reply-policy + anti-loop guardrail config from environment
- Demonstrates decision gate for orchestrator reply eligibility
- Exposes explicit TODO markers for:
  - persistence wiring
  - realtime room updates
  - OpenRouter/model orchestration integration

### `apps/web`
Frontend entrypoint placeholder.

- Imports shared contracts
- Confirms compile-time contract integration
- Includes placeholder rendering model for reply guardrail controls
- Exposes TODO marker for UI/runtime wiring

## Tooling

- `pnpm` workspace monorepo
- TypeScript project references (`tsc -b`)
- Build outputs emitted to `dist/` in each package

## Known limitations

- No HTTP server yet
- No database bootstrap yet
- No realtime channel yet
- No model provider integration yet
- No frontend runtime framework wired yet
- Guardrails exist but are not yet persisted per-room/agent

These are tracked in `docs/backlog.md` in priority order.
