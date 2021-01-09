'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {

    static associate(models) {
      Expense.belongsTo(models.Category, {
        foreignKey: 'category_id',
        as: 'category',
        constraints: true,
      })
    }
  };
  Expense.init({
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'category_id',
      onDelete: 'cascade',
      constraints: true,
      references: {
        model: 'categories',
        key: 'id'
      }
    },
    expense: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Expense',
    tableName: 'expenses'
  });
  return Expense;
};