const { StatusCodes } = require("http-status-codes")
const jobs = require("../../models/job")
const { default: mongoose } = require("mongoose")
require('http-status-codes')

const dayjs = require("dayjs")
const createOne = async (req, res) => {
    const {userId} = req.user
    const result = await jobs.create({...req.body, createdBy:userId})
    return res.json()
}
const getAll = async (req, res)=>{
    const {userId} = req.user
    const result = await jobs.find({createdBy:userId})
    console.log(result)
    return res.status(StatusCodes.OK).json(result)
}

const getOne = async (req, res)=>{
    const {userId} = req.user
    const {id} = req.params
    const result = await jobs.findById(id)
    return res.status(StatusCodes.OK).json(result)
}

const updateOne = async (req, res)=>{
    const {userId} = req.user
    const {id} = req.params
    const result = await jobs.findByIdAndUpdate(id, req.body,{new:true})
    console.log(result)
    return res.status(StatusCodes.OK).json({data:result})
}


const deleteOne = async (req, res)=>{
    const {userId} = req.user
    const {id} = req.params
    const result =await jobs.findByIdAndDelete({_id:id})
    return res.status/(StatusCodes.OK).json({data:result})
}

const showStats = async (req, res)=>{
    let stats = await jobs.aggregate([
        {$match:{createdBy:new mongoose.Types.ObjectId(req.user.userId)}},
        {$group:{_id:'$jobStatus', count:{$sum:1}}},
    ])
    let monthly = await jobs.aggregate([
        {$match:{createdBy:new mongoose.Types.ObjectId(req.user.userId)}},
        {$group:{
            _id:{
                year:{$year:'$createdAt'},
                month:{$month:'$createdAt'},
            },
            count:{$sum:1},
        }},
        {$sort:{'_id.year':-1, '_id.month':-1}},
        {$limit:6},
    ])

    stats = stats.reduce((st, stat)=>{
        st[stat._id] = stat.count

        return st
    }, {})
    monthly = monthly.map((item)=>{
        const {_id:{year, month}, count} = item
        const date = dayjs().month(month-1).year(year).format('MMM YY')
        return {date, count}
    }).reverse();

    const st = {
        pending: stats.pending || 0,
        interview: stats.interview || 0,
        declined: stats.declined || 0,
    }
    return res.status(StatusCodes.OK).json({st, monthly})
}
module.exports = {createOne, getAll, getOne, updateOne, deleteOne, showStats}