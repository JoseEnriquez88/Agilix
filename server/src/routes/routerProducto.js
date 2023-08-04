const { Router } = require("Router");
const {
  getAllProductsHandlers,
  getProductByIdHandler,
} = require("../handlers/productos/getAllProductsHandler");

const {
  postProductHandler,
} = require("../handlers/productos/postProductHandler");

//const { deleteUserHandler } = require("../handlers/productos/");

const routerProducto = Router();

routerUsuario.get("/", getAllProductsHandlers);
routerUsuario.get("/:id", getProductByIdHandler);
routerUsuario.post("/", postProductHandler);
// routerUsuario.put('/', ); --> UPDATE
// routerUsuario.put('/', ); --> DELETE

module.exports = routerProducto;
