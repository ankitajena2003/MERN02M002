const http=require("http");
//import http to the current project-require
const myServer=http.createServer((req,res)=>{
    console.log("Server is running on port 8000");
    console.log(req);
    res.end("response send")
})
myServer.listen(8000);
//listen is a method to start the server (first we create the server then we use it)