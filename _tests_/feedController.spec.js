const supertest = require('supertest');
const { app, server } = require('../index.js');

const request = supertest(app);

const { connectDB, disconnectDB, clear } = require('../core/database/config/mongoDb.js');

describe('API feedController test', () => {
  beforeAll(async () => await connectDB());

  afterEach(async () => await clear());

  afterAll(async () => {
    await disconnectDB();
    server.close();
  });

  describe('POST /feed/create', () => {
    it('example request using a mocked database instance', async () => {
      const res = await request.post('/feed/create').send({   
          title: "Vacaciones en Agosto",
          body: "Las vacaciones en esta epoca del año ...",
          image: "Las vacaciones en esta epoca del año ...",
          imageLink: "http://periodico.es/imagenes/imagen.png",
          source: "http://periodico.es/vacaciones_agosto",
          publisher: "El periodico"
      });

      expect(res.status).toBe(201);
    });
  });
});