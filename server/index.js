const server = require("./src/app");
const { conn } = require("./src/db");

const PORT = 3001;

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto:", PORT);
  });
});
