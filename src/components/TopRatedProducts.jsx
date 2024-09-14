// src/components/TopRatedProducts.js

import React, { useState, useEffect } from "react";
import Img1 from "../assets/shirt.png";
import Img2 from "../assets/shirt2.png";
import Img3 from "../assets/shirt3.png";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import OrderForm from "./OrderForm"; // Import the OrderForm component

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Stylish and comfortable casual wear for your daily adventures.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    description: "Bold and vibrant printed shirts to make a statement.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women Shirt",
    description:
      "Elegant shirts for women, perfect for a chic and polished look.",
  },
  {
    id: 4,
    img: Img1,
    title: "Formal Shirt",
    description: "Classic formal shirts designed for professional settings.",
  },
  {
    id: 5,
    img: Img2,
    title: "Summer Shirt",
    description: "Lightweight and breathable shirts ideal for hot weather.",
  },
  {
    id: 6,
    img: Img3,
    title: "Denim Shirt",
    description: "Versatile denim shirts that add a casual edge to any outfit.",
  },
  {
    id: 7,
    img: Img1,
    title: "Casual Wear",
    description:
      "Stylish and comfortable casual wear for your daily adventures.",
  },
  {
    id: 8,
    img: Img2,
    title: "Printed Shirt",
    description: "Bold and vibrant printed shirts to make a statement.",
  },
];

const TopRatedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleOrderPopup = (product) => {
    setSelectedProduct(product);
  };

  const closeOrderPopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div
      className="mt-16 mb-12 px-4"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <div className="container mx-auto">
        {/* Header section */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p
            data-aos="fade-up"
            className="text-lg sm:text-xl md:text-2xl font-medium text-white"
          >
            Top Rated Products for You
          </p>
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Best Products
          </h1>
          <p
            data-aos="fade-up"
            className="text-sm sm:text-md md:text-lg text-white mt-3"
          >
            Discover our top-rated products, crafted with quality and care. Find
            what suits you best!
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="fade-up"
              key={data.id}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden flex flex-col max-w-xs max-h-[300px] hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Image section */}
              <div className="flex justify-center items-center mt-4 relative z-10">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain transition-transform duration-300 transform group-hover:scale-105"
                />
              </div>
              {/* Details section */}
              <div className="p-3 text-center flex flex-col justify-between flex-grow relative z-10">
                {/* Star rating */}
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(4)].map((_, index) => (
                    <FaStar
                      key={index}
                      className="text-teal-400 text-xs sm:text-sm"
                    />
                  ))}
                </div>
                <h2
                  className="text-sm sm:text-md md:text-lg font-semibold text-gray-800 mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {data.title}
                </h2>
                <p className="text-xs sm:text-sm md:text-md text-gray-600 mb-4 line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-blue-800 hover:bg-blue-600 text-white px-3 py-1.5 rounded-full font-semibold transition"
                  onClick={() => handleOrderPopup(data)}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render OrderForm if selectedProduct is not null */}
      {selectedProduct && (
        <OrderForm product={selectedProduct} onClose={closeOrderPopup} />
      )}
      {/* Import Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Playfair+Display:wght@400;700&display=swap');
      `}</style>
    </div>
  );
};

export default TopRatedProducts;
