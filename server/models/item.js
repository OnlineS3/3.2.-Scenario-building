'use strict';
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false
    },
    uncertainty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    impact: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Item.associate = (models) => {
    Item.belongsTo(models.Analysis, {
      onDelete: "CASCADE"
    });
  }

  return Item;
};
