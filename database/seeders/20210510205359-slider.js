'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sliders', [
      {
        active: true,
        imgUrl: 'herramientraparaelelmpleo',
        title: 'Herramientas para el empleo',
        descripcionLarga: 'En cuatro semanas vamos a compartir herramientas, saberes y sugerencias para favorecer tu inserción laboral. Abordaremos aquellos aspectos que son importantes a la hora de buscar trabajo, y profundizaremos en cuestiones que son valiosas al momento de acceder a un empleo.',
        UrlToRedirect: 'direccion a la cual redirigir (nombre del curso)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        active: true,
        imgUrl: 'fornaliizacionemprendimentos',
        title: 'Formalización de emprendimientos',
        descripcionLarga: '"En este curso te brindaremos los conocimientos necesarios para administrar un emprendimiento de manera económica y financieramente sostenible, con información clara de costos y márgenes de rentabilidad, la aplicación de conceptos claves y el uso de herramientas simples y prácticas que te permitan tomar decisiones fundadas para hacer crecer un emprendimiento.',
        UrlToRedirect: 'direccion a la cual redirigir (nombre del curso)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        active: true,
        imgUrl: 'fornaliizacionemprendimentos',
        title: 'Edición de videos para emprendimientos.',
        descripcionLarga: `En este curso aprenderás a generar y editar contenido audiovisual con tu celular mediante la aplicación "YouCut", para compartir tu emprendimiento con seguidores, clientes actuales y potenciales. Te servirá para generar contenido audiovisual que contribuya al posicionamiento de tu marca y la promoción de tus productos.`,
        UrlToRedirect: 'direccion a la cual redirigir (nombre del curso)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        active: true,
        imgUrl: 'word',
        title: 'Word inicial',
        descripcionLarga: 'En este curso te vamos a mostrar las cuestiones más importantes para que puedas escribir en la computadora notas, cartas, informes, tu currículum vitae, entre otros. Durante cuatro semanas te iremos mostrando las funcionalidades básicas de Word, aprendiendo a trabajar con él y entendiendo su navegación. Vas a incorporar nociones básicas sobre cómo crear, modificar, configurar y corregir un documento, para tenerlo listo y compartir el trabajo finalizado por medios electrónicos, imprimirlo o simplemente guardarlo.',
        UrlToRedirect: 'direccion a la cual redirigir (nombre del curso)',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]);
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
