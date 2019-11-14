'use strict';
const { Model } = require('sequelize');

module.exports =  (sequelize, DataTypes) => {
	const Log = sequelize.define('Log', {
    owner: DataTypes.STRING,
    date: DataTypes.DATETIME,
    textarea: DataTypes.LONGTEXT,
    sentiment: DataTypes.FLOAT,
    keywords: DataTypes.STRING[]
  }, {});
  return Log;
}