console.log("Event handling");
let button=document.getElementById("btn");
console.log("button");

// button.onclick=()=>{
//     alert("button clicked");
//     button.style.background="red";
// }

// button.onkeyup=()=>{
//     console.log("key pressed");
// }

let callback=()=>{
    console.log("button clicked");
}

button.addEventListener("click",callback);

button.removeEventListener("click",callback);





// document.getElementById("toggleBtn").onclick = function () {
  
//   const body = document.body;

//   if (body.style.background === "black") {

//          body.style.background = "white";
//          body.style.color = "black";
//   } 
//   else {

//        body.style.background = "black";
//        body.style.color = "white";
//   }
// };

let color="light";
button.addEventListener("click",()=>{
    if(color==="light"){
        console.log(color);
        document.body.style.background="black";
        color="dark";
    }
     else{
        console.log(color);
        document.body.style.background="white";
        color="light";
}

})
