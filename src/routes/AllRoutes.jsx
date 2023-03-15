import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LandingPage from '../pages/landing page/LandingPage'
import Cart from '../pages/cart/Cart'
import Family from '../pages/navigation pages/Family'
import Brands from '../pages/navigation pages/Brands'
import Products from '../pages/navigation pages/Products'
import Wholesale from '../pages/navigation pages/Wholesale'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/family' element={<Family/>}/>
        <Route path='/brands' element={<Brands/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/wholesale' element={<Wholesale/>}/>
    </Routes>
  )
}
