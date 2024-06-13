import React, { useState, useEffect } from "react";
import OrderComp from "../../components/CookingStaff/OrderComp";
import { siteRequest } from "../../util/requestMethod";

export default function CookingStaffHome() {
  const [newOrders, setNewOrders] = useState([]);

  useEffect(() => {
    fetchNewOrders();
    const intervalId = setInterval(fetchNewOrders, 2000); // Fetch new orders every 5 seconds
    return () => clearInterval(intervalId);
  }, []);

  const fetchNewOrders = async () => {
    try {
      const response = await siteRequest.get('orders/new');
      if (!response.data || !Array.isArray(response.data)) {
        throw new Error("Invalid data received");
      }
      setNewOrders(response.data);
    } catch (error) {
      console.error("Error fetching new orders:", error);
    }
  };

  return (
    <div className="h-screen overflow-y-scroll">
      <header className="text-center bg-orangeD1 font-Ubuntu text-4xl py-5 text-white">
        MEJBAN
      </header>
      <h1 className="bg-black text-white text-center text-2xl italic">
        Orders
      </h1>
      <div className="h-4/5 mt-2 mx-2">
        <div className="h-full sm:h-3/4 sm:border-none">
          <h1 className="text-white text-xl bg-orange-400 font-bold">
            Orders in Queue...
          </h1>
          <div className="h-90% w-full sm:flex overflow-x-scroll py-2 sm:border border border-gray-400 px-2 bg-yellow-50">
            {newOrders.reduce((acc, order) => {
              const existingOrderIndex = acc.findIndex(item => item.order_id === order.order_id);
              if (existingOrderIndex !== -1) {
                const existingItemIndex = acc[existingOrderIndex].item_names.findIndex(itemName => itemName === order.item_name);
                if (existingItemIndex === -1) {
                  acc[existingOrderIndex].item_names.push(order.item_name);
                }
              } else {
                acc.push({
                  ...order,
                  item_names: [order.item_name]
                });
              }
              return acc;
            }, []).reverse().map((order, index) => ( // Reverse the array before mapping
              <div className="sm:mx-2 w-full my-2 sm:my-0" key={`${order.order_id}-${index}`}>
                <OrderComp order={order} key={order.order_id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
