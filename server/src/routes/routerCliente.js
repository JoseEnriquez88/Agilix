const { Router } = require("express");
const {
  getAllClientesHandler,
  getClienteByIdHandler,
} = require("../handlers/Cliente/getAllClientesHandler");
const postClienteHandler = require("../handlers/cliente/postClienteHandler");
const updateClienteHandler = require("../handlers/cliente/updateClienteHandler");

const routerCliente = Router();

routerCliente.get("/", getAllClientesHandler);
routerCliente.get("/:id", getClienteByIdHandler);
routerCliente.post("/", postClienteHandler);
routerCliente.put("/:id", updateClienteHandler);

module.exports = routerCliente;
