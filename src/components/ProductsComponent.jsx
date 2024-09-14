import React, { useState, useRef, useEffect } from "react";
import Img1 from "../assets/women.png";
import Img2 from "../assets/women2.jpg";
import Img3 from "../assets/women3.jpg";
import Img4 from "../assets/women4.jpg";
import { FaStar } from "react-icons/fa";
import TopRatedProducts from "./TopRatedProducts";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "White",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "Brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "White",
    aosDelay: "1000",
  },
  {
    id: 7,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    color: "Red",
    aosDelay: "1200",
  },
  {
    id: 8,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "Brown",
    aosDelay: "1400",
  },
  {
    id: 9,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "1600",
  },
  {
    id: 10,
    img: Img2,
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "1800",
  },
];

const ProductsComponent = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const topRatedRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  const scrollToTopRated = () => {
    if (topRatedRef.current) {
      topRatedRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div
      className="relative min-h-screen px-4 py-8"
      style={{
        background: "linear-gradient(135deg, #00264d 0%, #003366 100%)",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <div className="container mx-auto">
        {/* Header section */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p data-aos="fade-up" className="text-lg font-medium text-white">
            Discover Our Best Picks
          </p>
          <h1
            data-aos="fade-up"
            className="text-4xl font-bold text-gray-100 mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Featured Products
          </h1>
          <p data-aos="fade-up" className="text-md text-gray-300 mt-3">
            Explore our selection of top-rated products. Find your favorites and
            enjoy great deals!
          </p>
        </div>
        {/* Body section */}
        <div className="flex flex-col py-4">
          <div className="flex flex-wrap gap-10 justify-center">
            {/* Card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col w-[230px] h-[270px] hover:shadow-2xl transition-shadow duration-300 mx-4 mb-8 cursor-pointer relative"
                role="article"
                aria-labelledby={`product-title-${data.id}`}
                aria-describedby={`product-desc-${data.id}`}
                onClick={() => handleCardClick(data)}
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-3 flex flex-col justify-between flex-grow">
                  <h3
                    id={`product-title-${data.id}`}
                    className="text-md font-semibold text-gray-800 mb-1 truncate"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {data.title}
                  </h3>
                  <p
                    id={`product-desc-${data.id}`}
                    className="text-sm text-gray-500 mb-1"
                  >
                    {data.color}
                  </p>
                  <div className="flex items-center">
                    <FaStar className="text-teal-400 text-sm" />
                    <span className="ml-1 text-sm text-gray-700">
                      {data.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* View all button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={scrollToTopRated}
            className="bg-blue-800 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            View All Products
          </button>
        </div>
        {/* TopRatedProducts component */}
        <div ref={topRatedRef}>
          <TopRatedProducts />
        </div>
        {/* Popup overlay */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />
            <div
              className="relative bg-white rounded-lg p-6 w-[300px] h-[400px] flex flex-col items-center justify-center overflow-hidden z-20"
              style={{ animation: "flash 1s ease-out forwards" }}
            >
              <img
                src={selectedProduct.img}
                alt={selectedProduct.title}
                className="h-40 w-40 object-cover rounded-lg"
              />
              <h3
                className="text-xl font-semibold text-gray-800 mt-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {selectedProduct.title}
              </h3>
              <p className="text-sm text-gray-500">{selectedProduct.color}</p>
              <div className="flex items-center mt-2">
                <FaStar className="text-teal-400 text-sm" />
                <span className="ml-1 text-sm text-gray-700">
                  {selectedProduct.rating}
                </span>
              </div>
              <button
                onClick={handleClosePopup}
                className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Custom CSS for enhanced animation */}
      <style jsx>{`
        @keyframes flash {
          0% {
            opacity: 0;
            transform: scale(0);
            box-shadow: 0 0 0 rgba(255, 255, 255, 0);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
            box-shadow: 0 0 150px rgba(255, 255, 255, 0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            box-shadow: 0 0 0 rgba(255, 255, 255, 0);
          }
        }
      `}</style>
      {/* Import Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Playfair+Display:wght@400;700&display=swap');
      `}</style>
    </div>
  );
};

export default ProductsComponent;
