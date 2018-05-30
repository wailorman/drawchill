module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define(
    'File',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      hash: DataTypes.STRING,
      userId: DataTypes.UUID,
    },
    {},
  );
  // File.associate = function (models) {
  //   // associations can be defined here
  // };
  return File;
};
