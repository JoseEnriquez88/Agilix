const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Orden",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      id_cliente: {
        type: DataTypes.UUID,
        allowNull: false
      },
      id_usuario: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      productos: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
      }
    },
  { timestamps: false, freezeTableName: true }
  );
};