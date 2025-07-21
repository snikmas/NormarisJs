import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom' // just a classic name

function MainLayout(Content){
  return (<>
    <Header />
      <Outlet />
    <Footer />
  </>
  )
}

export default MainLayout