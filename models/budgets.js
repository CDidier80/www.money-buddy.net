'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Budget extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Budget.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
        onDelete: "cascade",
      }),
      Budget.hasMany(models.Category, {
        foreignKey: 'budget_id',
        as: 'budget_expense_categories',
      }),
      Budget.hasMany(models.Income, {
        foreignKey: 'budget_id',
        as: 'budget_income',
      })
    }
  };
  Budget.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
      onDelete: 'cascade',
      references: {
        model: 'users',
        key: 'id'
      }
    },
  }, 

  {
    sequelize,
    modelName: 'Budget',
    tableName: 'budgets'
  });
  return Budget;
};