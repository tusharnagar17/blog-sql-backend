// models/blog.js

module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define("Blog", {
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    urls: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Blog;
};
