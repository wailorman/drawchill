'use strict';
module.exports = (sequelize, DataTypes) => {
  var Challenge = sequelize.define('Challenge', {
    text: DataTypes.STRING,
    imageId: DataTypes.UUID,
    userId: DataTypes.UUID
  }, {});
  Challenge.associate = function(models) {
    // associations can be defined here
  };
  return Challenge;
};