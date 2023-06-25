const express = require('express');
const router = express.Router();
const {registerUser, loginUser}=require("../controllers/users")

/**
 * Registro de usuario nuevo
 */
router.post("/register",registerUser)


/**
 * Login de un usuario existente
 */
router.post("/login",loginUser)
module.exports = router;