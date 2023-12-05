import './App.css'
import { Route,Routes } from 'react-router'

import IndexPages from './components/IndexPages'
import Layout from './Pages/Layout'
import Register from './Pages/Register'
import Login from "./Pages/Login"
import axios from 'axios'

import ProfilePage from './Pages/ProfilePage'
import PlacePage from './Pages/PlacePage'
import PlaceForm from './Pages/PlaceForm'

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
      <Route path='/account' element={<ProfilePage/>}/>
      <Route path='/account/place' element={<PlacePage/>}/>
      <Route path='/account/place/new' element={<PlaceForm/>}/>
      <Route path='/account/place/:id' element={<PlaceForm/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
