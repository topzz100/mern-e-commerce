const express = require('express')
const { createOrder, updateOrder, deleteOrder, getOrder, getAllOrder, getMonthlyIncome } = require('../controller/order') 
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('./verifyToken')
const router = express.Router()

router.post("/", verifyToken, createOrder)
router.put("/:id", verifyTokenAndAdmin, updateOrder)
router.delete("/:id", verifyTokenAndAdmin, deleteOrder)
router.get("/find/:userId", verifyTokenAndAuthorization, getOrder)
router.get("/", verifyTokenAndAdmin, getAllOrder)
router.get("/income", verifyTokenAndAdmin, getMonthlyIncome)

module.exports = router