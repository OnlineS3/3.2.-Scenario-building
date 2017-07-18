'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    authUserId: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  User.associate = (models) => {
    User.hasMany(models.Analysis);
  }

  return User;
};
