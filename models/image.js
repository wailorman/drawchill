'use strict';
module.exports = (sequelize, DataTypes) => {
  var Image = sequelize.define('Image', {
    fileId: DataTypes.UUID,
    userId: DataTypes.UUID
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
  };
  return Image;
};