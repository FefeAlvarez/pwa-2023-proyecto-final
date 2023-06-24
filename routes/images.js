const express = require('express');
const router = express.Router();
const {getImages, uploadImage}=require("../controllers/images")
const imageUploaderMiddleware=require("../utils/imageUploader")

/**
 * Obtiene listado de imagenes
 */
router.get("/",getImages)
/**
 * Sube una imagen 
 */
router.post("/",imageUploaderMiddleware.single("myfile") ,  uploadImage)

module.exports = router;