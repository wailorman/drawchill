'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserSocialVk = sequelize.define('UserSocialVk', {
    userId: DataTypes.UUID,
    profileId: DataTypes.STRING,
    profileUrl: DataTypes.STRING,
    profilePhotoUrl: DataTypes.STRING
  }, {});
  UserSocialVk.associate = function(models) {
    // associations can be defined here
  };
  return UserSocialVk;
};