const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Lead = sequelize.define("Lead", {
  name: DataTypes.STRING,
  phone: DataTypes.STRING,
  whatsapp: DataTypes.STRING,
  email: DataTypes.STRING,
  course: DataTypes.STRING,
});

module.exports = Lead;
