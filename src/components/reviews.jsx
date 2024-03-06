import React from 'react'
import { reviewsData } from '../data'

const Reviews = () => {
  return (
    <div className='grid gap-10 py-20 px-12 lg:px-10 lg:grid-cols-3'>
      {reviewsData.map((review, index) => {
        
        return (
           <div key={index}>
             <div className='flex flex-col gap-3'>
               <img className='w-[55px] h-[72px] rounded-md' src={review.image} alt='profile pic' />
                <p className='text-md font-sans text-gray-800 leading-7 tracking-wide'>{review.description}</p>
                <h2 className='text-md font-semibold'>{review.title}</h2>
             </div>
           </div>
        )
      })}
    </div>
  )
}

export default Reviews
