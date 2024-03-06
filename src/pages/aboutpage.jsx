import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../assets/hero4.jpg'
const AboutPage = () => {

  const style={
    backgroundImage: `url(${hero})`
  }
  return (
    <div>
      <div className='flex justify-center  h-[350px] lg:h-[500px] bg-cover' style={style}>
        
        <div className='flex flex-col text-gray-950 gap-3 pb-8 items-center justify-end'>
          <h2 className='text-7xl lg:text-8xl  font-400 font-serif'>About Us</h2>
          <div className='flex gap-2 text-black font-medium text-xl'>
            <Link to='/'><h3>Home</h3></Link>
            /
            <Link><h3>About Us</h3></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
