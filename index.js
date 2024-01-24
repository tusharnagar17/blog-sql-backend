require("dotenv").config();
const { Sequelize, QueryTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  // use this dialer option for only heroku
  // dialect: "postgres",
  // dialectOptions: {
  //   ssl: {
  //     require: true,
  //     rejectUnauthorized: false,
  //   },
  // },
});

const main = async () => {
  try {
    await sequelize.authenticate();
    const data = await sequelize.query("SELECT * FROM blogs", {
      type: QueryTypes.SELECT,
    });
    // console.log(data);
    data.map((item) => {
      console.log(item.author, item.title, item.likes, " likes");
    });
    console.log("Connection has been established successfully.");
    sequelize.close();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main();
