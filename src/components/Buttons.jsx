import React from 'react'

export function Button({prop, type}) {
  const types = {
    navBar: "font-Montserrat font-bold tracking-wide text-xl",
    white: "bg-transparent"
  }

  console.log(type)

  return (
    <button className={`${types[type]}`}>{prop}</button>
  )
}


 export function ButtonBlack({prop}){

  const style = '!ml-4 bg-black text-white  font-Montserrat rounded !px-5 !py-2 font-bold';

  return <button className={`${style}`}>{prop}</button>
}