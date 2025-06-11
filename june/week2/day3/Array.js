// let a=20;
// console.log(`the value of a is :${a+2}`);
// console.log("the value is:",a+1);


// // const obj={
// //     name:"xyz";
// // }
// // console.log(obj.name);
// // obj.name="y";
// // console.log(obj.name);

// let str="Welcome";
// console.log(str[1]);
// str[0]="D";
// console.log(str);
// //length is a property
// console.log(str.length);

// const newstr=console.log(str.toLowerCase());
// console.log(newstr);
// console.log(str.toUpperCase());

// // console.log("After trim :"str.trim().length);
// // //any changes creates new string object
// // console.log("here trim not applicable:",str.length);

// // console.log(str.charAt(0));

// console.log(str.concat("Qlith").concat("Innovation"));//concatination

// //Replace
// const newString=str.replace("W","D");
// console.log(newString);

// console.log(str.slice(0,str.length)); //start fromm 0end end-index-1
// console.log(str.slice(2));//if one value then it is starting index
// console.log(str.slice(-2));//starts from opposite means emocleW
// //starting index must be less than ending index

// let username=prompt("enter your name without spacing");
// console.log("".concat("@").concat(username).concat(username.length))

// console.log(str.substring(0,3));//same work as slice but doesnt take -ve value


//Arrays
// js doesnt have fixed size array

let starr=["babul","nikita","ankita","madhu","pramila"];
console.log(starr[0]);
for(let e of starr){
    console.log(e);
}

let numArr=[2,3,4,6,7];
let sum=0;
for(let e of numArr){
   sum=sum+e;
}
console.log(sum/(numArr.length));//Average calculate


//METHODS
let arr2=[1,2,3,4,5];
let arr3=[6,7,8,9,10];
arr2.push(6,7,"anki",true);
console.log(arr2);

arr2.pop(); //it remove last element
console.log(arr2);

console.log(arr2.toString());

console.log(arr2.concat(arr3));
arr2.unshift(0);
console.log(arr2);
arr2.shift();//it delete first element
console.log(arr2);

console.log(arr2.slice(0,4));//it starts from 0 to 4-1=3 
console.log(arr2.slice(-2));

//SPLICE
//it access 3 data 1. starting index, 2. how manyindex you remove, 3. which value you want to add/replace(jouta delete kali taa jagare replace)

arr2.pop();
console.log(arr2);
arr2.splice(1,2,10);
console.log(arr2);

arr2.splice(4,1);
console.log(arr2);

console.log(arr2.includes(10)); //it searches where is 10,if it present then TRUE otherwise FALSE

let arr4=["Bloomberg","Mcrosoft","Uber","Google","IBM","Netflix"];
arr4.shift();
console.log(arr4);
arr4.splice(1,1,"Ola");
console.log(arr4);
arr4.push("Amazon");
console.log(arr4);



