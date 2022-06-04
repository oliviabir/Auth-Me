'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      campusId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Campuses', key: 'id'}
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Users', key: 'id'}
      },
      campusName: {
        allowNull: false,
        type:Sequelize.STRING(100),
      },
      campusCity: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      campusState: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      tourDate: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bookings');
  }
};
