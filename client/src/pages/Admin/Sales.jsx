import React from 'react'
import SideBarMenu from '../../components/Admin/SideBarMenu'

export default function Sales() {
  return (
    <div className='mx-0 px-0 box-border h-screen sm:flex sm:border-black sm:h-screen'>
      <div className='sm:w-1/5 shadow-shadowCust z-10 '><SideBarMenu/></div>
      <div className='sm:w-4/5  bg-Cust1 h-screen  mt-5 sm:m-0'>
        <div className='h-2/5 border-2 flex justify-center items-center border-black mx-2 sm:mx-0'>
          <div className="text-3xl text-gray-800">Coming Soon</div>
        </div>
        <div className='h-3/5 mt-2 sm:mt-0'>
          <div className="text-3xl text-gray-800">Coming Soon</div>
        </div>
      </div>
    </div>
  )
}
