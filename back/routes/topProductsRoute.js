const router = require("express").Router();
const topProductsRoute = require("../controllers/topProductsCtrl");

router.get("/topProducts", topProductsRoute.getTopproducts);

module.exports = router;
