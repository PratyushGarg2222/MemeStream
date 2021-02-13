const mongoose = require('mongoose');
const config = require('config');
//Global variable defined in default.json, 
const db = config.get('mongoURI');  //mongoURI is the connection link to the MongoDB database

const connectDB = async () => {

    try{

        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });  //Connecting to the database
        console.log("MongoDB connected");

    }catch(err){

        console.error(err.message);

        process.exit(1);
    }


};

module.exports = connectDB;
