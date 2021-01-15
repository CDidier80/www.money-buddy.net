'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flowcategory extends Model {
    static associate(models) {
      Flowcategory.belongsTo(models.Month, {
        foreignKey: 'month_id',
        as: 'months',
        constraints: true,
      }),  
      Flowcategory.hasMany(models.Outflow, {
        foreignKey: 'flowcategory_id',
        as: 'category_of_expense',
      })
    }
  };
  Flowcategory.init({
    monthId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'month_id',
      onDelete: 'cascade',
      // constraints: true,
      references: {
        model: 'months',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
      }
  }, 
  {
    sequelize,
    modelName: 'Flowcategory',
    tableName: 'flowcategories'
  });
  return Flowcategory;
};