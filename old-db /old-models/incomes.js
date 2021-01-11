'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Income extends Model {

    static associate(models) {
      Income.belongsTo(models.Budget, {
        foreignKey: 'budget_id',
        as: 'budget',
        constraints: true,
      }),
      Income.belongsTo(models.Month, {
        foreignKey: 'month_id',
        as: 'months',
        constraints: true,
      })
    }
  };
  Income.init({
    budgetId: {
      type: DataTypes.INTEGER,
      allowNull: true,   // changed to true in case income is owned by Month instead for cashflow
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
      allowNull: true,   // changed to true in case income is owned by Month instead for cashflow
      field: 'month_id',
      onDelete: 'cascade',
      // constraints: true,
      references: {
        model: 'budgets',
        key: 'id'
      }
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Income',
    tableName: 'incomes',
  });
  return Income;
};