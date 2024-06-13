import React from 'react'
import SideBarMenu from '../../components/Admin/SideBarMenu'
import OrdersMainComp from '../../components/Admin/OrdersComp/OrdersMainComp'

export default function Orders() {
  return (
        <div className='mx-0 px-0 box-border h-screen sm:flex  sm:border-black sm:h-screen bg-Cust1 '>
        <div className='sm:w-1/5 shadow-shadowCust z-10'><SideBarMenu/></div>
        <div className='sm:w-4/5  h-4/5 mt-5 sm:mt-0'>
                <OrdersMainComp/>        
        </div>
</div>
  )
}
