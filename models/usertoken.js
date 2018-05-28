module.exports = (sequelize, DataTypes) => {
  const UserToken = sequelize.define(
    'UserToken',
    {
      userId: DataTypes.UUID,
      token: DataTypes.STRING,
    },
    {},
  );
  // UserToken.associate = function (models) {
  //   // associations can be defined here
  // };
  return UserToken;
};
