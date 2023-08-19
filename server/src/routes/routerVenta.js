const { Router } = require("express");
const {
  getVentaByIdHandler,
  getAllVentaHandler,
} = require("../handlers/ventas/getAllVentaHandler");
const postVentaHandler = require("../handlers/ventas/postVentaHandler");
const updateVentaHandler = require("../handlers/ventas/updateVentaHandler");

const routerVenta = Router();

routerVenta.get("/", getAllVentaHandler);
routerVenta.get("/:id", getVentaByIdHandler);
routerVenta.post("/", postVentaHandler);
routerVenta.put("/:id", updateVentaHandler);

module.exports = routerVenta;
