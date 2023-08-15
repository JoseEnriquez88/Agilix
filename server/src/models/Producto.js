const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Producto",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      cantidad: { // Nuevo campo para la cantidad de productos disponibles
        type: DataTypes.INTEGER, // O el tipo de dato adecuado para la cantidad
        allowNull: false,
        defaultValue: 0, // Puedes ajustar el valor predeterminado según tus necesidades
      },
    },
    { timestamps: false, freezeTableName: true }
  );
};
