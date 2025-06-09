//operator
//Arithmatic operator


let a=5;
let b=30;
console.log(a+b);//35
console.log(a-b);//-25
console.log(a*b);//150
console.log(a/b);//0.166

console.log(a%b);//5
console.log(a**2);//25

console.log(a++);//first use then increment
console.log(++a);//first increment then use

console.log(b--);//30
console.log(--b);//28

console.log("string"+30);//merge bcz + symbol rightside is a num
console.log(20+30+"string");
console.log(true+"string");
console.log(+"30"+1);//before string"30" there is a + symbol so it converted the string into num ,so output is 31
console.log(+"text");//not a num
console.log(typeof +"text");
console.log(typeof typeof +"text");
console.log(+true);//true=1 and false=0
console.log(+true+1);
console.log("20"+ +"30"*2);
//console.log(++(+"30"));//string cannot increment or decrement

let c=40;
c+=2;//c=c+2
console.log(c);
c-=3
console.log(c);


//Equal operator
//comparison operator output is booleantype
let st1="xyz";
let st2="xyz";
console.log(st1==st2);
console.log(st1===st2)

let n1="20";
let n2=20;
//normal comparison //here not check the format(only ckeck content/data)
console.log(n1==n2);
//strict comparison //here check the format(first check type then content)
console.log(n1===n2);

let e="true";
console.log(true!=e);

console.log(2!=2);
console.log(true!=true);

let is="true"
console.log(is != true)

let l="2";
console.log(3+l);

// let l="2";
// console.log(l++);

//Logical operator

//1.AND(dominant character is False)

console.log(2<4 && 3<5);

let f=3;
console.log(2<4 && f++<5);
console.log(f);

// let f=3;
// console.log(2>4 && f++<5);
// console.log(f);


//2.OR(dominant character is True)

//3.NOT operator

console.log(!false);

//conditional statement
