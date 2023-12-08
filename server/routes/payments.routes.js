import express from "express";
const router = express.Router();

import {
  checkout,
  getRazorpayKey,
  verifyPayment,
} from "../controllers/payments.controller.js";

router.route("/razorpay-key").get(getRazorpayKey);
router.route("/checkout").post(checkout);
router.route("/verify").post(verifyPayment);

export default router;
