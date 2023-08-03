const { Router } = require("express");

const getAllProductsHandler = require("../handlers/productos/getAllProductsHandler");
const postProductHandler = require("../handlers/productos/postProductHandler");

const getAllClienteHandler = require("../handlers/Cliente/getAllUsuarioHandler");
const postAllClienteHandlers = require("../handlers/Cliente/postClienteHandler");

const router = Router();

//!get de productos
router.get("/productos", getAllProductsHandler);

//!post de productos
router.post("/crearProducto", postProductHandler);


router.get("/cliente", getAllClienteHandler);
router.post("/crearCliente", postAllClienteHandlers);

module.exports = router;
