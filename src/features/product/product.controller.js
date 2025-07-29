const Product = require("./product.model");
const Brand = require("./brand.model");
const { validateProductInput } = require("../../utils/validator");

exports.addProduct = async (req, res) => {
    const error = validateProductInput(req.body);
    if (error) return res.status(400).json({ message: error });

    const { name, description, brands } = req.body;
    const parsedBrands = JSON.parse(brands);

    try {
        const product = await Product.create({
            name,
            description,
            sellerId: req.user.id,
        });

        for (let i = 0; i < parsedBrands.length; i++) {
            const brand = parsedBrands[i];
            await Brand.create({
                name: brand.name,
                detail: brand.detail,
                price: brand.price,
                image: req.files[i]?.path || null,
                productId: product.id,
            });
        }

        res.status(201).json({ message: "Product created", productId: product.id });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


exports.listProducts = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    const host = req.protocol + "://" + req.get("host");

    try {
        const products = await Product.findAndCountAll({
            where: { sellerId: req.user.id },
            include: Brand,
            offset,
            limit: +limit,
        });

        const productData = products.rows.map(product => {
            const productJSON = product.toJSON();

            productJSON.Brands = productJSON.Brands.map(brand => ({
                ...brand,
                image: brand.image ? `${host}/${brand.image.replace(/\\/g, '/')}` : null
            }));

            return productJSON;
        });

        res.json({
            total: products.count,
            page: +page,
            data: productData,
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



exports.deleteProduct = async (req, res) => {
    const productId = req.params.id;

    const product = await Product.findOne({
        where: { id: productId, sellerId: req.user.id },
    });

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    await Brand.destroy({ where: { productId } });
    await Product.destroy({ where: { id: productId } });

    res.json({ message: "Product deleted successfully" });
};
