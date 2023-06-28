const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  modifyProduct,
  deleteProduct
} = require('../controllers/products');
const {
  createProductValidation,
  updateProductValidation,
  deleteProductValidation
} = require('../validators/products');
const checkUserRole = require('../middlewares/checkUserRole');

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
router.put('/:id', updateProductValidation, modifyProduct);

/**
 * Eliminar un producto
 */
router.delete('/:id', deleteProductValidation, deleteProduct);

module.exports = router;
