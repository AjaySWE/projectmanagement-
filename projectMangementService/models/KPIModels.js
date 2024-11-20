const sequelize = require('../configs/sequelizeconnect'); // Adjust the path as per your setup
const { DataTypes } = require('sequelize');
const KPI = sequelize.define('KPI', {
    kpi_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    entity_type: {
      type: DataTypes.ENUM('Employee', 'Project', 'Department'),
      allowNull: false,
    },
    entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    kpi_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    kpi_value: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    period_start: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    period_end: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  
  module.exports = KPI;
  