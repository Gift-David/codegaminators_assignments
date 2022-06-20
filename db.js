const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config();
const dburl = process.env.MONGODB

const dbConnect = () =>{
        mongoose.connect(`${dburl}`, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, ()=>{
        console.log("MongoDb Connected")
        })
}

module.exports = dbConnect