const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");

const Admin = sequelize.define("Admin", {
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    role: { type: DataTypes.STRING, defaultValue: "admin" },
});

module.exports = Admin;
