require('express-async-errors')
const express = require('express')
const dotenv = require('dotenv')
const auth = require('./middleware/auth')
const authRouter = require('./routers/authRouter')
const jobRouter = require('./routers/jobRouter')
const errorHandler = require('./middleware/errorHandler')
const notFound = require('./middleware/notFound')
const connect = require('./db/connect')
const cookieParser = require('cookie-parser')
const userRouter = require('./routers/userRouter')
const path = require('path')




const url = process.env.MONGO_URI


const port = process.env.PORT

const app = express()
app.use(express.static(path.resolve('./public')))
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api/v1/jobs', auth, jobRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users',auth, userRouter)
app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './public', 'index.html'))
})
app.use(notFound)
app.use(errorHandler)

const start = async()=> {
    try {
        await connect(url)
        app.listen(port,()=>{
            console.log(`server is listening on ${port}`)
        })
    }catch (e){
        console.log(e)
    }   
    
}

start()