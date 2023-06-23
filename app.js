require('dotenv').config();
const express = require('express');
const cors = require('cors');
const hbs = require('hbs');
const port = process.env.PORT || 3000; 
const mongoDBConnect = require("./config/mongo")

const app = express();

app.use(cors());

// Motor de plantillas HBS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Configuración de la carpeta de archivos estáticos
app.use(express.static('public'));

app.use(express.json())

// recibe datos del formulario
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render("home",{nombre:"Fede Alvarez",titulo:"Proyecto Final"});
});

app.listen(port, () =>
  console.log(`App funcionando en http://localhost:${port}`)
);
mongoDBConnect()
module.exports = app;
