const { Router } = require("express");
const generar_ordenHandler = require("../handlers/Pagos/generar_ordenHandler");
const eliminar_ordenHandler = require("../handlers/Pagos/eliminar_ordenHandler");
const notificar_pagosHandler = require("../handlers/pagos/notificar_pagosHandler")
const routerPagos = Router();

routerPagos.post("/nueva_orden", generar_ordenHandler);
routerPagos.post("/notificar_pagos", notificar_pagosHandler);
routerPagos.delete("/eliminar_orden", eliminar_ordenHandler);

module.exports = routerPagos;
