const express = require("express");
const fs = require("fs")
const router = express.Router();
const ROUTE_PATH = __dirname;


const removerExtension = (fileruta) => {
    return fileruta.split('.').shift()
}

fs.readdirSync(ROUTE_PATH).filter((archivoDeRuta) => {
    const ruta = removerExtension(archivoDeRuta)
    if(ruta !== 'index'){
        console.log(`Cargando ruta ${ruta}`)
        router.use(`/${ruta}`,require(`./${archivoDeRuta}`)) 
    }
})
module.exports = router