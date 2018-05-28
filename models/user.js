// module.exports = (sequelize, DataTypes) => {
module.exports = (sequelize) => {
  const User = sequelize.define(
    'User',
    {},
    {},
  );
  User.associate = function (models) {
    User.hasOne(models.UserSocialVk, {
      foreignKey: 'userId',
      as: 'UserSocialVk',
      hooks: true,
      onDelete: 'cascade',
    });
  };
  return User;
};
