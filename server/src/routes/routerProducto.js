const { Router } = require("express");
const {
  getAllProductsHandlers,
  getProductByIdHandler,
} = require("../handlers/productos/getAllProductsHandler");

const {
  postProductHandler,
} = require("../handlers/productos/postProductHandler");

//const { deleteUserHandler } = require("../handlers/productos/");

const routerProducto = Router();
console.log("en el router de producto");

routerProducto.get("/", getAllProductsHandlers);
routerProducto.get("/:id", getProductByIdHandler);
//routerProducto.post("/", postProductHandler);
// routerUsuario.put('/', ); --> UPDATE
// routerUsuario.put('/', ); --> DELETE

module.exports = routerProducto;
