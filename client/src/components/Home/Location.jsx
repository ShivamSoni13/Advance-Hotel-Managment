import React, { useEffect } from 'react'
import PlaceIcon from '@mui/icons-material/Place';

export default function Location() {
  return (
    <div className='w-full flex flex-col items-center py-2'>
        <h1 className='text-4xl text-black text-center py-5 font-bold font-Montserrat'>Location</h1>
        <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d479.15322593850294!2d76.2570704935296!3d28.59321692931352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39128f68fe1411cb%3A0xf196f4ab4c6a5d5f!2sMejban%20Chowk!5e0!3m2!1sen!2sin!4v1707147090666!5m2!1sen!2sin"} width={"80%"} height={"250"} style={{border:0}}  loading="lazy"  ></iframe>
        <p className='font-semibold italic text-xl  w-4/5 mt-2 font-serif underline text-center'><span className='text-red-600 ' ><PlaceIcon style={{fontSize:"35px"}}/></span>Mejban chowk,Charkhi Dadri,Haryana 127306</p>
    </div>
  )
}
