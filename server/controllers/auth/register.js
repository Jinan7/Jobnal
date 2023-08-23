const users = require("../../models/user")
const {StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const register = async (req, res) => {
    const result = await users.create(req.body)
    const token = await jwt.sign({userId:result._id}, process.env.JWT_SECRET,{expiresIn:'1d'} )
    const one = 1000 * 60*60*24
    res.cookie('token', token, {
        httpOnly:true,
        expires:new Date(Date.now()+one),
        secure:process.env.NODE_ENV === 'production'
    })
    console.log(result)
    res.status(StatusCodes.OK).json(result)
    
}

module.exports = register