import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import loginImage from "../assets/ppp.avif"; // Import your image here

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        alert("Login successful!");
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[698px] bg-gradient-to-br from-[#00264d] to-[#003366]">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        {/* Login Form Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center relative z-10">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            style={{ fontFamily: "'Playfair Display', serif" }}
            data-aos="fade-up"
          >
            Welcome to STYLIO
          </h1>
          <p
            className="text-md mb-6 text-gray-600"
            style={{ fontFamily: "'Roboto', sans-serif" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Log in to access your account and explore new fashion trends. Let’s
            get you started!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-blue-500"
                }`}
                style={{ fontFamily: "'Roboto', sans-serif" }}
                data-aos="fade-up"
                data-aos-delay="300"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4" data-aos="fade-up" data-aos-delay="400">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                  errors.password
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-blue-500"
                }`}
                style={{ fontFamily: "'Roboto', sans-serif" }}
                data-aos="fade-up"
                data-aos-delay="500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-blue-800 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-300 disabled:opacity-50"
              style={{ fontFamily: "'Roboto', sans-serif" }}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {isSubmitting ? "Logging In..." : "Log In"}
            </button>
            <p
              className="mt-4 text-center text-gray-600"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Don’t have an account?{" "}
              <a href="/signup" className="text-blue-600 hover:underline">
                Sign Up
              </a>
            </p>
          </form>
        </div>

        {/* Image Section with Gradient Overlay */}
        <div className="hidden md:block relative w-1/2">
          <img
            src={loginImage} // Display the image
            alt="Fashion"
            className="object-cover w-full h-full opacity-80"
            data-aos="fade-left"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#004080] to-transparent"></div>
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

export default Login;
