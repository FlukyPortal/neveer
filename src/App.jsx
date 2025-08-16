import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Shop from './pages/Shop'

const App = () => {
  return (
    <div className='p-6'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </div>
  )
}

export default App