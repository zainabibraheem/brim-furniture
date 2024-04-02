import React, { useState } from 'react'
import { createContext } from 'react'

   const CartContext = createContext();

   const CartProvider = ({children}) => {
      const [cart, setCart] = useState([]);
      
      const addToCart =(selectedProduct) => {
          setCart([...cart, selectedProduct])
      };

      const removeFromCart = (newId) => {
        const newCart = cart.filter(item => item.id !== newId );
        setCart(newCart)
      }

      return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
      )
    
   }

export {CartContext, CartProvider}
