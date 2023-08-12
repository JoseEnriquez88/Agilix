const server = require("./src/app");
const { conn } = require("./src/db");
const MercadoPago = require("mercadopago");
require("dotenv").config();

const PORT = 3001;

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto:", PORT);
  });
});

const mercadopago = new MercadoPago({
  access_token: process.env.MP_ACCESS_TOKEN
})