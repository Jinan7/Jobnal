const express = require('express')
const {login, logout} = require('../controllers/auth/login')
const register = require('../controllers/auth/register')
const { validateRegister, validateLogin } = require('../middleware/validator')


const authRouter = express.Router()

authRouter.post('/login', validateLogin, login)
authRouter.post('/register',validateRegister, register)
authRouter.get('/logout', logout)

module.exports = authRouter