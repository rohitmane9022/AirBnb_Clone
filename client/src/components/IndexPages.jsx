import { useContext } from "react"
import { UserContext } from "../Context/UserContext"

function IndexPages() {
  const {user} = useContext(UserContext)
  console.log(user)
  return (
    <div>
 
    </div>
  )
}

export default IndexPages