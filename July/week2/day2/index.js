

//this is for import the  express

const express=require("express");

//this is for creating the application
const app=express();
app.use(express.json());             //it convert any raw data to json............(inbuilt middle-wire)

//user-defined middle-wire
const validation=(req,res,next)=>{                //next method used to router execution
   console.log("validation ho raha hai");
   next();
}
app.use(validation);


const auth=(req,res,next)=>{        //..............another example of user-defined middle-wire        
   console.log("auth ho raha hai");
   next();
}
app.use(auth);


//this is your port number
const port=8000;


//get - data retrive
//post - create
//put - update
//delete - delete


app.get('/',(req,res)=>{
    // const {q,s}=req.query;
    // console.log(q);
    // console.log(s);
    console.log("get method called");
    res.send("<h1>get request called</h1>");
})

app.post('/user',(req,res)=>{

    const data=req.body;
    console.log(data);
    // res.send("data");
    res.status(200).json(data);  //200 means ok
})

app.put('/user/:id',(req,res)=>{
    res.send("put request called");
})

app.delete('/user/:id',(req,res)=>{
    const {id}=req.params;
    console.log("ID is ",id);
    res.send("delete request called");
})


//this is for running the server
app.listen(port,(req,res)=>{
    console.log("my server is running on the port",port);
})
//express js automatic starts the server


