const express = require('express')

const router = express.Router()

const userSignUpController = require("../controller/user/userSignUp")
const userSignInController = require('../controller/user/userSignIn')
const userDetailsController = require('../controller/user/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/user/userLogout')
const allUsers = require('../controller/user/allUsers')
const updateUser = require('../controller/user/updateUser')
const allbookings = require('../controller/booking/allbooking')
const savebooking = require('../controller/booking/savebooking')



router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)
router.post("/savebooking",authToken ,savebooking)

//admin panel 
router.get("/all-user",authToken,allUsers)
router.get("/all-booking",authToken,allbookings )
router.post("/update-user",authToken,updateUser)











module.exports = router