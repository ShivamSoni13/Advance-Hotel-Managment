import React, { useState, useEffect } from 'react';
import HotelServiceCard from './HotelServiceCard';
import { siteRequest } from '../../../util/requestMethod'; // Adjust the import path according to your file structure

export default function HotelServicesList() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetchAdOnServiceData();
  }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

  // Function to fetch data from the server
  const fetchAdOnServiceData = async () => {
    try {
      const response = await siteRequest.get('/adon-service'); 
      if (response.status === 200) {
        setServices(response.data.data);
      } else {
        console.error('Failed to fetch AdOnService data');
      }
    } catch (error) {
      console.error('Error fetching AdOnService data:', error);
    }
  };

  return (
    <div className='border-2 border-black bg-white font-sans max-h-full overflow-y-scroll mx-5'>
      <table className='w-full h-full table-fixed'>
        <thead className='border-black font-semibold table-fixed text-center bg-orangeD1 sticky top-0'>
          <tr>
            <th>Service</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over the fetched data and render HotelServiceCard components */}
          {services && services.length > 0 ? (
            services.map((service, index) => (
              <HotelServiceCard
                key={index}
                service={service.name}
                price={service.price}
                status={service.status}
                // Pass any other props if needed
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">No services found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
