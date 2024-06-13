import React from 'react'
import img1 from '../../MejbanHotel/img1.jpg'

export default function PartyHall() {
  return (
    <div className='w-full mt-10'>
        <h1 className='text-4xl text-center text-orangeD1 font-Montserrat font-bold py-2'>Cafe Party Hall</h1>
        <div className='flex justify-center my-2'>
          <img src={img1} alt="cafe Parthall" className='w-4/5'/>
        </div>
        <p className='italic w-4/5 mx-auto text-black' >We have a <span className='font-bold not-italic text-orangeD1 underline'>Cafe Party Hall</span> which you can Book as per your Requirenments(Birthday party,Aniversary party...) and make your make some good memories. </p>
    </div>
  )
}
