const { StatusCodes } = require("http-status-codes")
const users = require("../../models/user")

const getUser = async (req, res) => {
    
    const result = await users.findById(req.user.userId)
    return res.status(StatusCodes.OK).json(result)
}

const updateUser = async (req, res) => {
    const result = users.findByIdAndUpdate(req.user.userId,req.body, {new:true})
    res.status(StatusCodes.OK).json({result})
}

module.exports = {getUser, updateUser}