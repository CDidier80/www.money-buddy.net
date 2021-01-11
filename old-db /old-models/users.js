'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.hasOne(models.Budget, {
        foreignKey: 'user_id',
        as: 'user_budget',
      }),
      User.hasOne(models.Cashflow, {
        foreignKey: 'user_id',
        as: 'user_cashflow',
      })    
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;  
};