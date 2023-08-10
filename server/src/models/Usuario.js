const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Usuario",
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
      telefono: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
        validate: {
          isEmail: {
            msg: "Email invalido",
          },
        },
      },
      dni:{
        type: DataTypes.STRING, 
        allowNull: false,
      },
      estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      }
    },
    { timestamps: false, freezeTableName: true }
  );
};
