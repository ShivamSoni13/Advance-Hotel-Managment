import React, { useState } from 'react'
import OrdersTable from './OrdersTable';

export default function OrdersMainComp() {
      const [activeComponent, setActiveComponent] = useState('cafe');
       const handleButtonClick = (comp) => {
       // console.log(comp);
    setActiveComponent(comp);
  };
  return (
    <div className='border-black border-2 m-2 sm:m-5 h-full bg-white relative'>
       <div className='flex justify-around items-center  h-1/5 border-2'>
        <button className={activeComponent==='cafe'?`rounded-sm border-2 w-1/5 border-black bg-orangeD1 text-white p-2 font-bold`:`rounded-md border-2 w-1/5 border-black bg-orange-400 text-white ` } onClick={() => handleButtonClick('Cafe')}>Cafe</button>
        <button className={activeComponent==='Resturant'?`rounded-sm border-2 sm:w-1/5  border-black bg-orangeD1 text-white p-2 font-bold`:`rounded-md border-2 sm:w-1/5 w-fit px-2 border-black bg-orange-400 text-white ` } onClick={() => handleButtonClick('Restaurant')}>Restaurant</button>
        <button className={activeComponent==='Hotel'?`rounded-sm border-2 w-1/5 border-black bg-orangeD1 text-white p-2 font-bold`:`rounded-md border-2 w-1/5 border-black bg-orange-400 text-white ` } onClick={() => handleButtonClick('Hotel')}>Hotel</button>
       </div>
       <div className='border-black border-2 h-4/5 w-full  overflow-y-scroll absolute bottom-0 '>
         <OrdersTable comp={activeComponent}/>
       </div>

    </div>
  )
}
