
const asyncHandler = require("express-async-handler");
const  protect = require( "../Middleware/Auth");
const booking = require( "../models/Booking");


// CREATE ORDER
 const  Booking  =
  asyncHandler(async (req, res) => {
    const {
      orderItems,
      paymentMethod,
      itemsPrice,
      taxPrice,
      totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error("No order items");
      return;
    } else {
      const order = new booking({
        orderItems,
        user: req.user._id,
        paymentMethod,
        itemsPrice,
        taxPrice,
        totalPrice,
      });

      const createOrder = await order.save();
      res.status(201).json(createOrder);
    }
  });

// USER LOGIN ORDERS
const Bookingid= 
asyncHandler(async (req, res) => {
    const order = await booking.find({ user: req.user._id }).sort({ _id: -1 });
    res.json(order);
  });

// GET ORDER BY ID
const Bookingbyid=
  asyncHandler(async (req, res) => {
    const order = await booking.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (order) {
      res.json(order);
    } else {
      res.status(404);
      throw new Error("Order Not Found");
    }
  });

  const AdminGetBooking = async (req, res) => {
    try {
      const orders = await booking.find({});
      res.json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };

// // ORDER IS PAID
// orderRouter.put(
//   "/:id/pay",
//   protect,
//   asyncHandler(async (req, res) => {
//     const order = await Order.findById(req.params.id);

//     if (order) {
//       order.isPaid = true;
//       order.paidAt = Date.now();
//       order.paymentResult = {
//         id: req.body.id,
//         status: req.body.status,
//         update_time: req.body.update_time,
//         email_address: req.body.email_address,
//       };

//       const updatedOrder = await order.save();
//       res.json(updatedOrder);
//     } else {
//       res.status(404);
//       throw new Error("Order Not Found");
//     }
//   })
// );

module.exports = {Booking, Bookingid, Bookingbyid, AdminGetBooking};