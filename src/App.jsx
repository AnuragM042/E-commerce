import { useState } from 'react'
import {
  BrowserRouter as Router, Route,Routes
} from 'react-router-dom'
import Home from './pages/home/Home'
import Order from './pages/Order/Order'
import Dashboard from './pages/admin/dashboard/Dashboard'
import Cart from './pages/cart/Cart'
import NoPage from './pages/nopage/NoPage'
import MyState from './context/data/MyState'
import Login from './pages/Registration/Login'
import Signup from './pages/Registration/Signup'
import Productinfo from './pages/productinfo/Productinfo'


function App() {
  

  return (
    <>
    <MyState>
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/order' element={<Order />} />
          <Route path='/cart' element={ <Cart />} />
          <Route path='/dashboard' element={ <Dashboard />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/productinfo/:id' element={<Productinfo />}/>
          <Route path='/*' element={ <NoPage />} />
        </Routes>
      </Router>
    </MyState>
     
    </>
  )
}

export default App

