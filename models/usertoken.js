module.exports = (sequelize, DataTypes) => {
  const UserToken = sequelize.define(
    'UserToken',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
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
