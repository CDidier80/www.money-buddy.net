'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Outflow extends Model {
    static associate(models) {
      Outflow.belongsTo(models.Flowcategory, {
        foreignKey: 'flowcategory_id',
        as: 'flowcategory',
        constraints: true,
      })
    }
  };
  Outflow.init({
    flowcategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'flowcategory_id',
      onDelete: 'cascade',
      onUpdate: 'cascade',
      references: {
        model: 'flowcategories',
        key: 'id',
      }
    },
    outflow: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, 
  {
    sequelize,
    modelName: 'Outflow',
    tableName: 'outflows'
  });
  return Outflow;
};