const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");

router.post("/orders", async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      reciept: crypto.randomBytes(10).toString("hex"),
    };

    instance.orders.create(options, (error, order) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: "Something went wrong" });
      }
      res.status(200).json({ data: order });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
});

router.post("/verify", async (req, res) => {
  try {
    const { razorpay_orderID, razorpay_paymentID, razorpay_signature } =
      req.body;

    const sign = razorpay_orderID + "|" + razorpay_paymentID;
    const resultSign = crypto
      .createHmac("sha256", process.env.KEY_SECRET)
      .update(sign.toString())
      .digest("hex");
    if (razorpay_signature == resultSign) {
      return res.status(200).json({ message: "Payment verified successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
});
