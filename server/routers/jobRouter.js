const express = require('express')
const { getOne, getAll, createOne, deleteOne, updateOne, showStats } = require('../controllers/jobs/jobs')
const {validateBody, validateId} = require('../middleware/validator')

const jobRouter = express.Router()

jobRouter.get('/', getAll)
jobRouter.get('/stats', showStats)
jobRouter.get('/:id',validateId, getOne)
jobRouter.post('/',validateBody, createOne)
jobRouter.patch('/:id',validateBody, updateOne)
jobRouter.delete('/:id', deleteOne)


module.exports = jobRouter