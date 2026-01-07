// tests/app.test.js
const request = require('supertest');
const app = require('../index');  // Importa la app Express

describe('GET /', () => {
  it('debería devolver un mensaje de bienvenida', async () => {
    const response = await request(app).get('/');  // Realiza una solicitud GET a la ruta '/'
    expect(response.status).toBe(200);  // Verifica que el código de estado sea 200 (OK)
    expect(response.text).toBe('<h1>Hola, este es el primer commit para el reto!</h1>');  // Verifica que el mensaje sea el esperado
  });
});

