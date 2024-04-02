import React from 'react'
import { bestsellerData } from '../data'
import { Link } from 'react-router-dom'

const Bestseller = () => {
    const bestseller = bestsellerData.map((product) => {
        const { image, title, price, id, discount } = product
        return (
            <Link to={`/bestseller/${id}`}>
              <div className='relative' key={id}>
                <div className=''>
                    <img className='w-[300px] h-[300px] bg-slate-200' src={image} alt={title} />
                    <h2 className='mt-2'>{title}</h2>
                    <h2 className='mt-2'>N{price}</h2>
                    <button className='mt-2 border-[1px] p-2 px-3 bo border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-[#D3D3D3] hover:scale-110 '>Add to cart</button>
                </div>

                <div className='w-[3.5rem] py-[6px] text-center top-0 font-semibold left-0 absolute z-20 bg-red-600'>
                    <h2>-{discount}%</h2>
                </div>
            </div>
            </Link>
        )
    })
    return (
        <div className='py-10 text-gray-800 text-[16px] md:py-20 bg-[#F9F8F8]'>
            <h2 className='font-bold text-center text-3xl lg:text-5xl text-gray-6600 font-serif'>Best Sellers</h2>
            <div className='grid grid-cols-1 justify-center items-center gap-10 md:grid-cols-4 md:gap-6 py-10 px-[80px] md:px-[120px]'>
                {bestseller}

            </div>
        </div>
    )
}

export default Bestseller
