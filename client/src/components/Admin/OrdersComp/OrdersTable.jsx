import React, { useEffect, useState } from 'react';
import { siteRequest } from '../../../util/requestMethod';
import OrderCardComp from './OrderCardComp';

export default function OrdersTable({ comp }) {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    // Fetch order data from the backend API
    siteRequest.get('/orders/accepted')
      .then(response => {
        const combinedOrders = combineOrders(response.data);
        console.log("Combined Orders:", combinedOrders);
        setOrderData(combinedOrders);
      })
      .catch(error => {
        console.log('Error fetching order history:', error);
      });
  }, []); // Empty dependency array to run the effect only once when the component mounts
   
  const combineOrders = (data) => {
    const combinedOrders = {};
    data.forEach(order => {
      if (!combinedOrders[order.order_id]) {
        combinedOrders[order.order_id] = {
          ...order,
          item_names: [order.item_name]
        };
      } else {
        combinedOrders[order.order_id].item_names.push(order.item_name);
      }
    });

    // Convert the object values into an array
    const ordersArray = Object.values(combinedOrders);

    // Sort the orders based on order_id in descending order
    ordersArray.sort((a, b) => b.order_id - a.order_id);

    return ordersArray;
  };

  // Determine service type ID based on 'comp' prop
  let serv = null;
  if(comp === 'Hotel'){
    serv = 1;
  } else if(comp === 'Cafe'){
    serv = 2;
  } else if(comp === 'Restaurant'){
    serv = 3;
  }

  console.log("Service Type ID:", serv);

  return (
    <>
      {/* Default Comp is Cafe*/}
      <table className='sm:w-full h-full sm:table-fixed'>
        <thead className='border-black font-semibold table-fixed text-left bg-orangeD1 sticky top-0'>
          <tr>
            <th>Service</th>
            <th>Name</th>
            <th>Orders</th>
            <th>Mobile</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orderData && Array.isArray(orderData) && orderData.length > 0 && orderData
            .filter(order => order.service_type_id === serv)
            .map((order,index) => (
              <OrderCardComp
                key={index}
                order={order}
              />
            ))}
        </tbody>
      </table>
    </>
  );
}
