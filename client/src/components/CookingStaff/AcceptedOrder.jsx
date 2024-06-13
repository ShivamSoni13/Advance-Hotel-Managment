import React from "react";

const AcceptedOrder = ({ orders }) => {
  // Filter only the orders with status "Accepted"
  const acceptedOrders = orders.filter(order => order.status === "Accepted");

  // Function to determine the prefix based on the service type ID
  const getServiceTypePrefix = (service_type_id) => {
    switch (service_type_id) {
      case 1:
        return "H"; // Hotel
      case 2:
        return "C"; // Cafe
      case 3:
        return "R"; // Restaurant
      default:
        return ""; // Default empty prefix
    }
  };

  return (
    <div>
      {acceptedOrders.map((order, index) => (
        <div className="bg-white rounded-lg shadow-md p-4 relative border w-full border-green-400 sm:w-72" key={index}>
          <h2 className="text-lg font-bold mb-2 text-gray-800">
            Order ID: {order.order_id}
          </h2>
          <p className="mb-2 text-sm text-gray-700">
            Customer Name:{" "}
            <strong className="font-bold">{order.customer_name}</strong>
          </p>
          <p className="mb-2 text-sm text-gray-700">
            Customer Phone Number: {order.customer_phone_number}
          </p>
          <p className="mb-2 text-sm text-gray-700">
            Table or Room Number:{" "}
            <strong>
              {getServiceTypePrefix(order.service_type_id)}
              {order.table_or_room_number}
            </strong>
          </p>
          <p className="mb-2 text-sm text-gray-700">
            Total Cost: ₹{order.total_cost}
          </p>
          <p className="mb-2 text-sm text-gray-700 font-bold">
            Accepted Items:
            <ul>
              {order.item_names.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </p>
        </div>
      ))}
    </div>
  );
};

export default AcceptedOrder;
