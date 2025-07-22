import React from 'react'
import MainLayout from './layouts/MainLayout'
import { Route, Routes } from 'react-router-dom'


// pages
import Home from './pages/Home'
import Cart from './pages/Cart'
import Catalogue from './pages/Catalogue'
import Product from './pages/Product'

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='home' element={<Home />}></Route>
          <Route path='catalogue' element={<Catalogue />}>
            <Route path=":productId" element={<Product />}/>
          </Route>
          <Route path='cart' element={<Cart />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App