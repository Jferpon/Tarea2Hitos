const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Servir un archivo HTML simple
app.get('/', (req, res) => {
  res.send('<h1>Hola, Mundo desde Node.js!</h1>');
});

app.listen(port, () => {
  console.log(`Aplicación escuchando en puerto ${port}`);
});
