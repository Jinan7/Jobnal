const { UnauthorizedError, UnauthenticatedError } = require("../../errors/customApiError")
const users = require("../../models/user")
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const { StatusCodes } = require("http-status-codes")
dotenv.config()
UnauthorizedError
const login = async (req, res) => {
    const {email, password} = req.body
    const result = await users.findOne({email})
    if(!result) throw new UnauthorizedError("Invalid email or password")
    const isValid = await bcryptjs.compare(password, result.password)
    if(!isValid) throw new UnauthenticatedError("Invalid email or password")
    const token = jwt.sign({userId:result._id},process.env.JWT_SECRET,{expiresIn:'1d'})
    const one = 1000 * 60*60*24
    res.cookie('token', token, {
        httpOnly:true,
        expires:new Date(Date.now()+one),
        secure:process.env.NODE_ENV === 'production'
    })
    res.status(StatusCodes.OK).json()
}

const logout = async (req, res) => {
    res.cookie('token', '',{
        httpOnly:true,
        expires:new Date(Date.now())
    })

    res.status(StatusCodes.OK).json({success:'success'})
}
module.exports = {login, logout}