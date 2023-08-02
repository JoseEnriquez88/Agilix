const { Router } = require('express');

const getAllProductsHandlers = require('../handlers/productos/getAllProductsHandlers');
const postProductHandler = require('../handlers/productos/postProductHandler');

const router = Router();

//!get de productos
router.get('/productos', getAllProductsHandlers);

//!post de productos
router.post('/crearProducto', postProductHandler);

module.exports = router;
