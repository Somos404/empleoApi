'use strict';
const cursos = require('./../../task/cursosAndCategias')
const { Curso, Categoria } = require('../../db')
const { DescripcionLarga } = require('../../db')
const { Requerimientos } = require('../../db')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (const list of cursos) {
      for (const curso of list.cursos) {
        //CategoriumId clave foraanea

        let categ = await Categoria.findAll({
          where: {
            categoria: list.categoria
          }
        });
            
        let cur = await Curso.findOne({
          where: {
            nombre: curso.nombre
          }
        })
        if(!cur){
          cur = await Curso.create({
            active: false,
            nombre: curso.nombre,
            imgUrl: curso.imgUrl,
            horasSemanales: curso.horasSemanales,
            UrlToRedirect: curso.UrlToRedirect,
            tipo: curso.tipo,
            descrip_card: curso.descrip_card,
            descripcionLarga: curso.descripcionLarga,
            requerimientos: curso.requerimientos,
            especificaciones: curso.especificaciones,
            contenidoTitulo: curso.contenidoTitulo,
            contenido: curso.contenido,
            fechaInscrpcion: curso.fechaInscrpcion,
            
          })
        }
        await cur.addCategoria(categ, { through: { selfGranted: false } });
      }
      
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
