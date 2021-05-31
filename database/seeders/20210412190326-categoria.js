'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categoria', [
      {
        categoria: 'Empleo',
        imgUrl: 'EmpleoyEmprendimientos',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoria: 'Emprendimientos',
        imgUrl: 'EmpleoyEmprendimientos',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoria: 'Economía del Conocimiento',
        imgUrl: 'UniMOOC',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoria: 'Informatorio',
        imgUrl: 'UniMOOC',
        active: true,
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
