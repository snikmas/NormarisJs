import React from 'react'
import { assets } from '../assets/assets'
import { Card_2 } from './Card'

function OurBetseller() {

  const products = [assets.product_1, assets.product_1, assets.product_1, assets.product_1]

  return (
    <div className='flex justify-center gap-8 flex-col '>
      <h2 className='text-4xl font-bold text-center leading-20'>Our Betseller</h2>
      <div className='card flex gap-15 justify-between'>
        { products.map((element, index) => {
            return <Card_2 prop={element} key={index}/>
        })}
      </div>
    </div>)
}

export default OurBetseller