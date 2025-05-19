'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('DirectMessages', 'active', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('DirectMessages', 'active');
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_DirectMessages_active";',
    );
  },
};
