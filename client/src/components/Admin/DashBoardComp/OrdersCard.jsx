import React from 'react'
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import HotelIcon from '@mui/icons-material/Hotel';
import RestaurantIcon from '@mui/icons-material/Restaurant';

export default function OrdersCard({type}) {
  return (
    <div className='border-2 border-black flex flex-col justify-center h-1/2 sm:w-1/5 bg-white rounded-md'>
      <div className='flex justify-center'>
          {
           type=="cafe" ? <LocalCafeIcon/> :  type=="resturant" ? <RestaurantIcon/> :<HotelIcon/> 
       } 
      </div>

      <div className='flex justify-center'>
         {
      type=="cafe" ? <h1>Todays Cafe Orders</h1>: type=="resturant" ? <h1>Todays Resturant Orders</h1> :<h1>Todays Hotel Orders</h1>

       }
      </div>

      <div className='font-bold text-center text-3xl'>
           {
          type=="cafe" ? <h1 className='text-green-300'></h1>: type=="resturant" ? <h1 className='text-blue-400'></h1> :<h1 className='text-orange-300'></h1>
             }
      </div>

    </div>
  )
}
