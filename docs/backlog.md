# Backlog

## P0 – Core runnable baseline

1. Add backend HTTP server startup flow (health endpoint + room endpoint skeleton).
2. Add frontend runtime app (Vite/React or equivalent) that connects to backend.
3. Add local persistence bootstrap (SQLite/Postgres + migration flow).
4. Add realtime room transport (WebSocket/SSE) with shared message contracts.
5. Persist room/agent reply guardrail settings and expose CRUD endpoints.
6. Add environment schema validation for server runtime variables.

## P1 – Multi-agent orchestration baseline

1. Add room model orchestration service that reads/writes shared history.
2. Add provider adapter for OpenRouter with retry/error handling.
3. Add per-room worker lifecycle and cancellation semantics.

## P2 – Production hardening

1. Authentication/authorization for room access.
2. Rate limiting and abuse controls.
3. Observability (structured logs, metrics, tracing).
4. CI for lint/typecheck/build/test.
