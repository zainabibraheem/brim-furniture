import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../data';
import { GoStarFill, GoStar } from "react-icons/go";
import ProductQuantity from '../components/productQuantity';
import { CartContext } from '../components/cartContext';

const ProductDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const { productId } = useParams();
  const {cart, addToCart} = useContext(CartContext);

  useEffect(() => {

    const newId = parseInt(productId);
    const newProduct = productsData.find(product => product.id === newId)
    setSelectedProduct(newProduct);



  }, [productId]);

  const handleAddToCart = () => {
    addToCart(selectedProduct);
    alert(`${selectedProduct.title} has been added to your cart`);
  
  };


  if (!selectedProduct) {
    return <h2>Loading...</h2>
  }
  return (
    <div className='grid p-12 gap-10 md:gap-[60px] md:grid-cols-2'>
      <div>
        <img className='' src={selectedProduct.image} alt={selectedProduct.title} />

      </div>

      <div className='flex flex-col gap-5'>
        <h2 className='font-bold text-2xl lg:text-5xl text-gray-6600 font-serif'>{selectedProduct.title}</h2>
        <h2 className='text-gray-900 text:xl'>{selectedProduct.price}</h2>
        <p className='text-md font-sans text-gray-800 leading-7 tracking-wide'><span className='font-semibold'>Description:</span> {selectedProduct.description}</p>
        <div className='flex text-[#e79e16]'>
          <GoStarFill />
          <GoStarFill />
          <GoStarFill />
          <GoStarFill />
          <GoStar />
        </div>
        <ProductQuantity />
        <button className='w-[10rem] mt-4 bg-gray-900 text-[#D3D3D3] py-3 px-2.5 text-[16px] rounded-md hover:scale-110' 
          onClick={handleAddToCart}
        >Add to cart</button>
      </div>
    </div>
  );



};

export default ProductDetails
