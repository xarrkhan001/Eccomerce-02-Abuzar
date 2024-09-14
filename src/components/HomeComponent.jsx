import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import IMG1 from "../assets/shopping.png";
import IMG2 from "../assets/women.png";
import IMG3 from "../assets/sale.png";

// Keyframes for slide animation
const fall = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  50% {
    opacity: 1;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled components
const Slide = styled.div`
  animation: ${fall} 1s ease-in-out;
`;

const StarryBackground = styled.div`
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #00264d 0%, #003366 100%);
  height: 100vh;
  width: 100vw;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utbm9uLXdpZHRoPSIxIiBzdHJva2Utb25zLXJvcHM9IjAuNSwwLjUsMC41LDEiIHN0cm9rZT1ibGFjayBzdHJva2Utb3BhY2l0eT0iLjIiIHN0cm9rZS1kYXNoYXJyYXk9IjAuMyIgc3Ryb2tlLWxpbmVjbGFzcy1hbGlnbm1lbnQtcm91bmQ9InVubm93bmVkIiBmaWxsPSIjYzNjYyIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2xhc3M9ImFsaWduLW1lbnQiIC8+PC9zdmc+");
    background-blend-mode: overlay;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

// Import Google Font
const fontLink =
  "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Playfair+Display:wght@400;700&display=swap";

const slides = [
  {
    image: IMG1,
    title: "Welcome to Our Shop!",
    description:
      "Explore the best products and offers tailored just for you. From the latest gadgets to trendy fashion, we've got everything you need.",
  },
  {
    image: IMG2,
    title: "Exclusive Deals Just for You!",
    description:
      "Discover our special discounts and limited-time offers. Shop now and save big on your favorite items.",
  },
  {
    image: IMG3,
    title: "Super Big Sale 70% Off!",
    description:
      "Don't miss out on our massive sale with up to 70% off on selected items. Shop now before it's too late!",
  },
];

const HomeComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-screen">
      <StarryBackground>
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <Slide
                key={index}
                className="flex-shrink-0 w-full h-full flex flex-col md:flex-row items-center justify-center"
              >
                <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-12 bg-blue-50 rounded-lg shadow-lg border border-gray-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-800 opacity-30 rounded-lg"></div>

                  <div className="relative flex-1 text-center md:text-left mb-6 md:mb-0 z-10">
                    <h1 className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl font-playfair text-gray-800 mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-md text-gray-700 mb-6 font-roboto">
                      {slide.description}
                    </p>
                    <Link
                      to="/products"
                      className="bg-blue-800 hover:bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition"
                    >
                      Shop Now
                    </Link>
                  </div>
                  <div className="relative flex-1 flex items-center justify-center md:pl-6 z-10">
                    <img
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Slide>
            ))}
          </div>
        </div>
      </StarryBackground>

      {/* Import Google Font in HTML */}
      <style>{`@import url(${fontLink});`}</style>
    </div>
  );
};

export default HomeComponent;
