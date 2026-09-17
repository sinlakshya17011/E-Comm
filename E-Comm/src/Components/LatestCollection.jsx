import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'
import Productitem from './Productitem'

const LatestCollection = () => {

  const { products } = useContext(ShopContext)
  const [latestProducts,setLAtestProducts] = useState([])
  
  useEffect(()=>{
   setLAtestProducts(products.slice(0,10))
  },[])

  return (
    <div className='my-10'>
      <div className='text-3xl text-center py-10'>
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem ipsum is simply dummy text of printing and typesetting industry . Lorem has been the 
        </p>
      </div>

      {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {latestProducts.map((item,index)=>(
          <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>

    </div>
  )
}

export default LatestCollection