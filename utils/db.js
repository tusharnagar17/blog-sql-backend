const { Sequelize } = require("sequelize");
const { DATABASE_URL } = require("./config");

const sequelize = new Sequelize(DATABASE_URL);

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection is successfully established!");
  } catch (error) {
    console.log("failed to established connection", error);
    process.exit(1);
  }
  return null;
};

module.exports = { connectToDatabase, sequelize };
