import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../index.js';

describe('coordination-drill-live-e2e-r01', () => {
  it('should return ok status for root', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
    expect(response.body.service).toBe('coordination-drill-live-e2e-r01');
  });

  it('should return healthz with ok and version', async () => {
    const response = await request(app).get('/healthz');
    expect(response.status).toBe(200);
    expect(response.body.ok).toBe(true);
    expect(response.body.version).toBe('1.0.0');
  });
});