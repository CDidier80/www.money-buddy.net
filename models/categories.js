'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {

    static associate(models) {
      Category.belongsTo(models.Budget, {
        foreignKey: 'budget_id',
        as: 'budget',
        constraints: true,
      }),
      Category.belongsTo(models.Month, {
        foreignKey: 'month_id',
        as: 'months',
        constraints: true,
      }),  
      Category.hasMany(models.Expense, {
        foreignKey: 'category_id',
        as: 'category_of_expense',
      })
    }
  };
  Category.init({
    budgetId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'budget_id',
      onDelete: 'cascade',
      constraints: true,
      references: {
        model: 'budgets',
        key: 'id'
      }
    },
    monthId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'month_id',
      onDelete: 'cascade',
      // constraints: true,
      references: {
        model: 'budgets',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
      }
    }, {
    sequelize,
    modelName: "Category",
    tableName: 'categories',
  });
  return Category;
};