'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {

    class Income extends Model {

      static associate(models) {

        Income.belongsTo(models.Budget, {
            foreignKey: 'budget_id',
            constraints: true,
            as: 'budget',
        })
      }
    }

    Income.init({

        budgetId: {
            type: DataTypes.INTEGER,
            onDelete: 'cascade',
            field: 'budget_id',
            constraints: true,
            allowNull: false,   
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
    }, 

    {
        sequelize,
        modelName: 'Income',
        tableName: 'incomes',
    })

    return Income
}