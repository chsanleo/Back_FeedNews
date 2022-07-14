const supertest = require('supertest');
const { app, server } = require('../index.js');

const request = supertest(app);

describe('API helthCheck test', () => {
  afterAll(async () => {
    server.close();
  });

  describe('GET /healthcheck', () => {
    it('example request using a mocked database instance', async () => {
      const res = await request.get('/healthcheck');

      expect(res.status).toBe(202);
    });
  });
});