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
import Modal from './compoents/modal/Modal'
import AddProduct from './pages/admin/page/AddProduct'
import UpdateProduct from './pages/admin/page/UpdateProduct'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
          <Route path='/modal' element={<Modal />}/>
          <Route path='/addproduct' element={<AddProduct />}/>
          <Route path='/updateproduct' element={<UpdateProduct />}/>
          <Route path='/*' element={ <NoPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
     
    </>
  )
}

export default App

