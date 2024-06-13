import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Counter() {
   
  const [time, setTime] = useState(1200); // 20 minutes in seconds
  const navigate=useNavigate();


  useEffect((e) => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    // Redirect to the next page after 20 minutes
    const redirectTimer = setTimeout(() => {
      clearInterval(timer);
      navigate('/');
    }, 1200000); // 20 minutes in milliseconds

    // Cleanup function
     return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

   const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  return (
     <div className='w-full h-screen border-2 border-black  flex items-center justify-center font-Montserrat'>
      <div className=' h-1/2 border rounded-md  border-orange-400 shadow-shadowCust2 flex flex-col justify-center items-center mx-3 '>
      <h1 className='text-center text-3xl mb-5'>Your Order is booked and will be Prepared in </h1>
      <p className='text-6xl text-orange-400'>{formatTime(time)}</p>
      <button className='bg-orange-400 text-white p-2 text-xl rounded-md mt-10 font-bold font-Ubuntu' onClick={()=>navigate('/')}>Home</button>
    </div>
     </div>
  )
}
