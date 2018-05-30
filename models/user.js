module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
    },
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
