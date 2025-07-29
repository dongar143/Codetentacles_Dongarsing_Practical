const router = require("express").Router();
const ctrl = require("./product.controller");
const { authenticate } = require("../../middleware/auth");
const upload = require("./upload.middleware");

router.post(
    "/add",
    authenticate(["seller"]),
    upload.array("images", 10),
    ctrl.addProduct
);
router.get("/", authenticate(["seller"]), ctrl.listProducts);
router.delete("/:id", authenticate(["seller"]), ctrl.deleteProduct);

module.exports = router;
