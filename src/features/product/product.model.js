const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");
const Seller = require("../seller/seller.model");

const Product = sequelize.define("Product", {
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
});

Product.belongsTo(Seller, { foreignKey: "sellerId" });
Seller.hasMany(Product, { foreignKey: "sellerId" });

module.exports = Product;
