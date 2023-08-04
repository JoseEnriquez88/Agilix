const { Router } = require("express");

const routerCliente = require("./routerCliente");
const routerUsuario = require("./routerUsuario");
const routerProducto = require("./routerProducto");

const router = Router();

router.use("/clientes", routerCliente);
router.use("/usuarios", routerUsuario);
router.use("/productos", routerProducto);

module.exports = router;
