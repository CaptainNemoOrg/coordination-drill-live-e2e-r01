import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const VERSION = '1.0.0';

app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'coordination-drill-live-e2e-r01' });
});

app.get('/healthz', (req, res) => {
  res.json({ ok: true, version: VERSION });
});

if (import.meta.url === `file://${process.argv[1]}`) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;