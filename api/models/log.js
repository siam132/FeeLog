'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	const Log = sequelize.define('Log', {
	    owner: DataTypes.INTEGER,
	    textarea: DataTypes.TEXT,
	    sentiment: DataTypes.FLOAT,
	    keywords: {
	    	type:DataTypes.ARRAY(DataTypes.TEXT),
	    	//getter for keywords of a log
	    	get () {
	    		return this.getDataValue('keywords')
	    	}
	    }
  },{});
	Log.findLogs = function(user) {
	//finds all logs with the specific owner ID in chronological order
		return this.findAll({
			where: {
				owner: user
			},
			order: [['updatedAt', 'DESC']]
		})
	}
  	Log.associate = function(models) {
  	//associations are defined here
  	Log.belongsTo(models.User, {
  		foreignKey:'owner'
  	});
  };
  return Log;
};