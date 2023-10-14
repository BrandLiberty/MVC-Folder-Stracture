import mongoose from 'mongoose'

import dotenv from "dotenv";

dotenv.config();


const mongo_url=process.env.MONGO_URL
//console.log(mongo_url)

mongoose.connect(mongo_url);

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Erroe connecting MOngoDB'));


db.once('open',function(){
    
    console.log("connected to the database"); 

})

export default db