
const app = require("./app");
const sequelize = require("./configs/sequelizeconnect");
const db=require("./configs/dbconnection")
db

const PORT = process.env.PORT ;


(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected.");
    // await sequelize.drop();
await sequelize.sync({ alter: true });

    // await sequelize.sync(); // Sync models (optional for production)
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("Failed to start the server:", error.message);
    process.exit(1);
  }
})();
