import {  useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function Register() {
  const [name,setname]= useState('')
  const [email,setemail]= useState('')
  const [password,setpassword]= useState('')


  const registerUser=async(e)=>{
    e.preventDefault()
    try{
      await axios.post("/register",{
        name,
        email,
        password
      })
  
      alert("Successfully Register now can log in")
    }
    catch(error){
      alert("Register Failed, Please try again after some time")
    }
    
  }


  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
      <h1 className="text-4xl text-center mb-4">Register</h1>

     <form className="max-w-md mx-auto" onSubmit={registerUser}>
     <input type="text" placeholder="Rohit Mane" 
         value={name} 
         onChange={e=> setname(e.target.value)}/>
      <input type="email" placeholder="your@email.com" 
         value={email} 
         onChange={e=> setemail(e.target.value)}/>
      <input type="password" placeholder="password"
         value={password}
         onChange={e=> setpassword(e.target.value)}/>

      <button className="primary" type="submit">Register</button>
      <div className="text-center py-2 text-gray-500">
        Already a member? <Link to="/login" className="underline text-black">Login now</Link>
      </div>
     </form>
      </div>
      
    </div>
  )
}

export default Register