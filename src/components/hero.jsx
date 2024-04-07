import React from 'react'
import hero  from '../assets/hero.jpg'


const Hero = () => {
    const style = {
        backgroundImage: `url(${hero})`,
          
      }
    
  return (
    <header>
    <div className='h-[500px] w-full lg:h-screen bg-cover' 
      style={style}
    >
      <div className='text-white  font-bold p-5 lg:p-[40px]'>
        <h2 className='md:text-xl mb-1 md:mb-[6px]'>Elevate Your Space,</h2>
        <h2 className='text-3xl md:text-6xl'>Transform Your Home.</h2>
      </div>  
    </div>
  </header>
  )
}

export default Hero
