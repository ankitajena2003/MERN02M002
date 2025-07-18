const express=require("express");
// const { connect } = require("mongoose");
const connectDB = require("./db");

const app=express();


const router=express.Router();
//connection method start
connectDB()

const port=8880;

const validation=(req,res,next)=>{
    console.log("validation start")
    next()
}
const auth=(req,res,next)=>{
    console.log("authentication start");
    next()
}
// app.get("/",(req,res)=>{
//     res.send("get method called")
// })



// app.post("/user",(req,res)=>{
//     res.send("post method called")
// })

app.use("/api",router);



router.get("/",validation,auth,(req,res)=>{
    res.send("get method called")
})



router.post("/user",validation,auth,(req,res)=>{           //routes creation
    res.send("post method called")
})




 app.listen(port,(req,res)=>{
    console.log("Server is running on the ",port)
 })