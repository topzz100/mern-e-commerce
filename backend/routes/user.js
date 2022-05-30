const express = require('express')
const { updateUser, deleteUser, getUser, getAllUser, getUserstats } = require('../controller/user') 
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('./verifyToken')
const router = express.Router()



router.put("/:id", verifyTokenAndAuthorization, updateUser)
router.delete("/:id", verifyTokenAndAuthorization, deleteUser)
router.get("/find/:id", verifyTokenAndAdmin, getUser)
router.get("/", verifyTokenAndAdmin, getAllUser)
router.get("/stats", verifyTokenAndAdmin, getUserstats)


module.exports = router