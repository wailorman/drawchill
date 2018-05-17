'use strict';
module.exports = (sequelize, DataTypes) => {
  var File = sequelize.define('File', {
    hash: DataTypes.STRING,
    userId: DataTypes.UUID
  }, {});
  File.associate = function(models) {
    // associations can be defined here
  };
  return File;
};