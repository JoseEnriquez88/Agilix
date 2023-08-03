const { Router } = require("express");
const router = Router();

const getAllProductsHandler = require("../handlers/productos/getAllProductsHandler");
const postProductHandler = require("../handlers/productos/postProductHandler");

//!handlers de usuario
const deleteUser = require('../handlers/usuarios/deleteUserHandler');
const getAllUserHandler = require('../handlers/usuarios/getAllUserHandler');
const getUserByEmailHandler = require('../handlers/usuarios/getUserByEmailHandler');
const getUserByNameHandler = require('../handlers/usuarios/getUserByNameHandler');
const getuserByIdHandler = require('../handlers/usuarios/getuserByIdHandler');
const postUserHandler = require('../handlers/usuarios/postUserHandler');


//!get de productos
router.get("/productos", getAllProductsHandler);

//!post de productos
router.post("/crearProducto", postProductHandler);

//!rutas de usuario
router.delete('/:nombre', deleteUser);
router.get('/users', getAllUserHandler);
router.get('/usersEmail', getUserByEmailHandler);
router.get('/usersName', getUserByNameHandler);
router.get('/:id', getuserByIdHandler);
router.post('/postUser', postUserHandler)


module.exports = router;
