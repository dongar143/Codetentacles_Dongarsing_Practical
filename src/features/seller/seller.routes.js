const router = require("express").Router();
const ctrl = require("./seller.controller");

router.post("/login", ctrl.login);

module.exports = router;
