const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { sequelize } = require("./src/config/db");

const adminRoutes = require("./src/features/admin/admin.routes");
const sellerRoutes = require("./src/features/seller/seller.routes");
const productRoutes = require("./src/features/product/product.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use("/api/admin", adminRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api/product", productRoutes);

sequelize.sync().then(() => {
    console.log("Database connected");
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
});
