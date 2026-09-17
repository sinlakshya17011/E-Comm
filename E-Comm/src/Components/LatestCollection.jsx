import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'

const LatestCollection = () => {

    const {products} = useContext(ShopContext)

  return (
    <div className='my-10'>
       <div className='text-3xl text-center py-10'>
          <Title text1={'LATEST'} text2={'COLLECTION'} />
       </div>
    </div>
  )
}

export default LatestCollection