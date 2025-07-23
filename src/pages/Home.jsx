import React from 'react'
import NewCollectionCard from '../components/newCollectionCard'
import ShopCategories from '../components/ShopCategories'

export default function Home() {
  // const homeSections = ['S']s

  return (
    <div>
      <div className='!px-20'>
        <NewCollectionCard />
      </div>
      <div className='shopByCategories !px-20 !mt-20'>
        <ShopCategories />
      </div>
    </div>
  )
}
