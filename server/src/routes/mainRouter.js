const { Router } = require("express");

const routerCliente = require("./routerCliente");
const routerUsuario = require("./routerUsuario");
const routerProducto = require("./routerProducto");

const mainRouter = Router();

mainRouter.use("/clientes", routerCliente);
mainRouter.use("/usuarios", routerUsuario);
mainRouter.use("/productos", routerProducto);

module.exports = mainRouter;
