const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const userSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    location:String,
    avatar:String,
    avatarPublicId:String,
})

userSchema.pre('save', async function (){
    const salt = await bcryptjs.genSalt()
    const hashedPassword = await bcryptjs.hash(this.password, salt)
    this.password = hashedPassword
})

userSchema.methods.toJSON = function () {
    let obj = this.toObject()
    delete obj.password
    return obj
}

const users = mongoose.model('users', userSchema)
module.exports = users