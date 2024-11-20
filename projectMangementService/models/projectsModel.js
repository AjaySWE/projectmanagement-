const { DataTypes } = require('sequelize');
const sequelize = require('../configs/sequelizeconnect'); // Adjust the path as per your setup

const Project = sequelize.define('Project', {
  project_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
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

module.exports = Project;
