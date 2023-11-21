import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const UserContext=createContext()


function UserProvider({children}) { 
  const [user,setuser]= useState(null)

  useEffect(()=>{

    if(!user){
      axios.get("/profile").then(({data})=>{setuser(data)})
      
    }
  },[])
  return (
    <UserContext.Provider value={{user,setuser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider