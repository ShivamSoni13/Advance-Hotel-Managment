import React from 'react';

export default function OrdersDataCard( order ) {
  const { order_id, service_type_id, customer_name, customer_phone_number, total_cost, status, item_names } = order.order;
  //console.log(order.order.item_names);
  let serv = null;
  if(service_type_id===1){
    serv="Hotel"
  }else if(service_type_id===2){
    serv="cafe"
  }else if(service_type_id===3){
  serv="Resturant"
  }
  return (
    <tr className='even:bg-gray-100 w-full'>
      {/* <td>#{order_id}</td> */}
      <td>{serv}</td>
      <td>{customer_name}</td>
      <td className='w-1/4'>{item_names.map((a)=>a+" , ")}</td>
      <td>{customer_phone_number}</td>
      <td>{total_cost}</td>
      <td>{status}</td>
      {/* <td className='overflow-x-scroll max-w-14 border-black border no-scrollbar'>
        {item_names && Array.isArray(item_names) && item_names.length > 0 ? (
          <ul>
            {item_names.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <span>No items</span>
        )}
      </td> */}
      {/* {customer_phone_number ? <td className='pl-1'>{customer_phone_number}</td> : <td className='pl-5'>-</td>}
      <td>₹{total_cost}</td>
      {status === "Accepted" ? (
        <td className="text-green-500 font-bold">{status.toUpperCase()}</td>
      ) : (
        <td className=''>-</td>
      )} */}
    </tr>
  );
}
