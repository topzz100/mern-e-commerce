const express = require('express')
const { createCart, updateCart, deleteCart, getCart, getAllCart } = require('../controller/cart') 
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('./verifyToken')
const router = express.Router()

router.post("/", verifyToken, createCart)
router.put("/:id", verifyTokenAndAuthorization, updateCart)
router.delete("/:id", verifyTokenAndAuthorization, deleteCart)
router.get("/find/:userId", verifyTokenAndAuthorization, getCart)
router.get("/", verifyTokenAndAdmin, getAllCart)


module.exports = router