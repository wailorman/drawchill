module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define(
    'File',
    {
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
