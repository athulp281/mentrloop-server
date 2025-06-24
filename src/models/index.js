const sequelize = require("../config/db");
const User = require("./user");
const Lead = require("./lead");

sequelize.sync();

module.exports = { sequelize, User, Lead };
