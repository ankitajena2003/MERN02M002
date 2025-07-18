import userModel from "../models/user.model";

export const createUser=async(req,res)=>{
    const {name,age,email,password}=req.body;
    // console.log(dataBody);
    
    const user=new userModel({name,age,email,password});

    res.send("data saved");
}