const sequelize = require('../configs/sequelizeconnect'); // Adjust the path as per your setup
const { DataTypes } = require('sequelize');
const Budget = sequelize.define('Budget', {
    budget_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    entity_type: {
      type: DataTypes.ENUM('Project', 'Task', 'Department'),
      allowNull: false,
    },
    entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    allocated_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    utilized_amount: {
      type: DataTypes.DECIMAL(15, 2),
      defaultValue: 0.0,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  
  module.exports = Budget;
  