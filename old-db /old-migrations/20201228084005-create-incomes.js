'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('incomes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      budgetId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        field: 'budget_id',
        onDelete: 'cascade',
        onUpdate: 'cascade',
        references: {
          model: 'budgets',
          key: 'id',
        }
      },
      monthId: {
        type: Sequelize.INTEGER,
        allowNull: true,   // changed to true in case income is owned by Month instead for cashflow
        field: 'month_id',
        onDelete: 'cascade',
        onUpdate: 'cascade',
        // constraints: true,
        references: {
          model: 'months',
          key: 'id'
        }
      },
      source: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('incomes');
  }
};