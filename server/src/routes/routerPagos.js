const { Router } = require("express");
const generar_ordenHandler = require("../handlers/Pagos/generar_ordenHandler");
const eliminar_ordenHandler = require("../handlers/Pagos/eliminar_ordenHandler");

const routerPagos = Router();

routerPagos.post("/nueva_orden", generar_ordenHandler);
routerPagos.delete("/eliminar_orden", eliminar_ordenHandler);

module.exports = routerPagos;