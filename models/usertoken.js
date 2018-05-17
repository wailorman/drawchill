'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserToken = sequelize.define('UserToken', {
    userId: DataTypes.UUID,
    token: DataTypes.STRING
  }, {});
  UserToken.associate = function(models) {
    // associations can be defined here
  };
  return UserToken;
};