// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Servir un archivo HTML simple
app.get('/', (req, res) => {
  res.send('<h1>Hola, esto es para el hito 4</h1>');
});

// Exporta la app para poder probarla en los tests
module.exports = app;

// Inicia el servidor
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Aplicación escuchando en puerto ${port}`);
  });
}
