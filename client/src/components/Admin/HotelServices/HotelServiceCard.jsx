import React from 'react';

export default function HotelServiceCard({ service, price, status, onChangeStatus }) {
  const changeHotelService = (e) => {
    e.preventDefault();
    if (window.confirm('Do you really want to change the hotel service status?')) {
      onChangeStatus(service, !status); 
    }
  };

  return (
    <tr className='even:bg-gray-100 sm:h-40 text-center'>
      <td>{service}</td>
      <td>{price}</td>
      <td className={status ? 'text-green-400 font-bold' : 'text-red-500 font-bold'}>
        {status ? 'Enabled' : 'Disabled'}
      </td>
      {/* <td>
        <button
          onClick={changeHotelService}
          className={status ? 'bg-red-500 text-white p-1 rounded-lg font-bold' : 'bg-green-400 text-white p-1 rounded-lg font-bold'}
        >
          {status ? 'Disable' : 'Enable'}
        </button>
      </td> */}
    </tr>
  );
}
