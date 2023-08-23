const { StatusCodes } = require('http-status-codes')

class NotFoundError extends Error {
    constructor(msg){
        super(msg)
        this.status = StatusCodes.NOT_FOUND
    }
}

class UnauthenticatedError extends Error {
    constructor(msg){
        super(msg)
        this.status = StatusCodes.UNAUTHORIZED
    }
}

class UnauthorizedError extends Error {
    constructor(msg){
        super(msg)
        this.status = StatusCodes.FORBIDDEN
    }
}

class BadRequestError extends Error {
    constructor(msg){
        super(msg)
        this.status = StatusCodes.BAD_REQUEST
    }
}

module.exports = {NotFoundError, UnauthorizedError, UnauthenticatedError, BadRequestError}