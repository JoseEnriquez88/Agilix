const { Router } = require("express");
const { generar_ordenHandler } = require("../handlers/Pagos/generar_ordenHandler");

const routerPagos = Router();

routerPagos.post("/", generar_ordenHandler);

module.exports = routerPagos;