const express = require("express");
const router = express.Router();
const {
  getUser,showprofile, register, updateprofile, getAllUser
} = require("../controller/userControllers");
const { protect, admin}  = require("../Middleware/Auth");

router.post("/login", getUser);
router.get("/profile",protect, showprofile);
router.put("/profile",protect, updateprofile);
router.post("/",register)
router.get("/",protect, admin,getAllUser)
module.exports = router;
