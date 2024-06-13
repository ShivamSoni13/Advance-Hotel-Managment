import React from 'react'
import SideBarMenu from '../../components/Admin/SideBarMenu'
import OrdersCard from '../../components/Admin/DashBoardComp/OrdersCard'
import OrdersData from '../../components/Admin/DashBoardComp/OrdersData'

export default function AdminMain() {
  return (
    <div className='mx-0 px-0 box-border h-screen sm:flex  sm:border-black sm:h-screen'>
        <div className='sm:w-1/5 shadow-shadowCust z-10 '><SideBarMenu/></div>

        {/* <div className='h-full bg-black w-1'></div> */}
        <div className='sm:w-4/5 w-full bg-Cust1 mt-10 sm:mt-0'>
            <div className='sm:h-2/5 border-2 flex sm:justify-around gap-x-1 items-center '>
              <OrdersCard type={"cafe"}/>
              <OrdersCard type={"resturant"}/>
              <OrdersCard type={"hotel"}/>
            </div>

             {/* Table */}
            <div className='h-3/5 mt-2 sm:mt-0'>
              <OrdersData/>
            </div>
        </div>
    </div>
  )
}
