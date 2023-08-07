const { Router } = require("express");
const {
  getAllUserHandler,
  getUserByIdHandler,
} = require("../handlers/usuarios/getAllUserHandler");
const postUserHandler = require("../handlers/usuarios/postUserHandler");
const updateUserHandler = require("../handlers/usuarios/updateUserHandler");

const routerUsuario = Router();

routerUsuario.get("/", getAllUserHandler);
routerUsuario.get("/:id", getUserByIdHandler);
routerUsuario.post("/", postUserHandler);
routerUsuario.put('/:id', updateUserHandler); //--> UPDATE/DELETE

module.exports = routerUsuario;
