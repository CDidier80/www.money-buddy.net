'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inflow extends Model {
    static associate(models) {
      Inflow.belongsTo(models.Month, {
        foreignKey: 'month_id',
        as: 'inflows',
        constraints: true,
      })
    }
  };
  Inflow.init({
    monthId: {
      type: DataTypes.INTEGER,
      allowNull: true,   // changed to true in case income is owned by Month instead for cashflow
      field: 'month_id',
      onDelete: 'cascade',
      // constraints: true,
      references: {
        model: 'months',
        key: 'id'
      }
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, 
  {
    sequelize,
    modelName: 'Inflow',
    tableName: 'inflows'
  });
  return Inflow;
};