import React from 'react'
import ServiceComp from '../../components/Hotel/ServiceComp'

export default function HotelServices() {
  return (
    <div className='h-screen relative'>
     <header className='text-center bg-black  font-Ubuntu text-3xl py-5 text-orangeD1'>MEJBAN  <span className='text-4xl font-bold text-orangeD1'>Hotel</span></header>
     <h1 className='text-center text-3xl font-bold font-Roboto py-2 italic bg-black text-white'>Other Services</h1>
      <div className='h-3/5 border-2 overflow-y-scroll mx-2 mt-2 px-2 scroll-smooth backdrop-brightness-75'>
        <ServiceComp/>
        <ServiceComp/>
        <ServiceComp/>
        <ServiceComp/>
        <ServiceComp/>
        <ServiceComp/>
        <ServiceComp/>
        <ServiceComp/>
        <ServiceComp/>
      </div>
      <button className='w-full absolute bottom-0 bg-orangeD1 text-white py-2 text-2xl font-bold'>Book</button>
    </div>
  )
}
