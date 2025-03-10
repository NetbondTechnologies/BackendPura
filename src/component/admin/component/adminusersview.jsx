import React, { useState } from "react";
import Dashboard from "../dashboard";

const users = [
  { id: 1, username: "john_doe", email: "john@example.com", totalOrders: 12 },
  { id: 2, username: "jane_smith", email: "jane@example.com", totalOrders: 8 },
  { id: 3, username: "mark_taylor", email: "mark@example.com", totalOrders: 15 },
];

export default function AdminUserView() {
  const [searchEmail, setSearchEmail] = useState("");

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchEmail.toLowerCase())
  );

  return (
    <div>
      <Dashboard />
      <div className="container mx-auto p-6 bg-gray-100 min-h-screen flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">User List</h2>
        <input
          type="text"
          placeholder="Search by Email"
          className="mb-4 p-2 border border-gray-400 rounded-lg w-full max-w-md"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
        />
        <div className="w-full max-w-4xl overflow-x-auto bg-white shadow-lg rounded-lg p-4">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-6 text-left border border-gray-300">Username</th>
                <th className="py-3 px-6 text-left border border-gray-300">Email</th>
                <th className="py-3 px-6 text-left border border-gray-300">Total Orders</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr
                  key={user.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-200 transition-all`}
                >
                  <td className="py-3 px-6 border border-gray-300 font-medium text-gray-700">
                    {user.username}
                  </td>
                  <td className="py-3 px-6 border border-gray-300 text-gray-600">
                    {user.email}
                  </td>
                  <td className="py-3 px-6 border border-gray-300 text-gray-700">
                    {user.totalOrders}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredUsers.length === 0 && (
            <p className="text-gray-500 text-center py-4">No users found</p>
          )}
        </div>
      </div>
    </div>
  );
}
