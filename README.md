# coordination-drill-live-e2e-r01

Coordination drill live e2e r01 - Node.js implementation with Express.

## Running

```bash
pnpm install
pnpm start
```

## Testing

```bash
pnpm test
```

## Endpoints

- `GET /` - Returns { status: "ok", service: "coordination-drill-live-e2e-r01" }
- `GET /healthz` - Returns { ok: true, version: "1.0.0" }