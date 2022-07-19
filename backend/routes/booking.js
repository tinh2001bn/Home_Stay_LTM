const express = require("express");
const router = express.Router();
const {
  Booking, Bookingid, Bookingbyid, AdminGetBooking
} = require("../controller/bookingControllers");
const { protect, admin}  = require("../Middleware/Auth");
router.get("/all",protect,admin,AdminGetBooking)
router.post("/by",protect, Booking);
router.get("/",protect, Bookingid);
router.get("/:id",protect, Bookingbyid);
module.exports = router;