const sequelize = require('../configs/sequelizeconnect'); // Adjust the path as per your setup
const { DataTypes } = require('sequelize');
const Project =require("./projectsModel")
const Task = sequelize.define('Task', {
    task_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    parent_task_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('Open', 'In Progress', 'Completed'),
      defaultValue: 'Open',
      allowNull: false,
    },
    priority: {
      type: DataTypes.ENUM('High', 'Medium', 'Low'),
      allowNull: false,
    },
  });
  
//   // Self-referencing relationship - Child Tasks
// Task.hasMany(Task, {
//     as: 'ChildTasks', // Alias for child tasks
//     foreignKey: 'parent_task_id',
//     sourceKey: 'task_id', // Source key is the task_id of the parent task
//   });
  
//   // Self-referencing relationship - Parent Task
//   Task.belongsTo(Task, {
//     as: 'ParentTask', // Alias for parent task
//     foreignKey: 'parent_task_id',
//     targetKey: 'task_id', // Target key is the task_id of the parent task
//   });

  Task.belongsTo(Project, { foreignKey: 'project_id' });
  
  module.exports = Task;
  