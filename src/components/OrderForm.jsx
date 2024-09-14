import React, { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const OrderForm = ({ product, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Order submitted:", {
      name,
      email,
      address,
      productId: product.id,
    });
    // Close the popup after submission
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 animate-fadeIn">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full transform transition-transform duration-300 ease-in-out scale-90 hover:scale-100">
        <h2
          className="text-lg font-bold mb-4 text-gray-800"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Order Now
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-medium"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 text-sm font-medium"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Address
            </label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in"
              rows="3"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            />
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-1 rounded-full transition duration-200 ease-in"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-600 text-white px-3 py-2 rounded-full flex items-center gap-2 transition duration-200 ease-in"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              <ShoppingCartIcon className="h-4 w-4" />
              Order Now
            </button>
          </div>
        </form>
      </div>
      {/* Import Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Playfair+Display:wght@400;700&display=swap');
      `}</style>
    </div>
  );
};

export default OrderForm;
