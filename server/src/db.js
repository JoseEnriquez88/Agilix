const { Sequelize,Datatypes } = require('sequelize');
const Usuario = require ('./models/Usuario');
const Cliente = require('./models/Cliente')
const Producto= require ('./models/Producto')
const Venta= require('./models/Venta')
//requerimos dotenv
require('dotenv').config();
//obtenemos las variables del env
const {DB_USER,DB_PASSWORD,DB_HOST,DB_PORT,DB_NAME,DB_DIALECT}=process.env

const sequelize = new Sequelize(
`${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}` 
);
// ejecutamos las funciones de las tablas
Usuario(sequelize);
Cliente(sequelize);
Producto(sequelize);
Venta(sequelize);
// aca sacamos el modelo literal,con las propiedades de sequelize para poder hacer relaciones
const {Usuario,Cliente,Producto,Venta } = sequelize.models;

//relacion de uno a uno

Venta.belongsTo(Cliente)
Venta.belongsTo(Usuario)

//relacion uno a muchos
Cliente.hasMany(Venta)
Usuario.hasMany(Venta)

//relacion de muchos a muchos
const Detalle_Venta = sequelize.define('Detalle_Venta',{cantidad:Datatypes.INTEGER},{timestamps:false});
Producto.belongsToMany(Venta,{through:Detalle_Venta});
Venta.belongsToMany (Producto, {through:Detalle_Venta});

module.exports ={
    conn: sequelize,
};