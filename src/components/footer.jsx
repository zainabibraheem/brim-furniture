import React from 'react'
import { BiCopyright } from 'react-icons/bi';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col gap-9 items-start bg-gray-900 text-[#D3D3D3] py-10 px-10'>
        <div className='flex flex-col items-center'>
          <span className='mb-0 text-5xl underline'>BRIM</span>
          <span className='text-sm'>FURNITURE</span>
        </div>

        <div className='text-lg'>
          <ul >
            <li className='mb-1'>Home</li>
            <li className='mb-1'>Products</li>
            <li className='mb-1'>About Us</li>
            <li className='mb-1'>Help</li>
            <li className='mb-1'>Testimonials</li>
            <li className='mb-1'>Contact Us</li>
          </ul>
        </div>

        <div className='flex  flex-col items-start'>
          <div>
            <div className='flex items-center gap-1 justify-center  text-sm'>
              <BiCopyright className='block' size={18} /> <span className='text-lg'> 2024 BRIM. </span> <span className=''> All rights reserved | Developed by </span> <span className='underline'> Zainab</span>
            </div>

          </div>


          <div className='flex gap-6 text-[12px] font-sans leading-7 tracking-wide'>
            <h3 className='hover:scale-125  hover:text-[#E4405F] hover:underline duration:700 ease-in-out'>REFUNDS</h3>
            <h3 className='hover:scale-125  hover:text-[#E4405F] hover:underline duration:700 ease-in-out'>TERMS</h3>
            <h3 className='hover:scale-125 hover:text-[#E4405F] hover:underline duration:700 ease-in-out'>PRIVACY</h3>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Footer
