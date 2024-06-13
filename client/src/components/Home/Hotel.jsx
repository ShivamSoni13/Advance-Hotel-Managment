import React from 'react'
import img from '../../MejbanHotel/HImg1.png'

export default function Hotel() {
  return (
    <div className='w-full my-10'>
        <h1 className='text-4xl text-center text-orangeD1 font-Montserrat font-bold py-2'>Mejban Hotel</h1>
        <div className='flex justify-center my-2'>
          <img src={img} alt="cafe Parthall" className='w-4/5'/>
        </div>
        <p className='italic w-4/5 mx-auto text-black' >We have specious and comfortable <span className='font-bold not-italic text-orangeD1 underline'>AC ROOMS </span>with Room Service facility for Our Guests .</p>
    </div>
  )
}
