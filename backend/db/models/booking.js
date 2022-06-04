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
    campusName: {
      allowNull: false,
      type:DataTypes.STRING(100),
    },
    campusCity: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    campusState: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    tourDate: {
      allowNull: false,
      type: DataTypes.DATEONLY,
    }
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.Campus, {foreignKey: 'campusId'})
    Booking.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Booking;
};
