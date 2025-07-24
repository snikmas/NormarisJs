import React from 'react'
import NewCollectionCard from '../components/newCollectionCard'
import ShopCategories from '../components/ShopCategories'
import OurBetseller from '../components/OurBetseller'

export default function Home() {
  // const homeSections = ['S']s

  return (
    <div className='flex flex-col gap-25'>
      <div>
        <NewCollectionCard />
      </div>
      <div className='shopByCategories !px-20'>
        <ShopCategories />
      </div>
      <div className='ourBetseller !px-20'>
        <OurBetseller />
      </div>
    </div>
  )
}
