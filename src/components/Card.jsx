import React from 'react'
import { assets } from '../assets/assets'
import { Button } from './Buttons'

function Card({prop}) {
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

export default Card