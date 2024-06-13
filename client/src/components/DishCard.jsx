// DishCard.jsx
import { Button } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { Cart } from '../context/OrderContext';

export default function DishCard({ menuItem }) {
  
  const {cart,setCart}=useContext(Cart);
  
  // const handleAddToCart = () => {
  //   setCartItems([...cartItems,menuItem])
  //   console.log(setCart);
  // };
//console.log(cart);
  return (
    <div key={menuItem.item_id} className='flex py-2 my-1'>
      <div className='w-1/3 border-2 border-white flex justify-center items-center border-r-0 bg-white rounded-l-md'>
        <img src={menuItem.image} alt="dish" className='w-full h-full' />
      </div>
      <div className='w-2/3 border-2 border-white bg-white text-gray-500 pl-2 rounded-r-md'>
        <div className='font-bold text-3xl font-Montserrat'>{menuItem.name}</div>
        <div className='font-bold text-green-500'>₹{menuItem.price}</div>
        <div className='flex justify-start'>
          <Button variant="contained" color="primary" onClick={()=>(setCart([...cart,menuItem])
   )}>
            ADD
          </Button>
        </div>
      </div>
    </div>
  );
}
