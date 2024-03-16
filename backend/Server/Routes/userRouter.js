var express=require('express')
const userControllers = require('../Controllers/userControllers')

var userRouter=express.Router()
 
userRouter.get('/api/signup',userControllers.signup)

module.exports=userRouter