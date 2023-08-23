const {body, validationResult, param } = require("express-validator");
const { BadRequestError, NotFoundError, UnauthenticatedError, UnauthorizedError } = require("../errors/customApiError");
const { JOB_STATUS } = require("../utils/constant");
const mongoose = require("mongoose");
const jobs = require("../models/job");
const users = require("../models/user");


const validate = (val)=>{

    return [
        val,
        (req, res, next)=> {
            const result = validationResult(req)
            if(!result.isEmpty()){
                const errorMsg = result.array().map((error)=>error.msg)
                console.log(errorMsg)
                throw new BadRequestError(errorMsg)
            }
            next()
        }
    ]
    
}

module.exports.validateBody = validateBody = validate([
    body('company').notEmpty().withMessage('company is required'),
    body('position').notEmpty().withMessage('position is required'),
    body('jobLocation').notEmpty().withMessage('job location is required'),
])

module.exports.validateId = validateId = validate([
    param('id').custom(async (value, {req})=>{
        const isValid  = mongoose.Types.ObjectId.isValid(value)
        if(!isValid){
            throw new BadRequestError('invalid id')
        }

        const job = await jobs.findById(value);
        if(!job) throw new NotFoundError(`No job with id ${value}`)

        const isOwner = req.user.userId === job.createdBy.toString() //this line of code here is my nemesis
        if(!isOwner) throw new UnauthorizedError("Unauthorized request")
    })
])

module.exports.validateRegister = validateRegister = validate([
    body('firstname').notEmpty().withMessage("Name cannot be empty"),
    body('lastname').notEmpty().withMessage("Name cannot be empty"),
    body('location').notEmpty().withMessage('Location cannot be empty'),
    body('email').notEmpty().withMessage('email cannot be empty').isEmail().withMessage("invalid email").custom(async (value)=>{
        const result = await users.findOne({email:value})

        if(result) throw new UnauthenticatedError("Email already registered")
    }),
    body('password').notEmpty().withMessage('password cannot be empty'),
])

module.exports.validateLogin = validateLogin = validate([
    body('email').notEmpty().withMessage('email cannot be empty').isEmail().withMessage("invalid email"),
    body('password').notEmpty().withMessage('password cannot be empty'),
])

