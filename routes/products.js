const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  modifyProduct,
  deleteProduct
} = require('../controllers/products');
const { createProductValidation } = require('../validators/products');

/**
 * Obtener listado completo de productos
 */
router.get('/', getAllProducts);

/**
 * Obtener detalle de un producto
 */
router.get('/:id', getProductById);

/**
 * Crear un producto
 */
router.post('/', createProductValidation, createProduct);

/**
 * Modificar un producto
 */
router.put('/:id', modifyProduct);
router.delete('/:id', deleteProduct);
module.exports = router;
