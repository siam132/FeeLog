'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	const Log = sequelize.define('Log', {
	    owner: DataTypes.INTEGER,
	    date: DataTypes.DATE,
	    textarea: DataTypes.TEXT,
	    sentiment: DataTypes.FLOAT,
	    keywords: DataTypes.ARRAY(DataTypes.TEXT)
  },{});
  	Log.associate = function(models) {
  	//associations are defined here
  	Log.belongsTo(models.User, {
  		foreignKey:'owner'
  	});
  };
  return Log;
};