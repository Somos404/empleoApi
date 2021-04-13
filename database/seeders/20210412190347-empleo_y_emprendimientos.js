'use strict';
const cursos = require('../../task/cursosAndCategias')
const { Curso } = require('../../db')
const { DescripcionLarga } = require('../../db')
const { Requerimientos } = require('../../db')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (const list of cursos) {
      for (const curso of list.cursos) {
        //CategoriumId clave foraanea
            
        await Curso.create({
          CategoriumId: list.categoria === 'Empleo y emprendimientos'?1:list.categoria === 'Informatorio'?2:3,
          nombre: curso.nombre,
          imgUrl: curso.imgUrl,
          horasSemanales: curso.horasSemanales,
          UrlToRedirect: curso.UrlToRedirect,
          tipo: curso.tipo,

          descripcionLarga: curso.descripcionLarga,
          requerimientos: curso.requerimientos,
          especificaciones: curso.especificaciones,
          contenidoTitulo: curso.contenidoTitulo,
          contenido: curso.contenido,
          fechaInscrpcion: curso.fechaInscrpcion,
        })
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
