import React, {useState} from 'react'

const ProductQuantity = () => {
    const [quantity, setQuantity] =useState(1);
    const increment = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };
  return (
    <div className='flex'>
      <button onClick={decrement}
       className='border-[1px] w-[35px] h-[35px]'
      > - </button>
      <div className='border-[1px] w-[35px] h-[35px] flex justify-center items-center'>{quantity}</div>
      <button onClick={increment}
       className='border-[1px] w-[35px] h-[35px]'
      > + </button>
    </div>
  )
}

export default ProductQuantity
