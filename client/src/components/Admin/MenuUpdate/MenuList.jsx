import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuCard from './MenuCard';
import { menuRequest } from '../../../util/requestMethod';

export default function MenuList() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetchMenuItems();
    }, []);

    const fetchMenuItems = async () => {
        try {


            const response = await menuRequest.get('/');


            
            //console.log('Response data:', response.data); // Log the response data

            // Check if response.data is an array
            if (Array.isArray(response.data)) {
                const updatedMenuItems = response.data.map(item => ({
                    ...item,
                    service_type_ids: item.service_type_ids.split(',').map(Number)
                }));
                setMenuItems(updatedMenuItems);
            } else {
                console.error('Error: response data is not an array');
                setMenuItems([]); // Fallback to an empty array
            }
        } catch (error) {
            console.error('Error fetching menu items:', error);
            setMenuItems([]); // Fallback to an empty array in case of error
        }
    };
    return (
        <div className='border-2 border-black bg-white font-sans max-h-full overflow-y-scroll sm:mx-5'>
            <table className='w-full h-full table-fixed'>
                <thead className='border-black font-semibold table-fixed text-left bg-orangeD1 sticky top-0'>
                    <tr className='w-full '>
                        <th>Image</th>
                        <th className='w-1/5 '>Dish</th>
                        <th>Price</th>
                        <th>H/R/C</th>
                        <th>Status</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {menuItems.map((menuItem, index) => (
                        <MenuCard
                            key={index}
                            image={menuItem.image}
                            dish={menuItem.name}
                            price={menuItem.price}
                            servicesIn={menuItem.service_type_ids}
                            status={menuItem.status}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
        <div className=' border-2 border-black bg-white font-sans max-h-full overflow-y-scroll mx-5'>
        {/* listStart */}
      {/* <thead className='flex justify-between border-2 border-black font-semibold '> */}
    <table className='w-full h-full table-fixed'>
      <thead className=' border-black font-semibold table-fixed text-left bg-orangeD1 sticky top-0'>
        <tr>
         <th>Image</th>
         <th>Dish</th>
         <th>Price</th>
         <th>H/R/C</th>
         <th>Status</th>
         <th>Update</th>
         <th>Price(Updt.)</th>
        </tr>
      </thead>
         {/* orderData Card */}
        <tbody>
           {dummyMenu.map((m)=>(
            <MenuCard
           image={m.image}
           dish={m.dish}
           price={m.price}
           servicesIn={m.servicesIn}
           status={m.status}
           />
           ))}

        {/* {data.map((p)=>{
           return( <OrdersDataCard
        id={p.id}
        serv={p.serv}
        order={p.order}
        customer={p.customer}
        phone={p.phone}
        total={p.total}
        status={p.status}
        />)
        })
        } */}
       
        </tbody>
         </table>

   </div>
  
}
