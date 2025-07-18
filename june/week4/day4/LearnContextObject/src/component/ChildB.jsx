import React, { useContext } from 'react'
import { nameContext } from '../App'
import { arrContext } from '../App'


function ChildB() {
    let obj=useContext(nameContext)
    let arr=useContext(arrContext)
    // let name=useContext(nameContext);
  return (
    <div>
      <h2>Hello</h2>  
      This is my child B <br/>
      {/* Name is:{name} */}
      Object Name is : {obj.name} <br/>
      Object Name is : {obj.age}  <br/>
      Array elements : {arr}
    </div>
  )
}

export default ChildB
