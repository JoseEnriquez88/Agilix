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
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false, freezeTableName: true }
  );
};
