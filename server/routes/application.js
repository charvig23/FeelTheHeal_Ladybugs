const express = require("express");
const { submitApplication } = require("../controller/application");
const router = express.Router();

router.route("/submit-application").post(submitApplication);
// router.route("/get-application").get(getApplication);
// router.route("/application/:id").delete(deleteApplication).put(updateApplication);


module.exports = router;