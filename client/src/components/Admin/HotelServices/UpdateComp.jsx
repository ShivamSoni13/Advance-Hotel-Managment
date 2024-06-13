import React, { useState } from 'react';
import { siteRequest } from '../../../util/requestMethod';

export default function UpdateComp() {
  const [service, setService] = useState({
    name: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService(prevService => ({
      ...prevService,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await siteRequest.post('/add-adon-service', service);
      console.log('Response:', response.data);
      resetForm();
    } catch (error) {
      console.error('Error adding data to AdOnService table:', error);
    }
  };

  const resetForm = () => {
    setService({
      name: '',
      price: ''
    });
  };

  return (
    <div className='bg-white w-4/5 h-4/5 rounded-md drop-shadow-md p-2'>
      <h1 className='text-xl font-Raleway font-bold'>Add a new Service</h1>
      <form onSubmit={handleSubmit} className='h-4/5 border-2 sm:flex justify-around items-center pt-5 pl-5 sm:pl-0 sm:pt-0'>
        <div>
          <label htmlFor="serviceName" className='font-bold'>Name:</label>
          <input
            type='text'
            id="serviceName"
            name="name"
            placeholder='Name of Service'
            className='border p-1 mt-2'
            value={service.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="servicePrice" className='font-bold'>Price:</label>
          <input
            type='number'
            id="servicePrice"
            name="price"
            placeholder='Price of Service'
            className='border p-1 mt-2'
            value={service.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className='bg-orangeD1 text-white py-2 px-5 rounded-lg mt-2 sm:mt-0'>Add</button>
      </form>
    </div>
  );
}
