const { Sequelize } = require("sequelize");
const sequelize = require("./sequelizeconnect");

module.exports = db = {};

initialize();

async function initialize() {
  // Import models
  const Project = require("../models/projectsModel");
  const Task = require("../models/tasksModel");
  const Budget = require("../models/budgetsModel");
  const Expense = require("../models/expensesModel");
  const KPI = require("../models/KPIModels");
  const Department = require("../models/departmentsModel");

  // Add models to the `db` object for global access
  db.Project = Project;
  db.Task = Task;
  db.Budget = Budget;
  db.Expense = Expense;
  db.KPI = KPI;
  db.Department = Department;

  // Define relationships
  // Project and Task relationship
  Project.hasMany(Task, { foreignKey: 'project_id' });
  Task.belongsTo(Project, { foreignKey: 'project_id' });

  // Task self-referential relationship
// Self-referencing relationship - Child Tasks
Task.hasMany(Task, {
  as: 'ChildTasks', // Alias for child tasks
  foreignKey: 'parent_task_id',
  sourceKey: 'task_id', // Source key is the task_id of the parent task
});

// Self-referencing relationship - Parent Task
Task.belongsTo(Task, {
  as: 'ParentTask', // Alias for parent task
  foreignKey: 'parent_task_id',
  targetKey: 'task_id', // Target key is the task_id of the parent task
});

  // Budget relationships
  Budget.belongsTo(Project, { foreignKey: 'entity_id', constraints: false });
  Budget.belongsTo(Task, { foreignKey: 'entity_id', constraints: false });
  Budget.belongsTo(Department, { foreignKey: 'entity_id', constraints: false });

  // Expense relationships
  Expense.belongsTo(Budget, { foreignKey: 'budget_id' });

  // KPI relationships
  KPI.belongsTo(Project, { foreignKey: 'entity_id', constraints: false });
  KPI.belongsTo(Task, { foreignKey: 'entity_id', constraints: false });
  KPI.belongsTo(Department, { foreignKey: 'entity_id', constraints: false });

  // Department relationships
  Department.hasMany(Project, { foreignKey: 'department_id' });

  // Sync all models with the database
  // await sequelize.sync({ alter: true });
//   await sequelize.drop();
// await sequelize.sync({ alter: true });

  console.log("All models were synchronized successfully.");
}
