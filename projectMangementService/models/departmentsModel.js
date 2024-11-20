const sequelize = require('../configs/sequelizeconnect'); // Adjust the path as per your setup
const { DataTypes } = require('sequelize');
const Project=require("./projectsModel")
const Department = sequelize.define('Department', {
    department_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });
  
  Department.hasMany(Project, { foreignKey: 'department_id' });
  
  module.exports = Department;
  