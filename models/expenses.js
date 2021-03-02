'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {

    class Expense extends Model {

      static associate(models) {

        Expense.belongsTo(models.Category, {
          foreignKey: 'category_id',
          constraints: true,
          as: 'category',
        })
      }

    }

    Expense.init({
        categoryId: {
            type: DataTypes.INTEGER,
            field: 'category_id',
            onDelete: 'cascade',
            constraints: true,
            allowNull: false,
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
      
    }, 
    {
      sequelize,
      modelName: 'Expense',
      tableName: 'expenses'
    })

    return Expense
}