const { Router } = require("express");

const routerCliente = require("./routerCliente");
const routerUsuario = require("./routerUsuario");
const routerProducto = require("./routerProducto");
const routerPagos = require("./routerPagos");
const routerAuth = require("./routerAuth");

const mainRouter = Router();

mainRouter.use("/clientes", routerCliente);
mainRouter.use("/usuarios", routerUsuario);
mainRouter.use("/productos", routerProducto);
mainRouter.use("/pagos", routerPagos);
mainRouter.use("/auth", routerAuth);

module.exports = mainRouter;
