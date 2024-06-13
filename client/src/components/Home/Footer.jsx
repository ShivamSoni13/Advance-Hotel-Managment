import React from 'react'

export default function Footer() {
  return (
    <div className='w-full mt-5'>
        <div className='bg-Custblue text-white py-5'>
        <header className='text-orangeD1 text-4xl font-bold text-center sm:text-left sm:my-5 sm:pl-5'>Mejban Empire</header>
        <div className="flex-grow flex flex-wrap md:pl-20  md:mt-0 mt-5 md:text-left ">
        <div className=" w-full sm:flex sm:w-full sm:justify-evenly">
        <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3 ml-2 underline underline-offset-4 sm:flex-1">Contact Us</h2>
        <nav className="list-none mb-10 mx-2 sm:flex-1">
          <li className='flex justify-between'>
            <span className="text-orangeD1 font-bold ">Mejban Cafe</span>
            <span>+91 98125 38800</span>
          </li>
          <li className='flex justify-between'>
            <span className="text-orangeD1 font-bold">MejBan Hotel</span>
            <span>+91 80597 70027</span>
          </li>
          <li className='flex justify-between'>
            <span className="text-orangeD1 font-bold ">Mejban Restaurant</span>
            <span></span>
          </li>
        </nav>
          <div className='sm:flex-1'>
            <div className='bg-white w-3/4 h-0.5 mx-auto mb-5 sm:hidden'></div>
        <p className='px-2 text-2xl mx-auto text-center'>For any Query Regarding Cafe,Restaurant,Hotel feel free to Contact on the above given Ph.no's</p>
          </div>
           </div>
      </div> 

        </div>
    </div>
  )
}


