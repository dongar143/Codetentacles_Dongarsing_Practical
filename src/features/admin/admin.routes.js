const router = require("express").Router();
const ctrl = require("./admin.controller");
const { authenticate } = require("../../middleware/auth");

router.post("/login", ctrl.login);
router.post("/create-seller", authenticate(["admin"]), ctrl.createSeller);
router.get("/sellers", authenticate(["admin"]), ctrl.getSellers);

module.exports = router;
