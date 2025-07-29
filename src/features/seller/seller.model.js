const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");

const Seller = sequelize.define("Seller", {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    mobile: { type: DataTypes.STRING, allowNull: false },
    country: { type: DataTypes.STRING },
    state: { type: DataTypes.STRING },
    skills: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: "seller" },
});

module.exports = Seller;
