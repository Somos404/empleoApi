'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Curso.belongsTo(models.Categoria)
    }
  };
  Curso.init({
    nombre: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    horasSemanales: DataTypes.INTEGER,
    tipo: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Curso',
  });
  return Curso;
};