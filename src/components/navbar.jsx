import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { MdSearch } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";


const Navbar = () => {

  const [toggledNav, setToggledNav] = useState(false);

  const handleToggledNav = () => {
    setToggledNav(!toggledNav)
  }

  return (
    <nav >
      <div className='text-center p-2 bg-gray-900 '>
        <h2 className='text-[#D3D3D3]'>WELCOME TO BRIM FURNITURE</h2>
      </div>

      <div className='lg:flex w-full bg-[#ffffff] items-center text-gray-6600 justify-between flex-wrap  py-3 px-10 hidden '>
        <div className='flex flex-col items-center'>
          <span className='mb-0 text-4xl underline'>BRIM</span>
          <span className='text-[12px]'>FURNITURE</span>
        </div>

        <div>

          <Link className='text-xl mr-10 hover:scale-105 hover:underline' to='/'>Home</Link>
          <Link className='text-xl mr-10 hover:scale-105 hover:underline' to='shop'>Shop</Link>
          <Link className='text-xl mr-10 hover:scale-125 hover:underline duration-700 ease-in-out' to='aboutpage'>About</Link>
          <Link className='text-xl mr-10 hover:scale-125 hover:underline duration-500 ease-in-out ' to='contact'>Contact</Link>

        </div>

        <div className='flex gap-10 items-center'>
          <div className='flex items-center mr-20 gap-2 border  border-black p-[2px] rounded-3xl'>
            <MdSearch className='w-7 h-6 ' />
            <input className='bg-transparent focus:outline-none text-gray-700' placeholder='search...' />
          </div>
         <Link to='cart'> <FiShoppingCart size={22} /></Link>
        </div>


      </div>

      <div className='flex w-full bg-[#ffffff] items-center text-gray-6600 justify-between flex-wrap lg:hidden  py-3 px-10'>
        <div onClick={handleToggledNav}>
          {toggledNav ? <MdOutlineClose size={25} /> : <RxHamburgerMenu size={22} />}
        </div>

        <div className='flex flex-col items-center'>
          <span className='mb-0 text-4xl underline'>BRIM</span>
          <span className='text-[12px]'>FURNITURE</span>
        </div>

        <Link to='cart'> <FiShoppingCart size={22} /></Link>

        {toggledNav && (
          <div className='fixed w-1/2 h-full top-0 text-gray-800 left-0 bg-white py-8'>

            <div className='mb-5 flex justify-end border-b border-gray-300 '
              onClick={handleToggledNav}
            >
              <MdOutlineClose className='mr-4 mb-4' size={24} />
            </div>

            <div className='flex items-center mr-20 justify-between border-b w-full border-gray-300 p-[3px]'>

              <input className='bg-transparent focus:outline-none text text-gray-6600 ml-3' placeholder='search for product' />
              <MdSearch className='mr-3' size={22} />
            </div>

            <div className='flex flex-col text-lg'>
              <Link className='border-b border-gray-300 pt-4 hover:bg-gray-900 hover:text-[#D3D3D3]' to='/'
                onClick={() => (setToggledNav(false))}
              >
                <h2 className='ml-3 pb-4'>Home</h2>
              </Link>

              <Link className='border-b border-gray-300 pt-4 hover:bg-gray-900 hover:text-[#D3D3D3]' to='shop'
                onClick={() => (setToggledNav(false))}
              >
                <h2 className='ml-3 pb-4'>Shop</h2>
              </Link>

              <Link className='border-b border-gray-300 pt-4 hover:bg-gray-900 hover:text-[#D3D3D3]' to='aboutpage'
                onClick={() => (setToggledNav(false))}
              >
                <h2 className='ml-3 pb-4'>About</h2>
              </Link>

              <Link className='border-b border-gray-300 pt-4 hover:bg-gray-900 hover:text-[#D3D3D3]' to='contact'
                onClick={() => (setToggledNav(false))}
              >
                <h2 className='ml-3 mb-4'>Contact</h2>
              </Link>

            </div>

          </div>

        )}
      </div>
    </nav>


  )
}

export default Navbar
