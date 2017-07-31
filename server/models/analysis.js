'use strict';
module.exports = function(sequelize, DataTypes) {
  var Analysis = sequelize.define('Analysis', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });

  Analysis.associate = (models) => {
    Analysis.belongsTo(models.User);
    Analysis.hasMany(models.Item);
  }

  return Analysis;
};
