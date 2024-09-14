import React from "react";
import userProfileImage from "../assets/img4.jpg"; // Replace with the actual path to user profile image

const UserProfile = () => {
  // Sample user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    address: "123 Main St, Springfield, IL",
    phone: "+1 234 567 8901",
    orders: [
      { id: 1, date: "2024-09-01", total: "$120.00", status: "Shipped" },
      { id: 2, date: "2024-08-15", total: "$45.00", status: "Delivered" },
      { id: 3, date: "2024-07-22", total: "$200.00", status: "Pending" },
      { id: 4, date: "2024-06-10", total: "$75.00", status: "Shipped" },
      { id: 5, date: "2024-05-20", total: "$150.00", status: "Delivered" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00264d] to-[#003366] p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center p-6 bg-gradient-to-br from-[#003366] to-[#004080] text-white">
          <img
            src={userProfileImage}
            alt="Profile"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white mb-4 md:mb-0"
          />
          <div className="text-center md:text-left md:ml-6">
            <h1
              className="text-2xl md:text-4xl font-bold mb-2 animate-fadeIn"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {user.name}
            </h1>
            <p
              className="text-lg md:text-xl animate-fadeIn"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              {user.email}
            </p>
          </div>
        </div>

        {/* Profile Details and Order History */}
        <div className="p-6 flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Profile Details */}
          <div className="w-full md:w-1/2 bg-white shadow-md rounded-md p-6 transform transition-transform duration-300 ease-in-out scale-90 hover:scale-100">
            <h2
              className="text-xl md:text-2xl font-semibold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Profile Details
            </h2>
            <div className="space-y-4">
              <div>
                <h3
                  className="text-lg font-medium"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  Address
                </h3>
                <p
                  className="text-gray-700"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  {user.address}
                </p>
              </div>
              <div>
                <h3
                  className="text-lg font-medium"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  Phone Number
                </h3>
                <p
                  className="text-gray-700"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  {user.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Order History */}
          <div className="w-full md:w-1/2 bg-white shadow-md rounded-md p-6 transform transition-transform duration-300 ease-in-out scale-90 hover:scale-100">
            <h2
              className="text-xl md:text-2xl font-semibold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Order History
            </h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-600">
                  <th
                    className="py-3 px-4 border-b"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    Order ID
                  </th>
                  <th
                    className="py-3 px-4 border-b"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    Date
                  </th>
                  <th
                    className="py-3 px-4 border-b"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    Total
                  </th>
                  <th
                    className="py-3 px-4 border-b"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {user.orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-100">
                    <td
                      className="py-3 px-4 border-b"
                      style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                      {order.id}
                    </td>
                    <td
                      className="py-3 px-4 border-b"
                      style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                      {order.date}
                    </td>
                    <td
                      className="py-3 px-4 border-b"
                      style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                      {order.total}
                    </td>
                    <td
                      className={`py-3 px-4 border-b font-semibold ${
                        order.status === "Shipped"
                          ? "text-green-600"
                          : order.status === "Delivered"
                          ? "text-blue-600"
                          : order.status === "Pending"
                          ? "text-yellow-600"
                          : "text-gray-600"
                      }`}
                      style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                      {order.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Import Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Playfair+Display:wght@400;700&display=swap');
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in;
        }
      `}</style>
    </div>
  );
};

export default UserProfile;
