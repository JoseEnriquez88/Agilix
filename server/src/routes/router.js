const { Router } = require("express");

const getAllProductsHandler = require("../handlers/productos/getAllProductsHandler");
const postProductHandler = require("../handlers/productos/postProductHandler");
const getByIdProductHandler = require("../handlers/productos/getByIdProductHandler");

const router = Router();

//!get de productos
router.get("/productos", getAllProductsHandler);
//! get de productos por id
router.get("/productos/:id",getByIdProductHandler);

//!post de productos
router.post("/crearProducto", postProductHandler);

module.exports = router;
