'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    campusId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Campuses', key: 'id'}
    },
    url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    }
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.Campus, {foreignKey: 'campusId'})
  };
  return Image;
};
