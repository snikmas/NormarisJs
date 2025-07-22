import React from 'react'
import {Button, ButtonBlack} from './Buttons'

import { assets } from '../assets/assets'


// do md outlite favorite fill/noot using state
export default function Header () {

  const navArray = ['Home', 'Catalogue', 'Our Story', 'Blog', "Contact Us"]
  const serviceMenu = [assets.search, assets.isFavoriteEmpty, assets.cart]

  return (
    <header className='flex items-center justify-between min-h-[100px] !px-10'>
      <div className="logo">
        <img src={assets.logo} className='w-[120px]' alt="normaris_logo"/>
      </div>

      <div className="navBar flex gap-5 ">
        {navArray.map((element, index) => {
          return <Button key={index} prop={element} type="navBar" />
        } )}
      </div>

      <div className="serviceMenu flex gap-4 text-xl">
        {serviceMenu.map((Icon, index) => {
          return <Button key={index} prop={<Icon />} />
        })}
      
       <ButtonBlack key={'login'} prop={'Login'}/>
        

      </div>
    </header>
  )
}
