const { Router } = require("express");
const router = Router();

const getAllProductsHandler = require("../handlers/productos/getAllProductsHandler");
const postProductHandler = require("../handlers/productos/postProductHandler");
const getByIdProductHandler = require("../handlers/productos/getByIdProductHandler");
// handlers cliente
const getAllClienteHandler = require("../handlers/Cliente/getAllUsuarioHandler");
const postAllClienteHandlers = require("../handlers/Cliente/postClienteHandler");
const deleteCliente = require ('../handlers/Cliente/deleteCliente');
const getByIdCliente = require ('../handlers/Cliente/getByIdCliente')
const getClienteByEmail = require ('../handlers/Cliente/getClienteByEmail')
const getByNameCliente = require ('../handlers/Cliente/getByNameCliente')
//!handlers de usuario
const deleteUser = require('../handlers/usuarios/deleteUserHandler');
const getAllUserHandler = require('../handlers/usuarios/getAllUserHandler');
const getUserByEmailHandler = require('../handlers/usuarios/getUserByEmailHandler');
const getUserByNameHandler = require('../handlers/usuarios/getUserByNameHandler');
const getuserByIdHandler = require('../handlers/usuarios/getuserByIdHandler');
const postUserHandler = require('../handlers/usuarios/postUserHandler');


//!get de productos
router.get("/productos", getAllProductsHandler);
//! get de productos por id
router.get("/productos/:id",getByIdProductHandler);

//!post de productos
router.post("/crearProducto", postProductHandler);


//!rutas de usuario
router.delete('/:nombre', deleteUser);
router.get('/users', getAllUserHandler);
router.get('/usersEmail', getUserByEmailHandler);
router.get('/usersName', getUserByNameHandler);
router.get('/:id', getuserByIdHandler);
router.post('/postUser', postUserHandler)

//rutas cliente

router.get("/cliente", getAllClienteHandler);
router.post('/:nombre', deleteCliente)
router.get('/:id', getByIdCliente)
router.get('/clienteEmail', getClienteByEmail)
router.get('/clienteName', getByNameCliente)
router.post("/crearCliente", postAllClienteHandlers);


module.exports = router;
