module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    'Image',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      fileId: DataTypes.UUID,
      userId: DataTypes.UUID,
    },
    {},
  );
  // Image.associate = function (models) {
  //   // associations can be defined here
  // };
  return Image;
};
