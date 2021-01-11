'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cashflow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cashflow.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
        onDelete: "cascade",
      }),
      Cashflow.hasMany(models.Month, {
        foreignKey: 'cashflow_id',
        as: 'cashflow months',
      })
    }
  };
  Cashflow.init({
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
    modelName: 'Cashflow',
    tableName: 'cashflows'
  });
  return Cashflow;
};