import express from "express";
import { Coupon, Order } from "../models";

const router = express.Router();

router
  .route("/")
  .all((req, res, next) => {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    next();
  })
  .get(async (req, res, next) => {
    const orders = await Order.find();
    res.send(orders);
  })
  .post(async (req, res, next) => {
    const {
      customerDetails: { firstName, lastName, email, address1, address2 },
      items,
      orderTotal,
      coupon,
    } = req.body;
    const itemIdList = items.map((i) => i._id);
    const orderData = {
      customerName: `${firstName} ${lastName}`,
      customerEmail: email,
      customerAddress1: address1,
      customerAddress2: address2,
      items: itemIdList,
      orderTotal: orderTotal,
    };
    try {
      /**
       * Check to see if a coupon was applied
       */
      if (coupon) {
        const couponApplied = await Coupon.findOne({
          code: coupon.code.toUpperCase(),
        });

        if (!couponApplied)
          return res.status(422).json({ coupon: "Code not found" });

        orderData.coupon = couponApplied;
      }
      const newOrder = await Order.create(orderData);
      res.json(newOrder._id);
    } catch (error) {
      next(new Error("Error Placing Order"));
    }
  })
  .delete((req, res, next) => {
    next(new Error("not implemented"));
  });

module.exports = router;
