'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.INT,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.PASSWORD
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Log, {
      foreignKey: 'owner',
      as: 'logs',
      onDelete: 'CASCADE',
    });
  };
  return User;
};
