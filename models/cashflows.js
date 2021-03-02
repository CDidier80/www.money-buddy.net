'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {

    class Cashflow extends Model {

        static associate(models) {

          Cashflow.belongsTo(models.User, {
              foreignKey: 'user_id',
              onDelete: "cascade",
              as: 'user',
          }),

          Cashflow.hasMany(models.Month, {
              foreignKey: 'cashflow_id',
              as: 'months',
          })
          
        }
    }

    Cashflow.init({
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
      modelName: 'Cashflow',
      tableName: 'cashflows'
    })

  return Cashflow
}