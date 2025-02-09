import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Shop from './components/Shop'
import Product from './components/Product'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Login from './components/admin/Login'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/shop' element={<Shop />}/>
      <Route path='/product' element={<Product />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/checkout' element={<Checkout />}/>
      <Route path='/admin/login' element={<Login />}/>
     </Routes>
     </BrowserRouter>
     <ToastContainer />
     </>
  )
}

export default App
