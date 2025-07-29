const Admin = require("./admin.model");
const Seller = require("../seller/seller.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validateSellerInput } = require("../../utils/validator");

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ where: { email } });
    if (!admin || !(await bcrypt.compare(password, admin.password)))
        return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: admin.id, role: "admin" }, process.env.JWT_SECRET);
    res.json({ token });
};

exports.createSeller = async (req, res) => {
    const error = validateSellerInput(req.body);
    if (error) return res.status(400).json({ message: error });
    const { name, email, mobile, country, state, skills, password } = req.body;
    try {
        const hash = await bcrypt.hash(password, 10);
        const seller = await Seller.create({
            name,
            email,
            mobile,
            country,
            state,
            skills,
            password: hash,
        });
        res.status(201).json(seller);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getSellers = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    const { count, rows } = await Seller.findAndCountAll({ offset, limit: +limit });
    res.json({ total: count, page: +page, data: rows });
};
