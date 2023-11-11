import { Link } from "react-router-dom"

function login() {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
      <h1 className="text-4xl text-center mb-4">Login</h1>
     <form className="max-w-md mx-auto">
      <input type="text" placeholder="your@email.com"/>
      <input type="password" placeholder="password"/>
      <button className="primary">login</button>
      <div className="text-center py-2 text-gray-500">Don`t have account yet? <Link to={"/register"} className="underline text-black">Register now</Link>
      </div>
     </form>
      </div>
      
    </div>
  )
}

export default login