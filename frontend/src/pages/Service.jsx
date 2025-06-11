// App.jsx (or Services.jsx or main component file)
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaLaptopCode,
  FaBolt,
  FaCalculator,
  FaBuilding,
  FaTools,
} from "react-icons/fa";
import {
  GiScissors,
  GiHairStrands,
  GiBrickWall
} from "react-icons/gi";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineHome
} from "react-icons/ai";

// Navbar Component
const Navbar = () => {
  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/aboutus" },
    { label: "OUR SERVICES", path: "/services" },
    { label: "NEWS", path: "/news" },
    { label: "INNOVATION", path: "/innovation" },
    { label: "PUBLICATION", path: "/publication" },
    { label: "ADMINISTRATIONS", path: "/administrations" },
    { label: "CONTACT US", path: "/contactus" },
  ];

  const location = useLocation();

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#004080",
          zIndex: 999,
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#fff",
          fontWeight: "700",
          fontSize: "1rem",
          boxShadow: "0 2px 10px rgba(0,0,0,0.6)",
          flexWrap: "wrap",
        }}
      >
        <div style={{ fontSize: "1.5rem", color: "yellow", flexGrow: 1 }}>
          GIKONKO TSS
        </div>

        <ul
          style={{
            display: "flex",
            gap: "1.2rem",
            listStyle: "none",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            flexGrow: 2,
            margin: 0,
            padding: 0,
          }}
        >
          {navItems.map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <li
                key={label}
                style={{
                  backgroundColor: isActive ? "#7c3aed" : "transparent",
                  padding: "0.2rem 0.4rem",
                  borderRadius: "6px",
                }}
              >
                <Link
                  to={path}
                  style={{
                    color: isActive ? "#fff" : "#ddd",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    fontSize: "0.85rem",
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div
        style={{
          position: "fixed",
          top: "64px",
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "#004080",
          zIndex: -1,
        }}
      />
    </>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "gray",
        color: "#ccc",
        padding: "1.5rem 2rem",
        textAlign: "center",
        marginTop: "3rem",
      }}
    >
      <p>&copy; {new Date().getFullYear()} GIKONKO TSS. All rights reserved.</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "0.5rem",
        }}
      >
        {["Privacy Policy", "Terms of Service", "Contact Us"].map((text) => (
          <span
            key={text}
            style={{ cursor: "pointer", color: "#ccc" }}
            onMouseEnter={(e) => (e.target.style.color = "#7c3aed")}
            onMouseLeave={(e) => (e.target.style.color = "#ccc")}
          >
            {text}
          </span>
        ))}
      </div>
    </footer>
  );
};

// Services Section
const services = [
  {
    title: "Software Development",
    icon: <FaLaptopCode size={40} className="text-blue-500" />,
    description: "Web, mobile, and desktop application development.",
  },
  {
    title: "Electrical Technology",
    icon: <FaBolt size={40} className="text-yellow-500" />,
    description: "Installation and maintenance of electrical systems.",
  },
  {
    title: "Accounting",
    icon: <FaCalculator size={40} className="text-green-500" />,
    description: "Financial record keeping and business reporting.",
  },
  {
    title: "Building Construction",
    icon: <FaBuilding size={40} className="text-gray-500" />,
    description: "Design, planning, and building structures.",
  },
  {
    title: "Tailoring",
    icon: <GiScissors size={40} className="text-purple-500" />,
    description: "Garment creation and sewing skills training.",
  },
  {
    title: "Hairdressing",
    icon: <GiHairStrands size={40} className="text-pink-500" />,
    description: "Hair cutting, styling, and beauty treatments.",
  },
  {
    title: "Masonry",
    icon: <GiBrickWall size={40} className="text-red-500" />,
    description: "Bricklaying, plastering, and wall construction.",
  },
];

const Services = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "100px" }} className="py-16 bg-gray-100" id="services">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
