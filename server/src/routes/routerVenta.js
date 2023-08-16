const { Router } = require("express")
const {
    getVentaByIdHandler,
    getAllVentaHandler,
}= require("../handlers/Ventas/getAllVentaHandler");
const postVentaHandler = require("../handlers/Ventas/postVentaHandler");
const updateVentaHandler = require("../handlers/Ventas/updateVentaHandler");

const routerVenta = Router();

routerVenta.get("/", getAllVentaHandler);
routerVenta.get("/:id", getVentaByIdHandler);
routerVenta.post("/", postVentaHandler);
routerVenta.put("/:id", updateVentaHandler);

module.exports = routerVenta;