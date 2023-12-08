import cors from "cors";
import dotenv, { config } from "dotenv";
import express from "express";
import { connectDB } from "./db.js";

config(dotenv);
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

//routes
import paymentRoutes from "./routes/payments.routes.js";

app.get("", (req, res) => {
  res.status(200).json({ message: "Razorpay Payment Gateway" });
});
app.use("/api/payments", paymentRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Server started at port 3001");
});
