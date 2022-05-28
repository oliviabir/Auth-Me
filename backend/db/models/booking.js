'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    campusId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Campuses', key: 'id'}
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Users', key: 'id'}
    },
    startDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    endDate: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.Campus, {foreignKey: 'campusId'})
    Booking.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Booking;
};
