
import React from 'react'

function Register() {
    const[fullName,setFullName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const handelRegister=()=>{
        console.log(fullName,email,password);
    }

  return (
    <div>
      <input type="text"
      placeholder='Enter full name'
      value={fullName}
      className="border online-none p-2"
      onChange={(e)=>setFullName(e.target.value)}
      />

      <input type="text"
      placeholder='Enter email'
      value={email}
      className="border online-none p-2"
      onChange={(e)=>setEmail(e.target.value)}
      />

      <input type="text"
      placeholder='Enter password'
      value={password}
      className="border online-none p-2"
      onChange={(e)=>setPassword(e.target.value)}
      />
      <button onClick={handelRegister}>Register</button>

    </div>
  )
}

export default Register
