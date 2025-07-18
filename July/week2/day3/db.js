//connection of mongodb with backend
const mongoose=require("mongoose");
// connect

const connectDB=async ()=>{
    try{
        const connection=mongoose.connect("mongodb://127.0.0.1:27017/MyDatabase");
        console.log("mongo DB connected");
        // userModel.insertOne({name:"adi",age:26,email:"adi@gmail.com",password:"12356"});

        // const user=new userModel({
        //     name:"viky",
        //     age:31,
        //     email:"viky@gmail.com",
        //     password:"123456"
        // })

        // await user.save();         //if no data it create new data ,if data exist then it update

        // const data=await userModel.find();
        // const data=await userModel.findOne();
        // console.log(data);
        // console.log("data saved");

        userModel.findByIdAndUpdate({_id:'686e13e88212171bc1bb931f'},{name:"vik",age:26,email:"vik@gmail.com",password:"12356"});
         console.log("data updated");


        //  await userModel.findByIdAndDelete({});
        //  console.log("data deleted");

    }catch(error){
        console.log("Error",error);
    }
}

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

const userModel=mongoose.model("user",userSchema);  //MODEL IS MODE AND SCHEMA IS RAW MATERIAL AND USER IS COLLECTION NAME
module.exports=userModel;
module.exports=connectDB;