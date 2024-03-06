import React from 'react'
import { collectionData } from '../data'

const Collection = () => {
  return (
    <div>
      <div className='flex flex-col items-center gap-5 p-10'>
        <p className='text-xl'>Shop Products</p>
        <h2 className='font-bold text-3xl'>Natura Collection</h2>
        <p className='text-md font-sans text-gray-800 leading-7 tracking-wide'>Our new collection are designed with safety in mind as well, creating pieces that are long-lasting and comforting. </p>
      </div>

      <div className='flex flex-wrap justify-center xl:justify-between p-10 lg:px-20 gap-[60px]'>
        {collectionData.map((item, index) => {
          return (
            <div className='' key={index} >
              <div className='flex flex-col items-center justify-center gap-3 mb-1 text-xl'>
                <img className='w-[300px] h-[400px]' src={item.img} alt={item.title}/>
                <div className='flex flex-col items-center text-gray-800 text-[16px]'>
                  <span >{item.title}</span>
                  <span>N{item.price}</span>
                </div>
                <button className='bg-gray-950 text-white py-3 px-2.5 text-[16px] rounded-md hover:scale-110' >Add to cart</button>
              </div>
            </div>
          )
        })}
      </div>

    </div>

  )
}

export default Collection
