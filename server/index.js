const server = require("./src/app");
const { conn } = require("./src/db");

const PORT = 3001;

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto:", PORT);
  });
});
