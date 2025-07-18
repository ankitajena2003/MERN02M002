const express=require("express");
const dotenv=require("dotenv");
const router = require("./routes/router");

dotenv.config()


const app=express();

app.use(express.json())


const port=process.env.PORT;

app.use("/api",router)

app.listen(port,(req,res)=>{
    console.log("my server is running on port",port);
})