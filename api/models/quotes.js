"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Quotes extends Model {}

  Quotes.init(
    {
      quote: {
          type: DataTypes.STRING,
          validate:{
              notEmpty: true
          }
      }
    },
    {
      sequelize,
      modelName: "quotes"
    }
  );

  Quotes.associate = models => {
    // associations can be defined here
  };

  return Quotes;
};
