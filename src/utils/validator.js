
exports.isEmpty = (value) => {
    return !value || value.trim() === "";
};

exports.isEmail = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
};

exports.isMobile = (mobile) => {
    return /^\d{10}$/.test(mobile);
};

exports.isValidPassword = (password) => {
    return password && password.length >= 6;
};

exports.validateSellerInput = ({ name, email, mobile, password, country, state, skills }) => {
    if (!name || !email || !mobile || !password || !country || !state || !skills) {
        return "All fields are required.";
    }

    if (!exports.isEmail(email)) {
        return "Invalid email format.";
    }

    if (!exports.isMobile(mobile)) {
        return "Mobile number must be 10 digits.";
    }

    if (!exports.isValidPassword(password)) {
        return "Password must be at least 6 characters long.";
    }

    return null;
};

exports.validateLogin = ({ email, password }) => {
    if (!email || !password) {
        return "Email and password are required.";
    }

    if (!exports.isEmail(email)) {
        return "Invalid email format.";
    }

    return null;
};

exports.validateProductInput = ({ name, description, brands }) => {
    if (!name || !description || !brands) {
        return "Product name, description, and brands are required.";
    }

    try {
        const parsedBrands = JSON.parse(brands);
        if (!Array.isArray(parsedBrands) || parsedBrands.length === 0) {
            return "Brands must be a non-empty array.";
        }

        for (const brand of parsedBrands) {
            if (!brand.name || !brand.detail || !brand.price) {
                return "Each brand must include name, detail, and price.";
            }
            if (typeof brand.price !== "number" && isNaN(Number(brand.price))) {
                return "Brand price must be a valid number.";
            }
        }

    } catch {
        return "Brands must be a valid JSON array.";
    }

    return null;
};
