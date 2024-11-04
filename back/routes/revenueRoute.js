const router = require("express").Router();
const revenueRoute = require("../controllers/revenueCtrl");

router.get("/revenue", revenueRoute.getRevenue);

module.exports = router;
