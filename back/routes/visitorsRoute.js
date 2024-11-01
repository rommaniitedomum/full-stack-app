const router = require("express").Router();
const visitorsRoute = require("../controllers/visitorsCtrl");

router.get("/visitors", visitorsRoute.getVisitors);

module.exports = router;
