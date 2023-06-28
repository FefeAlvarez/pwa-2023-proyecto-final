require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoDBConnect = require('./config/mongo');
const session = require('express-session');


const app = express();

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 8081;



// Configuración de la carpeta de archivos estáticos
app.use(express.static('imagesStorage'));

// recibe datos del formulario
app.use(express.urlencoded({ extended: false }));

//Rutas
app.use('/api', require('./routes'));

app.listen(port, () =>
  console.log(`App funcionando en http://localhost:${port}`)
);

mongoDBConnect();
module.exports = app;
