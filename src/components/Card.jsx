import React from 'react'
import { assets } from '../assets/assets'
import { Button } from './Buttons'

export function Card_1({prop}) {
  console.log(prop);
  
  const imgMap = {
    Woman: assets.womanHome,
    Man: assets.manHome,
    Kid: assets.kidHome,
  };

  return (
    <div style={{backgroundImage: `url(${imgMap[prop]}`}}  className={`!m-5 card bg-contain h-115 bg-center w-90 bg-no-repeat relative flex justify-center `}>
      <Button prop={prop} type={'cardBtn'}/>
    </div>
  )
}


export function Card_2({prop}){

  const descriptionCard = {
    name: 'Trendyol',
    fullName: 'Floral Emboroidered Maxi Dress',
    price: 45.00

  }

  return (
    <div className='card flex flex-col gap-5'>
      <div className='imgCard'>
        <img src={assets.product_1} alt='product'></img>
      </div>
      <div className='descriptionCard flex flex-col gap-1'>
        <h2 className='!font-Inter font-bold text-xl'>{descriptionCard.name}</h2>
        <p className='font-semibold'>{descriptionCard.fullName}</p>
        <p className='font-bold'>$ {descriptionCard.price.toFixed(2)}</p>
      </div>
    </div>
  )

}