const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
        const con = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true
        })
        console.log(`MongoDB connection :${con.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;