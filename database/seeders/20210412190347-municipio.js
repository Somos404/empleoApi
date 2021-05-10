'use strict';
const muni = require('./../../task/municipios')
const { Municipios } = require('../../db')
const { DescripcionLarga } = require('../../db')
const { Requerimientos } = require('../../db')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (const list of muni) {

        await Municipios.create({
          active: true,
          nombre: list.nombre,
          descripcion: list.descripcion,
          img: list.img,
        })
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
