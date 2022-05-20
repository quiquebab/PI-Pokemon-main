const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    life:{
      type:DataTypes.STRING,
      allowNull: true,
    },
    strength:{
      type:DataTypes.STRING,
      allowNull: true,
    },
   defending:{
      type:DataTypes.STRING,
      allowNull: true,
    },
    speed:{
      type:DataTypes.STRING,
      allowNull: true,
    },
    height:{
      type:DataTypes.STRING,
      allowNull: true,
    },
    weight:{
      type:DataTypes.STRING,
      allowNull: true,
    },
    createInDb: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },



  });
};
