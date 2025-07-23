import React from 'react'

export function Button({prop, type}) {
  const types = {
    navBar: "font-Montserrat font-bold tracking-wide text-xl",
    cardBtn: "font-Inter bg-white text-black text-lg font-light w-40 h-10 absolute shadow-md cursor-pointer bottom-4 hover:shadow-xl transition-shadow:"
  }


  return (
    <button className={`${types[type]}`}>{prop}</button>
  )
}


export function ButtonBlack({prop}){

  const style = 'cursor-pointer !ml-4 bg-black text-white  font-Montserrat rounded !px-5 !py-2 font-bold';

  return <button className={`${style}`}>{prop}</button>
}

export function ArrowButton({prop}){


  return (
    <button
      className={`cursor-pointer flex justify-center w-10 text-3xl h-10 border-2 !ml-10 items-center text-black rounded-3xl`}
    >
      {prop}
    </button>
  )
}