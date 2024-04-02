import React from 'react'
import { reviewsData } from '../data'
import { GoStarFill, GoStar } from "react-icons/go";

const Reviews = () => {
  return (
    <div className='bg-[#f0e9e981] py-20 px-12 lg:px-10'>
      <h2 className='font-bold  text-center text-2xl lg:text-4xl text-gray-6600 font-serif'>What Our Customers Say</h2>

      <div className='grid  gap-10 mt-10 lg:grid-cols-3'>
        {reviewsData.map((review, index) => {

          return (
            <div key={index}>
              <div className='flex flex-col gap-3'>
                <img className='w-[55px] h-[72px] rounded-md' src={review.image} alt='profile pic' />
                <p className='text-md font-sans text-gray-800 leading-7 tracking-wide'>{review.description}</p>
                <div className='flex text-[#e79e16]'>
                  <GoStarFill />
                  <GoStarFill />
                  <GoStarFill />
                  <GoStarFill />
                  <GoStarFill />
                </div>
                <h2 className='text-md font-semibold'>{review.title}</h2>
              </div>
            </div>
          )
        })}
      </div>


    </div>

  )
}

export default Reviews
