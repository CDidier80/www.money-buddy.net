'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Month extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Month.belongsTo(models.Cashflow, {
        foreignKey: 'cashflow_id',
        as: 'cashflows',
        constraints: true,
      }), 
      Month.hasMany(models.Category, {
        foreignKey: 'month_id',
        as: 'month categories',
      }),
      Month.hasMany(models.Income, {
        foreignKey: 'month_id',
        as: 'month incomes',
      })
    }
  }
  Month.init({
    cashflowId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cashflow_id',
      onDelete: 'cascade',
      references: {
        model: 'cashflows',
        key: 'id'
      }
    },
    month: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'Month',
    tableName: 'months'
  });
  return Month;
};