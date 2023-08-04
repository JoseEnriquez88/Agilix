const { Router } = require("express");
const {
  getAllClientesHandler,
} = require("../handlers/cliente/getAllClientesHandler");
const {
  postClienteHandler,
} = require("../handlers/cliente/postClienteHandler");
//const { deleteUserHandler } = require("../handlers/usuarios/deleteUserHandler");

const routerCliente = Router();

console.log("en el router de cliente");
//routerCliente.get("/", getAllClientesHandler);
//routerUsuario.get("/:id", getUserByIdHandler); --> ID
//routerCliente.post("/", postClienteHandler);
// routerUsuario.put('/', ); --> UPDATE
// routerUsuario.put('/', ); --> DELETE

module.exports = routerCliente;
