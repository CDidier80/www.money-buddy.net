'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {

    class Category extends Model {

      static associate(models) {

          Category.belongsTo(models.Budget, {
              foreignKey: 'budget_id',
              constraints: true,
              as: 'budget',
          }),

          Category.hasMany(models.Expense, {
              foreignKey: 'category_id',
              as: 'category_of_expense',
          })

        }
    }

    Category.init({
        budgetId: {
            type: DataTypes.INTEGER,
            onDelete: 'cascade',
            field: 'budget_id',
            constraints: true,
            allowNull: false,
            references: {
                model: 'budgets',
                key: 'id',
            }
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, 
    {
        sequelize,
        modelName: "Category",
        tableName: 'categories',
    })

    return Category
}