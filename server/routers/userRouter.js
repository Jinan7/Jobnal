const express = require('express')
const { getUser, updateUser } = require('../controllers/user/userController')


const userRouter = express.Router()

userRouter.get('/user', getUser)
userRouter.patch('/user', updateUser)

module.exports = userRouter