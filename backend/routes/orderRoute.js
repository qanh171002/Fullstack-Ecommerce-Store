import express from "express";
import {
  placeOrder,
  placeOrderStripe,
  updateOrderStatus,
  allOrders,
  userOrders,
  verifyStripe,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

// admin
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateOrderStatus);

// payment
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/place-stripe", authUser, placeOrderStripe);

// user
orderRouter.post("/userorders", authUser, userOrders);

// verify payment
orderRouter.post("/verifyStripe", authUser, verifyStripe);

export default orderRouter;
