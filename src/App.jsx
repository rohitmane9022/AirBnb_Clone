import './App.css'
import { Route,Routes } from 'react-router'

import IndexPages from './components/IndexPages'
import Layout from './Pages/Layout'
import Register from './Pages/Register'
import Login from "./Pages/Login"
import axios from 'axios'
import AccountPages from './Pages/AccountPages'

axios.defaults.baseURL="https://booking-app.rohitmane2.repl.co"
axios.defaults.withCredentials=true

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<IndexPages/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/account/:subpage?' element={<AccountPages/>}/>
      <Route path='/account/:subpage/:action' element={<AccountPages/>}/>
      
      </Route>
    </Routes>
    </>
  )
}

export default App
