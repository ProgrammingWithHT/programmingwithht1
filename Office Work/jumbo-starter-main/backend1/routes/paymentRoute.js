const express = require("express");
const {
    processPayment,
} = require("../controllers/paymentController.js");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");

router.route("/payment").post(processPayment);

module.exports = router;
