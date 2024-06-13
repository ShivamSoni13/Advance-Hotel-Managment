import React from 'react'
import Scanner_Comp from '../components/Scanner_Comp'

export default function QRPage() {
  return (
    <div className='h-screen'>
                   <header className='text-orangeD1 text-3xl font-bold bg-black text-center py-5'>Mejban Empire</header>
                   <div className='border-2 border-black  flex justify-center h-1/2 items-center bg-Cust1'>
                      <Scanner_Comp/>
                   </div>

                   <div className='w-full flex justify-center pt-2'>
                   <p className='bg-red-300 w-1/2 rounded-md p-5 font-bold'>Scan The Qr for Moving to Menu</p>
                   </div>

    </div>
  )
}
