const express = require("express");
const router = express.Router();

const { processPayment, sendStripeApiKey } = require("../Controllers/PaymentController");
const { isAuthenticatedUser } = require("../Middleware/Auth");

router.route("/payment/process").post(isAuthenticatedUser, processPayment);

router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);

module.exports = router;
