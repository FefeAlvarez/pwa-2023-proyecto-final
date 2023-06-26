require('dotenv').config();
const express = require('express');
const cors = require('cors');
const hbs = require('hbs');
const mongoDBConnect = require('./config/mongo');
const path = require('path');
const { renderHome } = require('./controllers/users');

const app = express();

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;

// Motor de plantillas HBS
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

// Configuración de la carpeta de archivos estáticos
app.use(express.static('imagesStorage'));

// recibe datos del formulario
app.use(express.urlencoded({ extended: false }));

// Ruta para la página de inicio
app.get('/', renderHome);
//Rutas
app.use('/api', require('./routes'));

app.listen(port, () =>
  console.log(`App funcionando en http://localhost:${port}`)
);

mongoDBConnect();
module.exports = app;
