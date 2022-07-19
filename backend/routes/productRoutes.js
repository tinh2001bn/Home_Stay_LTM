const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,getAllProduct,
  deleteProduct,
  addProduct,
  editRoom
} = require("../controller/productControllers");
// const { admin } = require("../Middleware/Auth");
const { protect, admin}  = require("../Middleware/Auth");

router.get("/all" ,protect,admin, getAllProduct);
router.delete("/:id",protect,admin, deleteProduct)
router.post("/",protect,admin, addProduct)
router.put("/:id",editRoom)
router.get("/:id", getProductById);
router.get("/", getProducts);


module.exports = router;