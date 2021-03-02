'use strict';
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {

    class Budget extends Model {

      static associate(models) {

          Budget.belongsTo(models.User, {
              foreignKey: 'user_id',
              onDelete: "cascade",
              as: 'user',
          }),

          Budget.hasMany(models.Category, {
              as: 'budget_expense_categories',
              foreignKey: 'budget_id',
          }),

          Budget.hasMany(models.Income, {
              foreignKey: 'budget_id',
              as: 'budget_income',
          })

        }
    }

    Budget.init({
        userId: {
            type: DataTypes.INTEGER,
            onDelete: 'cascade',
            allowNull: false,
            field: 'user_id',
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
    })
    
    return Budget
}