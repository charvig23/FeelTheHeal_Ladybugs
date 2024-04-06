const express = require("express");
const applicationController = require("../controller/application.js");
const singleUpload = require("../middlewares/multer.js");
const authMiddleware = require("../middlewares/authMiddleware.js");
const adminAuthMiddleware = require("../middlewares/adminAuthMiddleware.js");
const router = express.Router();


router.post('/submit/application',authMiddleware, singleUpload,  applicationController.submitApplication);
router.route("/get-application").get(adminAuthMiddleware, applicationController.getApplication);
router.route("/application/:id").put(adminAuthMiddleware, applicationController.updateApplication);


module.exports = router;