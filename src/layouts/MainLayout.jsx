import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom' // just a classic name
import Home from '../pages/Home'
// 


function MainLayout(Content){
  return (<>
    <Header />
      <Home></Home>
      {/* <Outlet /> */}
    <Footer />
  </>
  )
}

export default MainLayout