// import{createContext,Provider} from 'react'
import { useState } from 'react';
import './App.css'
// import ChildA from './component/ChildA';


// let nameContext=createContext();
// let arrContext=createContext();

function App() {

  let [count,setCount]=useState(0)
  
  //to create a context object
  //step 1: create a context object by using a method createContext()
  //step 2: give a provider to the context object      (contextonject.value)
  //step 3: give the value to the context object provider
  // step 4: export the context object


  //How to access inside the child components
  //by using useContext() hool we can get the value from the context object
  // let obj={
  //   name:"ankita",
  //   age:22,
  // }

  // let arr=[1,2,3,4,5];

  return (
    <>
      { /* <nameContext.Provider value={"Ankita"}>
              <ChildA/>
      </nameContext.Provider> */ }


      {/* <nameContext.Provider value={obj}>
      <arrContext.Provider value={arr}>
         <ChildA />
      </arrContext.Provider>
      </nameContext.Provider> */}
      

     <h1>Count : {count}</h1>
     <br/>
     <button onClick={()=>setCount(count+1)}>Increment</button>
        
        
    </>
  )
}
// export{nameContext}
// export{arrContext}
export default App


// to access all the library from react is called hooks
//props drilling