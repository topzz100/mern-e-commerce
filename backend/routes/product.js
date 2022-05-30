const express = require('express')
const { createProduct, updateProduct, deletaProduct, getProduct, getAllProduct } = require('../controller/product' ) 
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('./verifyToken')
const router = express.Router()

// router.post("/", verifyTokenAndAdmin, createProduct)
router.post("/", createProduct)
router.put("/:id", verifyTokenAndAdmin, updateProduct)
router.delete("/:id", verifyTokenAndAdmin, deletaProduct)
router.get("/find/:id", getProduct)
router.get("/", getAllProduct)

module.exports = router