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
const userAuthMiddleware = require('../middlewares/userAuthMiddleware');

/**
 * Obtener listado completo de productos
 */
router.get('/', userAuthMiddleware, getAllProducts);

/**
 * Obtener detalle de un producto
 */
router.get('/:id', userAuthMiddleware, getProductById);

/**
 * Crear un producto
 */
router.post('/', userAuthMiddleware, checkUserRole(["admin"]), createProductValidation, createProduct);

/**
 * Modificar un producto
 */
router.put('/:id', userAuthMiddleware, checkUserRole(["admin"]), updateProductValidation, modifyProduct);

/**
 * Eliminar un producto
 */
router.delete('/:id', userAuthMiddleware, checkUserRole(["admin"]), deleteProductValidation, deleteProduct);

module.exports = router;
