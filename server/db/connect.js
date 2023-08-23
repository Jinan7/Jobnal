const mongoose = require('mongoose')


const connect = async (url) => {
    try{
        await mongoose.connect(url);
    }catch(e){
        console.log(e);
    }
}

module.exports = connect