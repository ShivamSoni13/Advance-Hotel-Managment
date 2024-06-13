import React, { useEffect } from 'react'
import Cafe from '../../../src/jailS2.jpg'
import hotel from '../../../src/hotel2.jpg';
import restaurant from '../../../src/resturantX.jpg';
import AOS from 'aos';



export default function Services() {
    useEffect(()=>{
   AOS.init({
    easing:'ease-in',
    once:true
   });
 })
  return (
    <>
         <div className='px-2 sm:hidden'>
                <div className='w-full  mr-auto relative py-2 ' data-aos="fade-right" data-aos-offset="100" data-aos-delay="30" >
                  <img src={Cafe} alt="cafe" className=' brightness-75 rounded-md' />
                  <div className='absolute bottom-5 pl-2 w-full'>
                  <header className=' text-white font-bold text-3xl'>MejBan Jail Cafe</header>
                  <p className='text-white'>Our Jail Theme Cafe with 150+ Items ,<span>perfect place for you to spend some lovely moments</span></p>
                  </div>
                </div>
                <div className='w-full  ml-auto  relative py-2 ' data-aos="fade-left" data-aos-offset="100" data-aos-delay="30">
                   <img src={restaurant} alt="restaurant" className=' brightness-75 rounded-md' />
                  <div className='absolute bottom-5 pl-2 w-full'>
                  <header className=' text-white font-bold text-3xl'>MejBan Resturant</header>
                  <p className='text-white'>Our Resturant with 150+ Items ,<span>A Complete Family Restaurant</span></p>
                  </div>
                </div>

                <div className='w-full  mr-auto  relative py-2' data-aos="fade-right" data-aos-offset="100" data-aos-delay="30">
                  <img src={hotel} alt="hotel" className='brightness-75 rounded-md h-full' />
                  <div className='absolute bottom-5 pl-2 w-full'>
                  <header className=' text-white font-bold text-3xl'>MejBan Hotel</header>
                  <p className='text-white'>Hospitality Redefined, Your Home Away from Home.<span>(A.C. ROOMS)</span></p>
                  </div>
                </div>
            </div>






            {/* Desktop view */}
            <div className='px-2 hidden sm:flex sm:w-full sm:justify-evenly sm:items-center'>
                <div className='w-full   relative py-2 sm:w-1/5 sm:h-3/4'  data-aos-offset="100" data-aos-delay="10" data-aos="fade-down"
                data-aos-duration="300">
                  <img src={Cafe} alt="cafe" className=' brightness-75 rounded-md w-4/5  sm:h-full' />
                  <div className='absolute bottom-5 pl-2 w-4/5'>
                  <header className=' text-white font-bold text-3xl'>MejBan Jail Cafe</header>
                  <p className='text-white'>Our Jail Theme Cafe with 150+ Items ,<span>perfect place for you to spend some lovely moments</span></p>
                  </div>
                </div>
                <div className='w-full sm:w-1/5 relative py-2 '  data-aos-offset="100" data-aos-delay="30" data-aos="fade-down"
                 data-aos-duration="300">
                   <img src={restaurant} alt="restaurant" className='brightness-75 rounded-md ' />
                  <div className='absolute bottom-5 pl-2 w-full'>
                  <header className=' text-white font-bold text-3xl'>MejBan Resturant</header>
                  <p className='text-white'>Our Resturant with 150+ Items ,<span>A Complete Family Restaurant</span></p>
                  </div>
                </div>

                <div className='w-full sm:w-1/5  relative py-2' data-aos-offset="100" data-aos-delay="50" data-aos="fade-down"
                    data-aos-duration="300">
                  <img src={hotel} alt="hotel" className='brightness-75 rounded-md h-full' />
                  <div className='absolute bottom-5 pl-2 w-full'>
                  <header className=' text-white font-bold text-3xl'>MejBan Hotel</header>
                  <p className='text-white'>Hospitality Redefined, Your Home Away from Home.<span>(A.C. ROOMS)</span></p>
                  </div>
                </div>
            </div>
    </>
  )
}
