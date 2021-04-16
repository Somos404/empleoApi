'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categoria', [
      {
        categoria: 'Empleo y emprendimientos',
        imgUrl: 'EmpleoyEmprendimientos',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoria: 'Informatorio',
        imgUrl: 'Informatorio',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoria: 'UniMOOC',
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
