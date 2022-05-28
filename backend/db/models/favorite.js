'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    userId: DataTypes.INTEGER,
    campusId: DataTypes.INTEGER
  }, {});
  Favorite.associate = function(models) {
    // associations can be defined here
  };
  return Favorite;
};