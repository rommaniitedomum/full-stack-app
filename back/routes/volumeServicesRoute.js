const router = require("express").Router();
const volumeServicesRoute = require("../controllers/volumeServicesCtrl");

router.get("/volumeServices", volumeServicesRoute.getVolumeServices);

module.exports = router;
