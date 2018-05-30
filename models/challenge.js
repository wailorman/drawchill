module.exports = (sequelize, DataTypes) => {
  const Challenge = sequelize.define(
    'Challenge',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      text: DataTypes.STRING,
      imageId: DataTypes.UUID,
      userId: DataTypes.UUID,
    },
    {},
  );
  // Challenge.associate = function (models) {
  //   // associations can be defined here
  // };
  return Challenge;
};
