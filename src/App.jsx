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
import SinglesPages from './Pages/SinglesPages'
import BookingPages from './Pages/BookingPages'
import BookingSinglePages from './Pages/BookingSinglePages'

axios.defaults.baseURL="https://c681ca78-c502-4b52-9e91-8023e3f31f7e-00-2vurzb2dpjbur.asia-b.replit.dev"
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
      <Route path='/account/booking' element={<BookingPages/>}/>

      <Route path='/account/place/new' element={<PlaceForm/>}/>
      <Route path='/account/place/:id' element={<PlaceForm/>}/>
      <Route path='/place/:id' element={<SinglesPages/>}/>
      
      <Route path='/account/booking/:id' element={<BookingSinglePages/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
