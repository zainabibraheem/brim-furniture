import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../assets/aboutpage.jpg'


const AboutPage = () => {

  const style = {
    backgroundImage: `url(${hero})`
  };

  
  return (
    <div>
      <div className='flex justify-center  h-[350px] lg:h-[500px] bg-cover' style={style}>

        <div className='flex flex-col text-white gap-3 pb-8 items-center justify-end'>
          <h2 className='text-7xl lg:text-8xl  font-400 font-serif'>About Us</h2>
          <div className='flex gap-2 font-medium text-xl'>
            <Link to='/'><h3>Home</h3></Link>
            /
            <Link><h3>About Us</h3></Link>
          </div>
        </div>
      </div>

      <div className='px-[60px] py-12'>
        <p className='text-md font-sans text-gray-800 leading-7 tracking-wide mt-4 mb-12'>Brim Furniture is a Luxury and Comfort brand and product ranges from our High-Quality Sofa to our contemporary Dining set to our uniquely designed tables and chairs. Our products are designed with safety in mind as well, creating pieces that are long-lasting and safe for all family members. We strive to ensure our customers enjoy their experience with us by providing the highest quality product and unbeatable customer service whenever you buy a Vento Furniture Product.</p>

      </div>

      <div className='flex flex-col md:flex-row justify-around bg-[#F9F8F8] items-center gap-20 p-20'>
        <div className='w-[300px] h-[400px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[550px] bg-cover rounded-t-full border-rose-100 border-[3px]' style={styles}>

        </div>

        <div className='w-full xl:w-2/4'>

          <h2 className='font-bold text-2xl lg:text-5xl text-gray-6600 font-serif'>Made in Nigeria, Loved Worldwid</h2>
          <p className='text-md font-sans text-gray-800 leading-7 tracking-wide mt-4 mb-12'>Proudly based in Nigeria, Brim Furniture is more than a brand; it is a celebration of local craftsmanship and global appeal. Each piece is designed and created with love, reflecting the vibrant spirit of Nigeria. Our mission is to create the comfort and  style of eleganc i with people's home around the world.

          </p>

        </div>

      </div>

    </div>
  )
}

export default AboutPage
