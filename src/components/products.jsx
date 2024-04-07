import React from 'react'
import { productsData } from '../data'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className='py-12 bg-[#f0e9e9a8]'>
      <h2 
      className='font-bold mb-8 text-center text-3xl lg:text-5xl text-gray-6600 font-serif'>Shop Products</h2>
      <div className='grid grid-cols-2 px-5 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {productsData.map((product) => {
            const {id, title, discount, price, image} = product
            
          return (
            <div key={id} className='relative rounded-t-md overflow-hidden'>
              <Link to={`/product/${id}`}>
                <div className='flex text-gray-800 text-[16px] flex-col gap-2'>
                  <img className=' rounded-md' src={image} alt={title} loading='lazy' />
                  <h2>{title}</h2>
                  <p>{price}</p>
                  <button className='w-[8rem] border-[1px] p-2 bo border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-[#D3D3D3] hover:scale-110 '>Add to cart</button>  
                </div>

                <div className='w-[3.5rem] py-[6px] text-center top-0 font-semibold left-0 absolute z-20 bg-red-600'>
                  <h2>-{discount}%</h2>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products
