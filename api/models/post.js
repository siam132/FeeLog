'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}

  Post.init({
    content: {
      type: DataTypes.TEXT,
      type: DataTypes.STRING, // emotion 
      validate: {
        notEmpty: true,
      },
    },
    tones: {
      type: DataTypes.TEXT,
    }
  }, {
    sequelize,
    modelName: 'post'
  });

  Post.associate = (models) => {
    // associations can be defined here
  };

  return Post;
};