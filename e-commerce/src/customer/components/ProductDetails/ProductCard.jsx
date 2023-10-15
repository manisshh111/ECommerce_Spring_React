import React from 'react'
import './ProductCard.css'

const ProductCard = ({product}) => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
        <div className='h-[20rem]'>
           <img className='w-full h-full object-cover object-left-top' src={product.imageUrl} alt="" />
        </div>
        <div className='textPart bg-white pt-3 pb-1'>
            <p className='font-bold opacity-80'>{product.brand} </p>
            <p className='text-sm'>{product.title}</p>
            <p>{product.color}</p>
        </div>

        <div className='textPart flex space-x-3'>
            <p className='font-bold'>₹{product.discountedPrice}</p>
            <p className='opacity-60 line-through'>₹{product.price}</p>
            <p className='font-semibold text-green-500'>{product.discountPersent}%</p>
        </div>
      
    </div>
  )
}

export default ProductCard
