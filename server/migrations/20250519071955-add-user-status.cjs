'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'status', {
      type: Sequelize.ENUM,
      allowNull: false,
      defaultValue: 'online',
      values: ['online', 'invisible', 'idle', 'dnd'],
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'status');
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_Users_status";',
    );
  },
};
