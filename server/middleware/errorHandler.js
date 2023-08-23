const { StatusCodes } = require("http-status-codes")
const CustomAPIError = require("../errors/customApiError")

 const errorHandler = async (err, req, res, next) => {
    const status = err.status || StatusCodes.INTERNAL_SERVER_ERROR
    const msg = err.message || "Something went wrong"
    return res.status(status).json(err.message)
}

module.exports = errorHandler

