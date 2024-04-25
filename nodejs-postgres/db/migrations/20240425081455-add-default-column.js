'use strict';

const { DataTypes } = require('sequelize');
const { CATEGORY_TABLE } = require('./../models/category.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    queryInterface.addColumn(CATEGORY_TABLE, "estado", {
      allowNul: false,
      type: DataTypes.STRING,
      unique: false,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      defaultValue: "nuevo"
    });
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(CATEGORY_TABLE, "estado");
  }
};
