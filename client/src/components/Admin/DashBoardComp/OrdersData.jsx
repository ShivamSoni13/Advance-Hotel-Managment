import React, { useState, useEffect } from 'react';
import OrdersDataCard from './OrdersDataCard';
import { siteRequest } from '../../../util/requestMethod'; 

export default function OrdersData() {
  const [ordersData, setOrdersData] = useState([]);

  useEffect(() => {
    // Fetch order data from the backend API
    siteRequest.get('/orders/accepted')
      .then(response => {
        const combinedOrders = combineOrders(response.data);
        console.log(combinedOrders);
        setOrdersData(combinedOrders);
      })
      .catch(error => {
        console.log('Error fetching order history:', error);
      });
  }, []);

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

  console.log("Orders Data", ordersData);

  return (
    <div className='border-2 border-black bg-white font-sans max-h-full overflow-y-scroll sm:mx-5'>
      <table className='w-full '>
        <thead className='border-black font-semibold sm:table-fixed text-left bg-orangeD1 sticky top-0'>
          <tr>
            {/* <th>ID</th> */}
            <th>Service</th>
            <th>Customer</th>
            <th>Orders</th>
            <th>Mobile</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map((ordersData, index) => (
            <OrdersDataCard
              key={index}
              order={ordersData}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
