const mongoose = require('mongoose')
const { JOB_STATUS, JOB_TYPE } = require('../utils/constant')



const jobSchema = new mongoose.Schema({
    company:String,
    position:String,
    jobStatus:{
        type:String,
        enum:Object.values(JOB_STATUS),
        default:JOB_STATUS.PENDING,
    },
    jobType:{
        type:String,
        enum:Object.values(JOB_TYPE),
        default:JOB_TYPE.FULL_TIME
    },
    jobLocation: {
        type:String,
        default:'city',
    },
    createdBy: {
        type: mongoose.Types.ObjectId
    }
    
},{timestamps:true})

const jobs = mongoose.model('jobs', jobSchema)

module.exports = jobs