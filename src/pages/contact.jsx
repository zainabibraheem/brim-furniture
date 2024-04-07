import React, { useState } from 'react';
import hero from '../assets/contact.jpg';
import { Link } from 'react-router-dom';
import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";



const Contact = () => {

  const style = {
    backgroundImage: `url(${hero})`
  }

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''

  })

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({});
    alert('Your message has been sent to our team, we will get back to you via your email');
    console.log(formData);
  }


  return (
    <div>
      <div className='flex justify-center  h-[350px] lg:h-[500px] bg-cover ' style={style}>

        <div className='flex flex-col text-white gap-3 pb-10 items-center justify-end'>
          <h2 className='text-6xl md:text-7xl lg:text-8xl text-white font-400 font-serif'>Contact Us</h2>
          <div className='flex gap-2 font-medium text-lg'>
            <Link to='/'><h3>Home</h3></Link>
            /
            <Link><h3>Contact Us</h3></Link>
          </div>
        </div>
      </div>

      <div className='py-10 px-10 grid md:grid-cols-2 gap-[60px] md:px-12 bg-[#ffffff]'>
        <div className='flex flex-col gap-5 justify-center'>
          <p className='text-md font-sans text-gray-800 leading-7 tracking-wide'>Thanks for visiting our website! If you'd like to get in touch with us, we've provided several different ways to do so here for your convenience.</p>
          <p className='text-md font-sans text-gray-800 leading-7 tracking-wide'>If you have questions or concerns, please don't hesitate to reach out to us using one of the methods below.</p>
          <div className='flex gap-4 items-center'>
            <div className='border-[1px] hover:text-[#1877F2] hover:scale-105 w-[38px] h-[38px] flex justify-center items-center rounded-full border-black'><TfiEmail /></div>
            <p className='text-md font-sans text-gray-800 leading-7 tracking-wide'>info@brimfurniture.com</p>
          </div>
          <div className='flex gap-4 items-center'>
            <div className='border-[1px] hover:text-[#25D366] hover:scale-105 w-[38px] h-[38px] flex justify-center items-center rounded-full border-black'><FiPhone /></div>
            <p className='text-md font-sans text-gray-800 leading-7 tracking-wide'>+2349035742890</p>
          </div>
          <div className='flex gap-5 mt-2'>
            <div className='border-[1px] hover:text-[#1877F2] hover:scale-105 w-[38px] h-[38px] flex justify-center items-center rounded-full border-black'><TiSocialFacebook size={23} /></div>
            <div className='border-[1px] w-[38px] h-[38px] hover:text-[#1DA1F2] hover:scale-105 flex justify-center items-center p-1 rounded-full border-black'><FaTwitter size={16} /></div>
            <div className='border-[1px] rounded-full  w-[38px] h-[38px] hover:text-[#E4405F] hover:scale-105 flex justify-center items-center p-1 border-black'><RiInstagramFill size={16} /></div>
            <div className='border-[1px] w-[38px] h-[38px] hover:text-[#25D366] hover:scale-105 flex justify-center items-center p-1 rounded-full border-black'> <IoLogoWhatsapp size={16} /></div>

          </div>


        </div>

        <div className=''>

          <div>
            <h2 className='text-xl text-center font-semibold font-sans text-gray-800 leading-7 tracking-wide mb-5'>Do You Have Any Enquiry?</h2>
          </div>

          <div className=''>
            <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
              <input
                placeholder='Name'
                className='w-full border border-gray-400 focus:outline-none focus:border-blue-500 rounded-md px-4 py-[7px]'
                id='user-name'
                name='username'
                value={formData.username}
                onChange={handleChange}
              />
              <input
                placeholder='Email'
                className='w-full border border-gray-400 focus:outline-none focus:border-blue-500 rounded-md px-4 py-[7px]'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                placeholder='Message'
                className='w-full border border-gray-400 focus:outline-none focus:border-blue-500 rounded-md px-4 py-[7px]'
                id='message'
                rows='8'
                name='message'
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button className='w-[5rem] rounded-md bg-gray-900 text-[#D3D3D3] p-2 text-lg hover:scale-110 font-semibold'
               onClick={handleSubmit}
              >Send</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
