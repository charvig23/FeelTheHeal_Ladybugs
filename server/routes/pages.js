const express = require("express");
const router = express.Router();
const adminAuthMiddleware = require("../middlewares/adminAuthMiddleware.js");

router.route("/dashboard").get(adminAuthMiddleware, (req, res) => {
    res.status(200).json({msg: "Authenticated"});
});

module.exports = router;