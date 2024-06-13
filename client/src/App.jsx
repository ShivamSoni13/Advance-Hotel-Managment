import React from 'react'
import { BrowserRouter as Router,Route,Routes} from  'react-router-dom'
import Home from './pages/Home'
import Cafe from './pages/Cafe'
import Resturant from './pages/Resturant/Resturant'
import Hotel from './pages/Hotel/Hotel'
import CafeConfirm from './pages/CafeConfirm'
import HotelServices from './pages/Hotel/HotelServices'
import OrderFood from './pages/Hotel/OrderFood'
import CookingStaffHome from './pages/CookingStaff/CookingStaffHome'
import AdminMain from './pages/Admin/AdminMain'
import MenuUpdate from './pages/Admin/MenuUpdate'
import HotelServicesUpdate from './pages/Admin/HotelServicesUpdate'
import Orders from './pages/Admin/Orders'
import QRPage from './pages/QRPage'
import Admin from './pages/Login Page/Admin'
import CookingStaff from './pages/Login Page/CookingStaff'
import PageNotFound from './pages/PageNotFound'
import { ContextProvider } from './context/OrderContext'
import CounterPage from './pages/CounterPage'


export default function App() {
  return (
    <div>
            <ContextProvider>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/QR' element={<QRPage/>}/>
            <Route path='/cafe' element={<Cafe/>}/>
            <Route path='/cafe/cart' element={<CafeConfirm/>}/>
            <Route path='/resturant' element={<Resturant/>}/>
            <Route path='/hotel' element={<Hotel/>}/>
            <Route path='/hotel/orderFood' element={<OrderFood/>}/>
             
            <Route path='/hotel/hotelServices' element={<HotelServices/>}/>
            <Route path='/staff/ordersPage' element={<CookingStaffHome/>}/>
            {/* <Route path='/admin/dashboard' element={<AdminMain/>}/> */}
            <Route path='admin'>
            <Route index element={<AdminMain/>}/>
            <Route path='menuUpdate' element={<MenuUpdate/>}/>
            <Route path='hotelServices' element={<HotelServicesUpdate/>}/>
            <Route path='orders' element={<Orders/>}/>
            </Route>
            {/* logIn */}
            <Route path='/signin/admin' element={<Admin/>}/>
            <Route path='/signin/cooksPanel' element={<CookingStaff/>}/>

            {/* Counter */}
            <Route path='/booked' element={<CounterPage/>}/>

            {/* 404 */}
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
             </ContextProvider>
    </div>
  )
}

