const { Router } = require("express");
const {
  getAllProductsHandlers,
  getProductByIdHandler,
} = require("../handlers/productos/getAllProductsHandler");

const postProductHandler = require("../handlers/productos/postProductHandler");

//const { deleteUserHandler } = require("../handlers/productos/");

const routerProducto = Router();

routerProducto.get("/", getAllProductsHandlers);
routerProducto.get("/:id", getProductByIdHandler);
routerProducto.post("/", postProductHandler);
// routerUsuario.put('/', ); --> UPDATE/DELETE

module.exports = routerProducto;
