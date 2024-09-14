import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";

// Define the menu items in an array
const menuItems = [
  { name: "Home", path: "/home" },
  { name: "Product", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Sign Up", path: "/signup" },
  { name: "Login", path: "/" },
];

const cartItems = [
  {
    category: "Men's Clothes",
    items: [
      { name: "T-Shirts", count: 5 },
      { name: "Jeans", count: 3 },
      { name: "Jackets", count: 2 },
    ],
  },
  {
    category: "Women's Clothes",
    items: [
      { name: "Dresses", count: 4 },
      { name: "Tops", count: 6 },
      { name: "Skirts", count: 2 },
    ],
  },
  {
    category: "Handbags",
    items: [
      { name: "Leather Bags", count: 7 },
      { name: "Tote Bags", count: 3 },
    ],
  },
  // Add more categories as needed
];

const Navbar = () => {
  const location = useLocation();
  const [isWishlistOpen, setWishlistOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Example state for favorite items
  const [favorites, setFavorites] = useState([
    { name: "Leather Jacket", count: 2 },
    { name: "Silk Blouse", count: 1 },
    { name: "Wool Scarf", count: 3 },
    { name: "Denim Jeans", count: 4 },
    { name: "Chiffon Dress", count: 2 },
    { name: "Suede Boots", count: 5 },
    { name: "Cashmere Sweater", count: 1 },
    { name: "Leather Handbag", count: 2 },
    { name: "Statement Necklace", count: 3 },
    { name: "Ray-Ban Sunglasses", count: 4 },
  ]);

  const wishlistRef = useRef(null);
  const cartRef = useRef(null);
  const profileRef = useRef(null);

  const toggleWishlist = () => {
    setWishlistOpen((prev) => !prev);
    if (isCartOpen) setCartOpen(false);
    if (isProfileOpen) setProfileOpen(false);
  };

  const toggleCart = () => {
    setCartOpen((prev) => !prev);
    if (isWishlistOpen) setWishlistOpen(false);
    if (isProfileOpen) setProfileOpen(false);
  };

  const toggleProfile = () => {
    setProfileOpen((prev) => !prev);
    if (isWishlistOpen) setWishlistOpen(false);
    if (isCartOpen) setCartOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wishlistRef.current && !wishlistRef.current.contains(event.target)) {
        setWishlistOpen(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex flex-col lg:flex-row items-center justify-between px-6 py-4 bg-blue-900 border-b border-blue-800 shadow-md relative z-30">
      {/* Container for logo and buttons */}
      <div className="flex items-center w-full lg:w-auto justify-between lg:justify-center lg:space-x-12">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-extrabold text-white flex items-center gap-2">
            <FaShoppingBag className="text-2xl text-gray-300" />
            STYLIO
          </span>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-12 ml-6">
          {menuItems.map((item) => (
            <li key={item.name} className="relative">
              <Link
                to={item.path}
                className={`text-base font-medium text-white hover:text-sky-300 ${
                  location.pathname === item.path ? "font-semibold" : ""
                } transition-colors duration-300`}
              >
                {item.name}
              </Link>
              {location.pathname === item.path && (
                <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-sky-300 rounded-t-md"></div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Search and Icons */}
      <div className="hidden lg:flex lg:items-center lg:space-x-6">
        <div className="relative">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="py-2 px-4 pl-10 bg-white text-gray-800 placeholder-gray-500 rounded-full border border-gray-300 transition-all duration-300 ease-in-out focus:outline-none hover:w-[300px] w-[150px] hover:bg-gray-200"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-600 text-xl" />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          {/* Wishlist Icon */}
          <div className="relative" ref={wishlistRef}>
            <button
              onClick={toggleWishlist}
              className="flex items-center focus:outline-none"
            >
              <FaHeart
                className={`border-2 rounded-full p-1 transition-colors duration-300 text-2xl ${
                  isWishlistOpen
                    ? "border-teal-500 text-teal-500"
                    : "border-gray-300 text-gray-300"
                } hover:border-teal-400 hover:text-teal-400 active:border-teal-500 active:text-teal-500`}
              />
            </button>
            <div
              className={`absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-20 transition-transform duration-300 ease-in-out transform ${
                isWishlistOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
              style={{ transformOrigin: "top right", top: "calc(100% + 10px)" }}
            >
              <div className="p-4 text-gray-800">
                <h3 className="text-lg font-semibold mb-2">Wishlist</h3>
                <ul className="space-y-2">
                  {favorites.length > 0 ? (
                    favorites.map((item) => (
                      <li key={item.name} className="flex justify-between">
                        <span>{item.name}</span>
                        <span>
                          {item.count} item{item.count > 1 ? "s" : ""}
                        </span>
                      </li>
                    ))
                  ) : (
                    <li>No items in your wishlist</li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Cart Icon */}
          <div className="relative" ref={cartRef}>
            <button
              onClick={toggleCart}
              className="flex items-center focus:outline-none"
            >
              <FaShoppingCart
                className={`border-2 rounded-full p-1 transition-colors duration-300 text-2xl ${
                  isCartOpen
                    ? "border-teal-500 text-teal-500"
                    : "border-gray-300 text-gray-300"
                } hover:border-teal-400 hover:text-teal-400 active:border-teal-500 active:text-teal-500`}
              />
            </button>
            <div
              className={`absolute right-0 mt-2 w-96 bg-white border border-gray-300 rounded-lg shadow-lg z-20 transition-transform duration-300 ease-in-out transform ${
                isCartOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
              style={{ transformOrigin: "top right", top: "calc(100% + 10px)" }}
            >
              <div className="p-4 text-gray-800">
                <h3 className="text-lg font-semibold mb-2">Cart</h3>
                {cartItems.map((category) => (
                  <div key={category.category} className="mb-4">
                    <h4 className="text-md font-semibold mb-1">
                      {category.category}
                    </h4>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li key={item.name} className="flex justify-between">
                          <span>{item.name}</span>
                          <span>
                            {item.count} item{item.count > 1 ? "s" : ""}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Icon */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={toggleProfile}
              className="flex items-center focus:outline-none"
            >
              <FaUser
                className={`border-2 rounded-full p-1 transition-colors duration-300 text-2xl ${
                  isProfileOpen
                    ? "border-teal-500 text-teal-500"
                    : "border-gray-300 text-gray-300"
                } hover:border-teal-400 hover:text-teal-400 active:border-teal-500 active:text-teal-500`}
              />
            </button>
            <div
              className={`absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-20 transition-transform duration-300 ease-in-out transform ${
                isProfileOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
              style={{ transformOrigin: "top right", top: "calc(100% + 10px)" }}
            >
              <div className="p-4 text-gray-800">
                <h3 className="text-lg font-semibold mb-2">Profile</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/profile" className="hover:text-teal-500">
                      View Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-teal-500">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-blue-900 bg-opacity-90 flex flex-col items-center justify-center lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="space-y-6 text-white text-xl">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`block ${
                  location.pathname === item.path ? "font-semibold" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
