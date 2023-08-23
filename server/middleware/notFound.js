const { StatusCodes } = require("http-status-codes")

const notFound = async (req, res) => {
    console.log("not found")
    return res.status(StatusCodes.NOT_FOUND).json()
}

module.exports = notFound