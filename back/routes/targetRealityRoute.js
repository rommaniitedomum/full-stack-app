const router = require("express").Router();
const targetRealityRoute = require("../controllers/targetRealityCtrl");

router.get("/targetReality", targetRealityRoute.getTargetReality);

module.exports = router;
