const jwt = require("jsonwebtoken")
const { UnauthenticatedError, UnauthorizedError } = require("../errors/customApiError")
const dotenv = require('dotenv')
dotenv.config()
const auth = async (req, res, next) => {
   
    const {token} = req.cookies
    
    if(!token) throw new UnauthorizedError("unauthorized access")
    

    const result = jwt.verify(token, process.env.JWT_SECRET)
    if(!result) throw new UnauthorizedError("unauthorized access")
    
    req.user = {userId:result.userId}
    next()
}

module.exports = auth