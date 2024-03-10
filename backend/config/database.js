const mongoose = require("mongoose") ;

//Mongoose Connection

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
console.log("Connected to MongoDB")
    }catch(err ){
        console.error("Error connecting to MongoDB:", err) ;
    }
    } ;


module.exports = connectDB;