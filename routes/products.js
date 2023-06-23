const express = require('express');
const router = express.Router();
const {productModel}=require("../models")
const {getProducts}= require("../controllers/products")

// Ruta para mostrar la lista de productos
router.get('/', getProducts);

// Otras rutas como crear un producto, actualizarlo, eliminarlo, etc.

module.exports = router;
