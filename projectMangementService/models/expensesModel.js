const sequelize = require('../configs/sequelizeconnect'); // Adjust the path as per your setup
const { DataTypes } = require('sequelize');
const Budget =require("./budgetsModel")
const Expense = sequelize.define('Expense', {
    expense_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    budget_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM('Personnel', 'Tools', 'Overheads', 'Miscellaneous'),
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  });
  
  Expense.belongsTo(Budget, { foreignKey: 'budget_id' });
  
  module.exports = Expense;
  