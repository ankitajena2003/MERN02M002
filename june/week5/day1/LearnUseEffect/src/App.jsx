
import { useEffect } from 'react'
import './App.css'

function App() {

  let[count,setCount]=useState(0)





//  //useeffect-sideeffect
//  useEffect(()=>{
//   //first
//   //set of code


//   return ()=>{
//     second//clear in ui return type execute
//   }
//  },[third])//dependency

//case:-1
//useeffect will execute at every render

//case:-2
//it will executeat first render only

//case:-3
//it will give the return value when the component is uncounted


//case:-4
//it will execute based on the dependency
//manage the state inside the component-usestate

// useEffect(()=>{
//   alert("use effect trigger")
// }
// )

// useEffect(()=>{
//   alert("based on dep")
// }[count,total])


  return (
    <>
     {/* <h1>Hello</h1> <br/>
     <strong>Count :{count}</strong> <br/>
     <button onClick={()=>setCount(count+1)}>Inc</button> */}
    <Home/>
{/* 
//axios install instead of using fetch*/}

    </>
  )
}

export default App
