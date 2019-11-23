'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    //dont store the password in plaintext, store it's hash instead
    password: {
    type: DataTypes.VIRTUAL,
    set: function (val) {
       // Remember to set the data value, otherwise it won't be validated
       this.setDataValue('password', val);
       this.setDataValue('password_hash', this.salt + val);
     },
     validate: {
        isLongEnough: function (val) {
          if (val.length < 7) {
            throw new Error("Please choose a longer password")
         }
      }
    }
  }
  }, {
    getterMethods: {
      

    }
  });
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
