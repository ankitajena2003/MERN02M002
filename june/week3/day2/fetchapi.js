console.log("today fetch api");

// function getData(userId){
//     setTimeout(()=>{
//         console.log("user id:",userId);
//     },3000)
// }
// getData(1);//not synchrounous function(not line by line execute)
// getData(2);
// getData(3);


//callback hell

// function getData(userId,next){
//     setTimeout(()=>{
//         console.log("user id:",userId);
//         next();
//     },3000)
// }
// getData(1,()=>{
//    getData(2,()=>getData(3,()=>getData(4,()=>getData(5))))

// });

//Promises
function getData(userId) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("User Id :",userId);
            resolve("resove ho gaya");
        },3000)
    })    
}
//HOW TO HANDLE A PROMISE
// using catch and then
//promise chain
getData(1).then((res)=>{
    return getData(2).then(()=>{
        return getData(3).then((res)=>{
             console.log("result is :,res");

        })
    })
}).catch((err)=>{
      console.log("Error is :",err);
        
    });
//if promises Resolved then then-function used then block execute otherwise catch block used
//promise is a normal object
// let promise = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("success");//server do resolve and reject

//     },3000)
// })
// console.log(promise);

//async await  
//API FETCH THE DATA FROM SERVER
// what is the use of async and await
// async is used to create a block as asynchronous
// await is a keyword is used to wait for the execution of the line
async function getData(){
    let response=await fetch("https");
    let data=await response.json();// response uesd to fetch thedata in javascript object
    console.log(data[0].title);

    data?.forEach(element=>{
        console.log(element.title);//optional operator is used for either one data or another data
    });
}

getData();



//PUT is usedd for change the data
//REACT


//json convert any data to js object
//fetch(get request,option)





