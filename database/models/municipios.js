'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Municipios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  Municipios.init({
    active: DataTypes.BOOLEAN,
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    img: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Municipios',
  });
  return Municipios;
};