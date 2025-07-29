const Seller = require("./seller.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validateLogin } = require("../../utils/validator");

exports.login = async (req, res) => {
    const error = validateLogin(req.body);
    if (error) return res.status(400).json({ message: error });
    const { email, password } = req.body;

    const seller = await Seller.findOne({ where: { email } });
    if (!seller || !(await bcrypt.compare(password, seller.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: seller.id, role: "seller" }, process.env.JWT_SECRET);
    res.json({ token });
};
