const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Venta",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      id_cliente: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      id_usuario: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      total_venta:{
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    { timestamps: false, freezeTableName: true }
  );
};
