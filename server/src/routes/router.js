const { Router } = require("express");

const getAllProductsHandler = require("../handlers/productos/getAllProductsHandler");
const postProductHandler = require("../handlers/productos/postProductHandler");

const router = Router();

//!get de productos
router.get("/productos", getAllProductsHandler);

//!post de productos
router.post("/crearProducto", postProductHandler);

module.exports = router;
