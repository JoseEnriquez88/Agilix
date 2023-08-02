const { Sequelize, DataTypes } = require("sequelize");

const fs = require("fs");
const path = require("path");

//requerimos dotenv
require("dotenv").config();

//obtenemos las variables del env
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_DIALECT } = process.env;

const sequelize = new Sequelize(
  `${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false, // oculta la info de cada query que se ejecuta desde postgres
    native: false, // ~30% mejora de rendimiento
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);

//extraemos los modelos
sequelize.models = Object.fromEntries(capsEntries);

// aca sacamos el modelo literal,con las propiedades de sequelize para poder hacer relaciones
const { Usuario, Cliente, Producto, Venta } = sequelize.models;

//relacion de uno a uno

Venta.belongsTo(Cliente);
Venta.belongsTo(Usuario);

//relacion uno a muchos
Cliente.hasMany(Venta);
Usuario.hasMany(Venta);

//relacion de muchos a muchos
const Detalle_Venta = sequelize.define(
  "Detalle_Venta",
  { cantidad: DataTypes.INTEGER },
  { timestamps: false }
);
Producto.belongsToMany(Venta, { through: Detalle_Venta });
Venta.belongsToMany(Producto, { through: Detalle_Venta });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
