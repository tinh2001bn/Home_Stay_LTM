const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};


// Admin get all product
    const getAllProduct = async (req, res) => {
      const products = await Product.find({}).sort({ _id: -1 });
      res.json(products);
    }
// Admin Delete product
 const deleteProduct = async(req, res) =>{
  const products = await Product.findById(req.params.id);
  if(products){
    await products.remove()
    res.json({message:"Room deleted"})
  }
  else{
    res.status(404);
    throw new Error("Room not found");
  }
 }
// Add product
const addProduct= async(req, res) =>{
    const { name, price,description ,countInStock,imageUrl} = req.body
  const productExist  = await Product.findOne({name});
  if( productExist ){
    res.status(400);
    throw new Error("Đã tồn tại phòng" );
  }
  else{
    const product = new Product({
      name, 
      price,
      description ,
      countInStock,
      imageUrl,
      // user: req.user._id
    });
    if (product) {
      const createdproduct = await product.save();
      res.status(201).json(createdproduct);
    } else {
      res.status(400);
      throw new Error("Invalid product data");
    }


  }
}

// Edit room
  const editRoom =async (req, res) => {
    const { name, price, description, image, countInStock } = req.body;
    const product = await Product.findById(req.params.id);
    if (product) {
      product.name = name || product.name;
      product.price = price || product.price;
      product.description = description || product.description;
      product.image = image || product.image;
      product.countInStock = countInStock || product.countInStock;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  }
module.exports = {
  getProducts,
  getProductById,
  getAllProduct, 
  deleteProduct,
  addProduct,
  editRoom
};