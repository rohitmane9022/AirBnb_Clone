import './App.css'
import { Route,Routes } from 'react-router'

import IndexPages from './components/IndexPages'
import Layout from './Pages/Layout'
import Register from './Pages/Register'
import Login from './Pages/login'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<IndexPages/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      
      </Route>
    </Routes>
    </>
  )
}

export default App
