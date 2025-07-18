import React from 'react'
import Home from './Components/Home'


function App() {
  
  let a=10;
  let str="Ankita";
  let obj={
    name:"anki",
    age:20,
    email:"xyz@gmail.com"
  }

  let arr=[1,2,3,4]



  return (
    <>
      <h1>Hello Welcome to React</h1>
      <Home a={a} str={str} obj={obj} arr={arr}/>
    </>
  )
}

export default App
