import React from 'react'
import about from '../assets/hero1.jpg';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const About = () => {

    const style = {
        backgroundImage: `url(${about})`,
        
      };

  return (
    <div className='flex flex-col md:flex-row justify-around bg-[#F9F8F8] items-center gap-20 p-20'>
      <div className='w-[300px] h-[450px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[550px] bg-cover rounded-t-full border-rose-100 border-[3px]' style={style}>

      </div>
      <div className='w-full xl:w-2/4'>

        <h2 className='font-bold text-2xl lg:text-5xl text-gray-6600 font-serif'>About Brim Furniture</h2>
        <p className='text-md font-sans text-gray-800 leading-7 tracking-wide mt-4 mb-12'>Brim Furniture is a Luxury and Comfort brand and product ranges from our High-Quality Sofa to our contemporary Dining set to our uniquely designed tables and chairs. Our products are designed with safety in mind as well, creating pieces that are long-lasting and safe for all family members. We strive to ensure our customers enjoy their experience with us by providing the highest quality product and unbeatable customer service whenever you buy a Vento Furniture Product.

        </p>
        
        <Link to='aboutpage'>
        <button className='border-2 border-gray-800 rounded-full text-gray-800 hover:bg-gray-900 hover:text-[#D3D3D3] hover:scale-110 text-sm p-3'>READ MORE <FaArrowRightLong className='inline-block w-8' /> </button>
        </Link>
      </div>

    </div>

  )
}

export default About
