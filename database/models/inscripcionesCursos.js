'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InscripcionesCursos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  InscripcionesCursos.init({
    nombre: DataTypes.STRING,
    nombreCurso: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: DataTypes.STRING,
    email: DataTypes.STRING,
    tel: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'InscripcionesCursos',
  });
  return InscripcionesCursos;
};