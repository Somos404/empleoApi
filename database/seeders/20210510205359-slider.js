'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Slider', [
      {
        active: true,
        imgUrl: 'nombre de la imagen en cada caso',
        title: 'titulo',
        descripcionLarga: 'descripcion',
        UrlToRedirect: 'direccion a la cual redirigir (nombre del curso)',
        createdAt: new Date(),
        updatedAt: new Date()
      }
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
