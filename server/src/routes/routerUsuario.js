const { Router } = require("express");
const {
  getAllUserHandler,
  getUserByIdHandler,
} = require("../handlers/usuarios/getAllUserHandler");
const { postUserHandler } = require("../handlers/usuarios/postUserHandler");
const { deleteUserHandler } = require("../handlers/usuarios/deleteUserHandler");

const routerUsuario = Router();

routerUsuario.get("/", getAllUserHandler);
routerUsuario.get("/:id", getUserByIdHandler);
//routerUsuario.post("/", postUserHandler);
// routerUsuario.put('/', ); --> UPDATE
// routerUsuario.put('/', ); --> DELETE

module.exports = routerUsuario;
