'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Month extends Model {
    static associate(models) {
      Month.belongsTo(models.Cashflow, {
        foreignKey: 'cashflow_id',
        as: 'months',
        constraints: true,
      }), 
      Month.hasMany(models.Flowcategory, {
        foreignKey: 'month_id',
        as: 'flowcategories',
      }),
      Month.hasMany(models.Inflow, {
        foreignKey: 'month_id',
        as: 'inflows',
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
    month: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, 
  {
    sequelize,
    modelName: 'Month',
    tableName: 'months'
  });
  return Month;
};