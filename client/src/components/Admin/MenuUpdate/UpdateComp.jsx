import React, { useState } from 'react';
import axios from 'axios';
import { siteRequest } from '../../../util/requestMethod';

export default function UpdateComp() {
    const initialFormState = {
        image: null,
        name: '',
        price: '',
        service_type_ids: [],
    };

    const [form, setForm] = useState(initialFormState);

    const handleInputChange = (e) => {
      const { name, value, type, checked, files } = e.target;
  
      if (type === 'checkbox') {
          let updatedServiceTypeIds;
  
          if (checked) {
              // Add the service type id to the array
              updatedServiceTypeIds = [...form.service_type_ids, Number(value)];
          } else {
              // Remove the service type id from the array
              updatedServiceTypeIds = form.service_type_ids.filter(id => id !== Number(value));
          }
  
          setForm({ ...form, service_type_ids: updatedServiceTypeIds });
      } else if (type === 'file') {
          setForm({ ...form, [name]: files[0] });
      } else {
          setForm({ ...form, [name]: value });
      }
  };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
           // const url = 'https://mejbanempire.onrender.com/menu';
            const response = await siteRequest.post('menu', {
                name: form.name,
                price: form.price,
                service_type_ids: form.service_type_ids,
            });

            console.log('Menu item created successfully:', response.data);
            setForm(initialFormState);
        } catch (error) {
            console.error('Error creating menu item:', error);
        }
    };

    return (
        <div className='bg-white sm:w-4/5 sm:h-4/5 rounded-md drop-shadow-md p-2'>
            <h1 className='text-xl font-Raleway underline'>Add a new Dish</h1>
            <form className='h-4/5 border-2 w-full sm:flex'>
                {/* Left Side */}
                <div className='flex-1 flex flex-col items-center justify-evenly'>
                    <input
                        type='file'
                        title='image'
                        name='image'
                        className='w-1/2 border'
                        accept='image/*'
                        onChange={handleInputChange}
                    />
                    <div className='w-1/2 flex justify-center gap-2'>
                        <label>Name</label>
                        <input
                            type='input'
                            placeholder='Name of dish'
                            className='border'
                            name='name'
                            value={form.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='w-1/2 flex justify-center gap-3'>
                        <label htmlFor=''>Price</label>
                        <input
                            type='text'
                            placeholder='Price'
                            className='border'
                            name='price'
                            value={form.price}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                {/* Right Side */}
                <div className='flex-1'>
                  <div className='bg-gray-300 flex justify-around items-center mt-5 w-4/5 mx-auto'>
                    <span>
                      <label htmlFor='' className='pr-2'>
                        Hotel
                      </label>
                      <input
                        type='checkbox'
                        value='1'
                        onChange={handleInputChange}
                        checked={form.service_type_ids.includes(Number('1'))}
                      />
                    </span>
                    <span>
                      <label htmlFor='' className='pr-2'>
                        Cafe
                      </label>
                      <input
                        type='checkbox'
                        value='2'
                        onChange={handleInputChange}
                        checked={form.service_type_ids.includes(Number('2'))}
                      />
                    </span>
                    <span>
                      <label htmlFor='' className='pr-2'>
                        Restaurant
                      </label>
                      <input
                        type='checkbox'
                        value='3'
                        onChange={handleInputChange}
                        checked={form.service_type_ids.includes(Number('3'))}
                      />
                    </span>
                  </div>
                  {/* button */}
                  <div className='flex justify-center pt-5'>
                    <button
                      className='bg-orangeD1 p-2 px-5 rounded-md hover:bg-orange-600 my-2 sm:my-0'
                      onClick={onSubmit}
                    >
                      Add
                    </button>
                  </div>
                </div>
            </form>
        </div>
    );
}
