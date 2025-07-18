const express=require("express");
const env=require("dotenv");
const DBconnect = require("./config/DBconnect");
const routes = require("./routes/allroutes");
const app=express();

app.use(express.json());

env.config();

DBconnect();

const port=process.env.port;

app.get("/",(req,res)=>{
    res.send("welcome to library management system backend");
});

app.use("/api",routes);

app.listen(port,() =>{
    console.log(`backend is running on ${port}`);
});
