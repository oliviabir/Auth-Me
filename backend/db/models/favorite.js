'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Users', key: 'id'}
    },
    campusId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Campuses', key: 'id'}
    }
  }, {});
  Favorite.associate = function(models) {
    Favorite.belongsTo(models.User, {foreignKey: 'userId'})
    Favorite.belongsTo(models.Campus, {foreignKey: 'campusId'})
  };
  return Favorite;
};
