const { Router } = require("express");
const {
  getAllProductsHandlers,
  getProductByIdHandler,
} = require("../handlers/productos/getAllProductsHandler");

const postProductHandler = require("../handlers/productos/postProductHandler");

const updateProductoHandler = require("../handlers/productos/updateProductoHandler");

const routerProducto = Router();

routerProducto.get("/", getAllProductsHandlers);
routerProducto.get("/:id", getProductByIdHandler);
routerProducto.post("/", postProductHandler);
routerProducto.put('/:id', updateProductoHandler); //--> UPDATE/DELETE

module.exports = routerProducto;
