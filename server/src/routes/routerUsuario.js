const { Router } = require("express");
const {
  getAllUserHandler,
  getUserByIdHandler,
} = require("../handlers/usuarios/getAllUserHandler");
const postUserHandler = require("../handlers/usuarios/postUserHandler");
const updateUserHandler = require("../handlers/usuarios/updateUserHandler");
const postRegisterUserHandler = require('../handlers/usuarios/postRegisterUserHandler');


const routerUsuario = Router();

routerUsuario.get("/", getAllUserHandler);
routerUsuario.get("/:id", getUserByIdHandler);
routerUsuario.post("/", postUserHandler);
routerUsuario.post("/registro", postRegisterUserHandler); // --> REGISTRO LOCAL
routerUsuario.put('/:id', updateUserHandler); //--> UPDATE/DELETE

module.exports = routerUsuario;
