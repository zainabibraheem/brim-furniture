import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
import hero from '../assets/product3.jpg'
import { CartContext } from '../components/cartContext';
import ProductQuantity from '../components/productQuantity';
import { MdOutlineClose } from "react-icons/md";

const Cart = () => {

    const { cart, removeFromCart } = useContext(CartContext);

    const style = {
        backgroundImage: `url(${hero})`
    };

    return (
        <div>
            <div className='flex justify-center  h-[200px] lg:h-[200px] bg-cover' style={style}>

                <div className='flex flex-col text-white gap-3 pb-8 items-center justify-end'>
                    <h2 className='text-3xl font-semibold lg:text-3xl  font-400 font-serif'>Shopping Cart</h2>
                    <div className='flex gap-2 font-medium text-md'>
                        <Link to='/'><h3>Home</h3></Link>
                        /
                        <Link><h3>Cart</h3></Link>
                    </div>
                </div>
            </div>

            {cart.length === 0 ? (
                <div className='flex items-center py-10 flex-col px-10 gap-5 bg-[#ffffff]'>

                    <TiShoppingCart size={150} />

                    <h2 className='font-bold text:xl md:text-2xl lg:text-5xl text-gray-6600 font-serif'>Your cart is currently empty</h2>
                    <div className='text-center'>
                        <p className='text-md font-sans text-gray-800 leading-7 tracking-wide'>There is no product in your cart.</p>
                        <p className='text-md font-sans text-gray-800 leading-7 tracking-wide'>You will find a lot of interesting products on our "Shop" page.</p>

                    </div>
                    <Link to='shop'>
                        <button className=' bg-gray-900 text-[#D3D3D3] py-3 px-2.5 text-[16px] rounded-md hover:scale-110' >Return To Shop</button>
                    </Link>
                </div>
            ) : (
                <div className='px-10 py-5'>
                    <h2 className='font-bold text-2xl text-gray-6600 font-serif mb-2'>Cart</h2>
                    <ul>
                        {cart.map((item) => {
                            return (
                                <li className='border-b border-gray-300 p-2' key={item.id}>
                                    <div className='flex justify-between p-'>
                                        <div className='flex gap-5'>
                                            <img className='w-[120px] h-[120px]' src={item.image} alt={item.title} />
                                            <div>
                                                <h2>{item.title}</h2>
                                                <h2>Price: {item.price}</h2>
                                                <h2>Quantity: <ProductQuantity /> </h2>
                                            </div>
                                        </div>

                                        <MdOutlineClose size={22} onClick={() => removeFromCart(item.id)} />
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
            }

        </div>
    )
}

export default Cart
