const { Router } = require("express");
const {
  getAllClientesHandler,
  getClienteByIdHandler,
} = require("../handlers/cliente/getAllClientesHandler");
const postClienteHandler = require("../handlers/cliente/postClienteHandler");
//const { deleteUserHandler } = require("../handlers/usuarios/deleteUserHandler");

const routerCliente = Router();

routerCliente.get("/", getAllClientesHandler);
routerCliente.get("/:id", getClienteByIdHandler);
routerCliente.post("/", postClienteHandler);
//routerCliente.put('/', ); --> UPDATE/DELETE

module.exports = routerCliente;
