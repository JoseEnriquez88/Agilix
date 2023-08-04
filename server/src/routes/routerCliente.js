const { Router } = require("Router");
const {
  getAllClientesHandler,
} = require("../handlers/cliente/getAllClientesHandler");
const {
  postClienteHandler,
} = require("../handlers/cliente/postClienteHandler");
//const { deleteUserHandler } = require("../handlers/usuarios/deleteUserHandler");

const routerCliente = Router();

routerUsuario.get("/", getAllClientesHandler);
//routerUsuario.get("/:id", getUserByIdHandler); --> ID
routerUsuario.post("/", postClienteHandler);
// routerUsuario.put('/', ); --> UPDATE
// routerUsuario.put('/', ); --> DELETE

module.exports = routerCliente;
