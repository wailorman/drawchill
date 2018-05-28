module.exports = (sequelize, DataTypes) => {
  const UserSocialVk = sequelize.define(
    'UserSocialVk',
    {
      userId: DataTypes.UUID,
      profileId: DataTypes.STRING,
      profileUrl: DataTypes.STRING,
      profilePhotoUrl: DataTypes.STRING,
    },
    {},
  );
  UserSocialVk.associate = function (models) {
    UserSocialVk.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'User',
    });
  };
  return UserSocialVk;
};
