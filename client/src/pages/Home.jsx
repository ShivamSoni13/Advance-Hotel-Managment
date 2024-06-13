import React, { useEffect } from 'react'
import Cafe from '../../src/jailS2.jpg'
import { NavLink, redirect ,useNavigate} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Corosel from '../components/Home/Corosel';
import Location from '../components/Home/Location';
import PartyHall from '../components/Home/PartyHall';
import hotel from '../../src/hotel2.jpg';
import restaurant from '../../src/resturantX.jpg';
import Footer from '../components/Home/Footer';
import CustomerReviews from '../components/CustomerReviews';
import Hotel from '../components/Home/Hotel';
import Services from '../components/Home/Services';


export default function Home() {

  const navigate=useNavigate();
 useEffect(()=>{
   AOS.init({
    easing:'ease-in',
    once:true
   });
 })

 const handleSigin=(e)=>{
  const selctedOption=e.target.value;
  //console.log(selctedOption);

  selctedOption==='admin'?
  navigate('/signin/admin'):navigate('/signin/cooksPanel');
 }

  return (
    <div className=' w-full bg-Cust1 relative overflow-x-hidden'>
      {/* Header */}
         <div className='flex justify-between bg-black py-5 px-1 fixed top-0 z-10 sm:px-10 w-full'>
          <header className='text-orangeD1 text-2xl font-bold'>Mejban Empire</header>
          <div className='flex justify-between items-center gap-x-5 mx-1'> 
            <NavLink to={"/QR"} className='bg-orangeD1 text-white font-bold px-2 rounded-md py-1'>ScanQR</NavLink>

          <select name="Login" id=""   className='bg-orangeD1 text-white font-bold px-2 rounded-md py-1' onChange={handleSigin}>
          {/* <button className='bg-orangeD1 text-white font-bold px-2 rounded-md'>Login</button> */}
          {/* <option >Login</option> */}
          <option value={null}>
            LOGIN
          </option>
          <option value="admin">Admin</option>
          <option value="cookingStaff">Cook</option>
            </select>
          </div>
         </div>

          {/* image Slider */}
         <div className='w-full flex justify-center bg-black py-5' >
          <Corosel/>
         </div>

         {/* Services */}

          <div>
            <header className='text-center text-orangeD1 text-3xl font-bold font-Montserrat'>Services</header>
           <Services/>
          </div>

          <PartyHall/>
          <Hotel/>

          {/* //Location */}
          <div data-aos="zoom-in-down" className='my-2 bg-orangeD1'>
          <Location/>
          </div>
          {/* CustomerReview */}
          <div className='flex flex-col justify-center items-center my-10 '>
            <h1 className='text-center text-3xl font-Montserrat text-orangeD1 pb-5 font-bold'>Customer Reviews</h1>
          <CustomerReviews/>
          {/* <button><a href="">Review Our Services</a></button> */}
          </div>
          <Footer/>
    </div>
  )
}
