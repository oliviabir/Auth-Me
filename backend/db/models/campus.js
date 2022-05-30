'use strict';
module.exports = (sequelize, DataTypes) => {
  const Campus = sequelize.define('Campus', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users', key: 'id'}
    },
    name: {
      allowNull: false,
      type:DataTypes.STRING(100),
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    state: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    description:{
      allowNull: false,
      type: DataTypes.TEXT,
    },
    tuition: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    inStateTuition: {
      type: DataTypes.INTEGER,
    },
    public: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    private: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  }, {});
  Campus.associate = function(models) {
    Campus.hasMany(models.Review, {foreignKey: 'campusId'})
    Campus.hasMany(models.Image, {foreignKey: 'campusId'})
    Campus.hasMany(models.Booking, {foreignKey: 'campusId'})
    Campus.belongsToMany(models.User, {
      through: 'Favorite',
      foreignKey: 'campusId',
      otherKey: 'userId'
    })
  };
  return Campus;
};
