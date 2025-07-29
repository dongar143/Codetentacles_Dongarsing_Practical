const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");
const Product = require("./product.model");

const Brand = sequelize.define("Brand", {
    name: { type: DataTypes.STRING, allowNull: false },
    detail: { type: DataTypes.TEXT },
    image: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
});

Brand.belongsTo(Product, { foreignKey: "productId" });
Product.hasMany(Brand, { foreignKey: "productId" });

module.exports = Brand;
