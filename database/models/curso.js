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
    UrlToRedirect: DataTypes.STRING,
    tipo: DataTypes.STRING,
    descripcionLarga: {
      type: DataTypes.TEXT,
      set(value) {
        this.setDataValue('descripcionLarga', JSON.stringify(value));
      },
      get() {
        try {
          return JSON.parse(this.getDataValue('descripcionLarga'))
        } catch (error) {
          return []
        }
      },
    },  
    requerimientos:  {
      type: DataTypes.TEXT,
      set(value) {
        this.setDataValue('requerimientos', JSON.stringify(value));
      },
      get() {
        try {
          return JSON.parse(this.getDataValue('requerimientos'))
        } catch (error) {
          return []
        }
      },
    },  
    especificaciones:  {
      type: DataTypes.TEXT,
      set(value) {
        this.setDataValue('especificaciones', JSON.stringify(value));
      },
      get() {
        try {
          return JSON.parse(this.getDataValue('especificaciones'))
        } catch (error) {
          return []
        }
      },
    },  
    contenidoTitulo:  {
      type: DataTypes.TEXT,
      set(value) {
        this.setDataValue('contenidoTitulo', JSON.stringify(value));
      },
      get() {
        try {
          return JSON.parse(this.getDataValue('contenidoTitulo'))
        } catch (error) {
          return []
        }
      },
    },  
    contenido:  {
      type: DataTypes.TEXT,
      set(value) {
        this.setDataValue('contenido', JSON.stringify(value));
      },
      get() {
        try {
          return JSON.parse(this.getDataValue('contenido'))
        } catch (error) {
          return []
        }
      },
    },  
    fechaInscrpcion:  {
      type: DataTypes.TEXT,
      set(value) {
        this.setDataValue('fechaInscrpcion', JSON.stringify(value));
      },
      get() {
        try {
          return JSON.parse(this.getDataValue('fechaInscrpcion'))
        } catch (error) {
          return []
        }
      },
    },

  }, {
    sequelize,
    modelName: 'Curso',
  });
  return Curso;
};