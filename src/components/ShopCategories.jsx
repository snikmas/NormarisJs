import React from 'react'
import { assets } from '../assets/assets'
import { ArrowButton, Button } from './Buttons'
import Card from './Card'

function ShopCategories() {

  const cards = ['Man', 'Woman', 'Kid']

  return (
    <div className='flex justify-center flex-col'>
      <div className='text flex justify-between items-center text-center h-20 align-middle'>
        <h2 className='text-4xl font-bold'>Shop By Categories</h2>
        <div className='arrows flex'>
          <ArrowButton key="arrowleft" prop={<assets.arrowLeft />}></ArrowButton>
          <ArrowButton key="arrowright" prop={<assets.arrowRight />}></ArrowButton>
        </div>
      </div>
      <div className='card flex justify-between'>
      {
        cards.map((element, index) => {
          return (
           <Card key={index} prop={element}/> 
          )
        })
      }
      </div>
    </div>
  )
}

export default ShopCategories