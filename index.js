import express from "express";
import cors from "cors";
import dotenv from "dotenv";


// CONNECTING TO THE DATABASE 
import db from "./config/mongoose.js"

//ASSIGN ALL EXPRESS FUNCTINALITY
const app = express();


app.use(express.json())
app.use(express.urlencoded())


//ACCESS PORT ENV VERIABLE
const port = process.env.PORT;


// Enabling CORS
app.use(cors())

// CONFING DOTENV
dotenv.config();

//MAPPING ROUTERS
import route from "./routes/index.js"
app.use(route)


app.listen(port,(err)=>{
    if(err){
        console.log('Error connecting to the server at Port' , port)
    }
    console.log('Successfully COnnected to the Server at Port' , port)
});
