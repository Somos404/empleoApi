'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Slider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
    */
    static associate(models) {
      //Curso.belongsTo(models.Categoria
    }
  };
  Slider.init({
    active: DataTypes.BOOLEAN,
    imgUrl: DataTypes.STRING,
    title: DataTypes.STRING,
    descripcionLarga: DataTypes.TEXT,
    UrlToRedirect: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Slider',
  });
  return Slider;
};