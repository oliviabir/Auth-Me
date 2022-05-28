'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    campusId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Campuses', key: 'id'}
    },
    url: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING(50)
    }
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.Campus, {foreignKey: 'campusId'})
  };
  return Image;
};
