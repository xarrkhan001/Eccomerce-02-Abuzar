// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeComponent from "./components/HomeComponent";
import ProductsComponent from "./components/ProductsComponent";
import AboutUs from "./components/AboutUs";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/products" element={<ProductsComponent />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
};

export default App;
