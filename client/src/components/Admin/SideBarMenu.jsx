import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function SideBarMenu() {
  const navigate=useNavigate();
  return (
    <div className='sm:h-full relative bg-white'>
        <header className='font-bold text-center bg-black text-orangeD1 font-Montserrat  py-2 '>MejBan</header>
        
        <div className='grid grid-cols-3 gap-2 sm:h-1/2 h-fit sm:flex sm:flex-col sm:justify-around sm:mt-5 border-1 border-gray-400   p-2 sm:p-0'>
          <NavLink to={"/admin"} className='w-full sm:w-1/2 bg-orangeD1 sm:mx-auto p-2 text-white  font-Roboto rounded-xl flex justify-center items-center h-fit'>DashBoard</NavLink>
        {/* <button className='sm:w-1/2 bg-orangeD1 mx-auto p-2 text-white  font-Roboto rounded-xl'>DashBoard</button> */}
        
        <NavLink to={"/admin/orders"} className='w-full sm:w-1/2 bg-orangeD1 sm:mx-auto p-2 text-white  font-Roboto rounded-xl flex justify-center items-center h-fit'>Orders</NavLink>
        {/* <button className='sm:w-1/2 bg-orangeD1 mx-auto p-2 text-white  font-Roboto rounded-xl'>Orders</button> */}
        <NavLink to={"/admin/sales"} className='w-full sm:w-1/2 bg-orangeD1 sm:mx-auto p-2 text-white  font-Roboto rounded-xl flex justify-center items-center h-fit'>Sales</NavLink>
       
        {/* <button className='sm:w-1/2 bg-orangeD1 mx-auto p-2 text-white  font-Roboto rounded-xl'>Menu Update</button> */}
        <NavLink to={"/admin/menuUpdate"} className='w-full sm:w-1/2 bg-orangeD1 sm:mx-auto p-2 text-white  font-Roboto rounded-xl flex justify-center h-fit'>Menu Update</NavLink>
        {/* <button className='sm:w-1/2 bg-orangeD1 mx-auto p-2 text-white  font-Roboto rounded-xl'>Hotel Services</button> */}
        <NavLink to={"/admin/hotelServices"} className='w-full sm:w-1/2 bg-orangeD1 sm:mx-auto p-2 text-white  font-Roboto rounded-xl flex justify-center h-fit'>Hotel Services</NavLink>

        </div>

        <footer className='absolute  bottom-2 right-3 sm:w-full flex flex-col items-center sm:py-1  '>
           <div className=' border-black w-3/4 sm:flex sm:justify-center sm:items-center hidden'>
            Admin <span className='text-gray-500 text-xs'></span>
           </div>
           <hr className='bg-black h-px my-2 w-4/5 sm:flex hidden'/>
           <button className='bg-red-500 text-white w-fit rounded-sm p-1 sm:px-1' onClick={()=>(navigate('/'))}>Logout</button>
        </footer>
        
    </div>
  )
}
