import React from 'react';

export default function OrderCardComp( order ) {
  const { service_type_id, customer_name, customer_phone_number, total_cost, status, item_names } = order.order;
  
  // Determine service type based on 'service_type_id'
  let serv = null;
  if(service_type_id === 1){
    serv = "Hotel";
  } else if(service_type_id === 2){
    serv = "Cafe";
  } else if(service_type_id === 3){
    serv = "Restaurant";
  }

  return (
    <tr className='even:bg-gray-100 w-full'>
      {/* <td>#{order_id}</td> */}
      <td>{serv}</td>
      <td>{customer_name}</td>
      <td className='w-1/4'>{item_names.join(", ")}</td>
      <td>{customer_phone_number}</td>
      <td>{total_cost}</td>
      <td>{status}</td>
    </tr>
  );
}
