'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    campusId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Campuses', key: 'id'}
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users', key: 'id'}
    },
    review: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    rating: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Campus, {foreginKey: 'campusId'})
    Review.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Review;
};
