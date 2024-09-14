import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import teamMember1 from "../assets/img7.jpg";
import teamMember2 from "../assets/img4.jpg";
import teamMember3 from "../assets/img10.jpg";

// Import the Google Font (Add this to your index.html or use a package for importing)
const fontLink =
  "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Playfair+Display:wght@400;700&display=swap";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: teamMember1,
  },
  {
    name: "Jane Smith",
    role: "Creative Director",
    image: teamMember2,
  },
  {
    name: "Emily Johnson",
    role: "Marketing Manager",
    image: teamMember3,
  },
];

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      once: true, // Animation will only happen once
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#00264d] to-[#003366] min-h-screen flex flex-col font-roboto">
      {/* Main Content */}
      <main className="flex-grow container mx-auto my-12 px-6">
        {/* Company Story */}
        <section className="mb-12" data-aos="fade-up">
          <h2
            className="text-4xl font-playfair text-white mb-8"
            data-aos="fade-right"
          >
            Our Story
          </h2>
          <p
            className="text-lg text-gray-200 leading-relaxed font-roboto"
            data-aos="fade-left"
          >
            At Stylio, we believe in delivering quality and style with every
            product we offer. Founded in [Year], our journey began with a simple
            idea: to provide our customers with stylish and affordable products.
            Our team of passionate individuals works tirelessly to ensure that
            each product meets our high standards of quality and design.
          </p>
        </section>

        {/* Our Team */}
        <section className="mb-12" data-aos="fade-up">
          <h2
            className="text-4xl font-playfair text-white mb-8"
            data-aos="fade-right"
          >
            Our Team
          </h2>
          <div className="flex flex-wrap -mx-4">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="w-full md:w-1/3 px-4 mb-6"
                data-aos="zoom-in"
                data-aos-delay={index * 200} // Stagger animations
              >
                <div
                  className="bg-gradient-to-br from-[#003366] to-[#004080] p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:translate-y-[-10px] hover:scale-105 hover:shadow-xl relative overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="absolute inset-0 bg-[#003366] opacity-0 hover:opacity-60 transition-opacity duration-300"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-teal-400 relative z-10"
                    data-aos="fade-in"
                    data-aos-delay={index * 200}
                  />
                  <h3
                    className="text-xl font-playfair text-white mb-2 text-center relative z-10"
                    data-aos="fade-up"
                    data-aos-delay={index * 200 + 100}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-gray-200 text-center relative z-10 font-roboto"
                    data-aos="fade-up"
                    data-aos-delay={index * 200 + 200}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="mb-12" data-aos="fade-up">
          <h2
            className="text-4xl font-playfair text-white mb-8"
            data-aos="fade-right"
          >
            Mission & Vision
          </h2>
          <p
            className="text-lg text-gray-200 leading-relaxed mb-4 font-roboto"
            data-aos="fade-left"
          >
            Our mission is to empower individuals by providing them with
            high-quality, fashionable products that fit their lifestyle. We
            envision becoming a leading brand known for its innovation and
            commitment to excellence.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-12" data-aos="fade-up">
          <h2
            className="text-4xl font-playfair text-white mb-8"
            data-aos="fade-right"
          >
            Contact Us
          </h2>
          <p
            className="text-lg text-gray-200 mb-4 font-roboto"
            data-aos="fade-left"
          >
            If you have any questions or need assistance, feel free to reach out
            to us at:
          </p>
          <p
            className="text-lg text-gray-200 mb-2 font-roboto"
            data-aos="fade-up"
          >
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@stylio.com"
              className="text-blue-300 hover:underline"
            >
              info@stylio.com
            </a>
          </p>
          <p className="text-lg text-gray-200 font-roboto" data-aos="fade-up">
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Stylio. All rights reserved.</p>
        </div>
      </footer>

      {/* Import Google Font in HTML */}
      <style>{`@import url(${fontLink});`}</style>
      {/* Custom CSS for glow effect */}
      <style>{`
        .glow-effect {
          position: relative;
          transition: box-shadow 0.3s ease-in-out;
        }
        .glow-effect:hover {
          box-shadow: 0 0 30px 8px rgba(255, 255, 255, 0.8);
        }
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        .font-roboto {
          font-family: 'Roboto', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
