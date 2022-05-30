const Cart = require('../models/Cart')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/customError')
const CryptoJS = require("crypto-js");

const createCart = asyncWrapper(async(req, res) => {
 const newCart = new Cart(req.body);
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);

})
const updateCart = asyncWrapper(async(req, res) => {

    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  
})
const deleteCart = asyncWrapper(async(req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.status(200).json("Cart has been deleted...");
  
})
const getCart = asyncWrapper(async(req, res) => {
  const cart = await Cart.findOne({ userId: req.params.userId });
  res.status(200).json(cart);
  
})
const getAllCart = asyncWrapper(async(req, res) => {
    const carts = await Cart.find();
    res.status(200).json(carts);
  
})

module.exports = {
  createCart,
  updateCart, 
  deleteCart, 
  getCart, 
  getAllCart
}