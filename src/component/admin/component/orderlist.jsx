import React, { useState } from "react";
import Dashboard from "../dashboard";

const orders = [
  {
    id: "ORD12345",
    customer: "John Doe",
    price: "$120.50",
    status: "Delivered",
  },
  {
    id: "ORD12346",
    customer: "Alice Smith",
    price: "$89.99",
    status: "Shipped",
  },
  {
    id: "ORD12347",
    customer: "Michael Johnson",
    price: "$45.75",
    status: "Processing",
  },
];

const getStatusBadge = (status) => {
  const statusColors = {
    Delivered: "bg-green-500",
    Shipped: "bg-blue-500",
    Processing: "bg-yellow-500",
  };
  return (
    <span
      className={`${statusColors[status]} text-white px-3 py-1 rounded-full text-xs font-semibold`}
    >
      {status}
    </span>
  );
};

export default function OrderList() {
  const [searchOrderId, setSearchOrderId] = useState("");

  const filteredOrders = orders.filter((order) =>
    order.id.toLowerCase().includes(searchOrderId.toLowerCase())
  );

  return (
    <div>
      <Dashboard />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Recent Orders
        </h2>
        <input
          type="text"
          placeholder="Search by Order ID"
          className="mb-4 p-2 border border-gray-400 rounded-lg w-full"
          value={searchOrderId}
          onChange={(e) => setSearchOrderId(e.target.value)}
        />
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-3 text-left border border-gray-300">
                  Order ID
                </th>
                <th className="p-3 text-left border border-gray-300">
                  Customer
                </th>
                <th className="p-3 text-left border border-gray-300">Price</th>
                <th className="p-3 text-left border border-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, index) => (
                <tr
                  key={order.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition-all`}
                >
                  <td className="p-3 border border-gray-300 font-medium text-gray-700">
                    {order.id}
                  </td>
                  <td className="p-3 border border-gray-300 text-gray-600">
                    {order.customer}
                  </td>
                  <td className="p-3 border border-gray-300 text-gray-700">
                    {order.price}
                  </td>
                  <td className="p-3 border border-gray-300">
                    {getStatusBadge(order.status)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredOrders.length === 0 && (
            <p className="text-gray-500 text-center py-4">No orders found</p>
          )}
        </div>
      </div>
    </div>
  );
}
