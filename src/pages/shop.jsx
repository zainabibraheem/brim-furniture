import React from 'react';
import hero from '../assets/hero5.jpg'
import { Link } from 'react-router-dom';

const Shop = () => {

  const style={
    backgroundImage: `url(${hero})`
  }

  return (
    <div>
      <div className='flex justify-center  h-[350px] lg:h-[500px] bg-cover' style={style}>
        
        <div className='flex flex-col text-white gap-3 pb-10 items-center justify-end'>
          <h2 className='text-7xl lg:text-8xl font-400 font-serif'>Shop</h2>
          <div className='flex gap-2 font-medium text-lg'>
            <Link to='/'><h3>Home</h3></Link>
            /
            <Link><h3>Shop</h3></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
