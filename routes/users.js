const express = require('express');
const router = express.Router();
const {registerUser, loginUser, renderLogin, renderHome, renderRegister}=require("../controllers/users")

/**
 * Registro de usuario nuevo
 */
router.post("/register",registerUser)
router.get("/register", renderRegister);

/**
 * Login de un usuario existente
 */
router.post("/login",loginUser)
router.get("/login", renderLogin);

/**
 * Home
 */
router.get('/', renderHome);



module.exports = router;