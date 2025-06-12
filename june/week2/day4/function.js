// Function

// function countVowels(str){
//     let count=0;
//     for(const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }    }
//         console.log(count);
// }
// let a="education";
// countVowels(a);

// using Arrow Function

// const countVow=(str)=>{
//     let count=0;
//     for(const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }    }
//         console.log(count);
// }
// let a1="education";
// countVow(a);

// //print the square of each num in an array using forEach loop

// let nums=[1,2,3,4,5,6];
// nums.forEach((num)=>{
//     console.log(num*num);
// });
//         //OR
// //using Arrow fun
//  let numss=[20,30,40,50,60];       
// let calcSquare=(num)=>{
//     console.log(num*num);
// };
// numss.forEach(calcSquare);


// Array Hoework
// find price of items after using the offer

// let items=[250,645,300,900,500];
// let i=0;
// for(let val of items){
//     let offer=val/10;
//     items[i]-=offer;
//     console.log(`value after using offer=${items[i]}`);
//     i++;
// }

// function print(){
//     console.log("this is my function");
// }
// print();//function invoke/calling
// console.log(print);
// //Expression function
// let printQlith=function(){
//     console.log("this is my expression function");
// }
// printQlith();
// console.log(printQlith);

// //function with parameter
// let add=function(a,b){
//     return a+b;
// }
// let sum=add(10,20);
// console.log(sum);
// // console.log(add);

// //Arrow function
// let sub=()=>{
//     console.log("this is my arrow fn");
// }
// sub();
// // console.log(sub);

// //higher-order function

// // function hof(a,b,task){
   
// //     return task(a,b);
// // }
// // let add=hof(10,20,(x,y)=>{
// //     return x+y;
// // })
// // console.log(addNum);

// //local variable access outside the block
// // function Aprint(a){
// //     return a;
// // }
// function countVowels(str){
//     let count=0;
//     for(const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }    }
//         console.log(count);
// }
// let a="education";
// countVowels(a);

// let newString=prompt("enter string:");
// function checkVowel(str){
//     let newStr=str.toLowerCase();
//     let count=0;
//     for(let char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }    
//     }
//     return count;
// }
// console.log("No. of vowels is:",checkVowel(newString));

//using includes method............................................

    //  for(let char of str){
    //     if("aeiou".includes(char)){
    //       count++;
    //     }
    //  }
    //  return count;
    // }   
    // console.log("No. of vowels is:",checkVowel(newString));

    //callback Function:-function used as argument
    //Higher order function:= it take function  as argument and returntype

    let arr=[1,2,3,4,5,6,7];
    arr.forEach((val,idx,arr)=>{
        console.log(`in index ${idx} value is: ${val} array ${arr}`);
    })

    let strArr=["ram","shyam","bharat","sita","radha"];
    let countStartsWithS=0;
    strArr.forEach((v)=>{
        if(v.startsWith("s")){
            countStartsWithS++;
        }
    })
    console.log("ans is :",countStartsWithS);

    //map method  .......................................v.v.v.v.imp

    let numArr=[1,2,3,4,5];
    let modifiedArr=numArr.map((v)=>{
        return v+1;
    })
    console.log(modifiedArr);

//filter method........................(like if-else)........................
let filterData=numArr.filter((v)=>{
    return v%2===0;
})   
console.log(filterData); 

//reduce method........................................................
//it is used in to find No. of sum
//remind its syntax
let sumOfNum=numArr.reduce((accu,curr)=>{
    return accu+curr;
},0)
console.log("sum is:",sumOfNum);
//acc(accumulator)=>starting value and curr(current value)
//acc=acc+curr.............................................v.imp
//.......................OR.......................

let sumNum=0;
for(let e of numArr){
    sumNum+=e;
}
console.log("sum is:",sumNum);

//....................HOMEWORK..................
//Question(1)
function filterPassingMarks(marks) {
    return marks.filter(mark => mark >= 50);
}
const studentMarks = [45, 67, 89, 32, 50, 49, 90];
const passingMarks = filterPassingMarks(studentMarks);

console.log(passingMarks); 

//...........................OR.............................
let marksOfStudent=[20,30,60,100,90,10,0,17];
let afterFilter=marksOfStudent.filter((e)=>{
    return e>=50;
})
console.log(afterFilter);

//Question(2)
let n=prompt("enter a number");
let from1ToN=[];
for(let i=1;i<=n;i++){
    from1ToN.push(i);
}
console.log(from1ToN);

let sumFrom1ToN=from1ToN.reduce((accu,curr)=>{
    return accu+curr;
})
let mulFrom1ToN=from1ToN.reduce((accu,curr)=>{
    return accu+curr;
})
console.log("Summation is:",sumFrom1ToN);
console.log("Multiplication is:",mulFrom1ToN);