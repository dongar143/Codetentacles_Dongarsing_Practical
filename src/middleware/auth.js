const jwt = require("jsonwebtoken");

const authenticate = (roles = []) => {
    return (req, res, next) => {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(401).json({ message: "Access denied" });

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if (roles.length && !roles.includes(decoded.role)) {
                return res.status(403).json({ message: "Forbidden" });
            }
            req.user = decoded;
            next();
        } catch (err) {
            return res.status(400).json({ message: "Invalid token" });
        }
    };
};

module.exports = { authenticate };
