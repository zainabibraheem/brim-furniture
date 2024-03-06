import React from 'react'
import hero  from '../assets/hero2.jpg'


const Hero = () => {
    const style = {
        backgroundImage: `url(${hero})`,
          
      }
    
  return (
    <header>
    <div className='h-screen bg-cover' 
      style={style}
    >
  
    </div>
  </header>
  )
}

export default Hero
