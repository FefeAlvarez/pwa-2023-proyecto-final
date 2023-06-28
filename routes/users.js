const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require('../controllers/users');
const {
  registerUserValidation,
  loginUserValidation
} = require('../validators/users');

/**
 * Registro de usuario nuevo
 */
router.post('/register', registerUserValidation, registerUser);

/**
 * Login de un usuario existente
 */
router.post('/login', loginUserValidation, loginUser);

/**
 * Logout
 */
router.post('/logout', logoutUser);
module.exports = router;
