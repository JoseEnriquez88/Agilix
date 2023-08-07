const { Router } = require("express");
const {
  getAllClientesHandler,
  getClienteByIdHandler,
} = require("../handlers/cliente/getAllClientesHandler");
const postClienteHandler = require("../handlers/cliente/postClienteHandler");
const  updateClienteHandler = require("../handlers/Cliente/updateClienteHandler");

const routerCliente = Router();

routerCliente.get("/", getAllClientesHandler);
routerCliente.get("/:id", getClienteByIdHandler);
routerCliente.post("/", postClienteHandler);
routerCliente.put('/:id', updateClienteHandler);// --> UPDATE/DELETE

module.exports = routerCliente;
