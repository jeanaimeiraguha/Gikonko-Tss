import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBullseye, FaEye, FaHeart, FaTools } from "react-icons/fa";
import {
  AiFillHome,
  AiOutlineTool,
  AiOutlineUsergroupAdd,
  AiOutlineInfoCircle,
  AiFillRead,
  AiOutlinePhone,
  AiOutlineBulb,
  AiFillNotification,
} from "react-icons/ai";

// Icons mapped to menu items (must match labels in navItems exactly)
const iconMap = {
  HOME: <AiFillHome />,
  "ABOUT US": <AiOutlineInfoCircle />,
  "OUR SERVICES": <AiOutlineTool />,
  NEWS: <AiFillNotification />,
  INNOVATION: <AiOutlineBulb />,
  PUBLICATION: <AiFillRead />,
  ADMINISTRATIONS: <AiOutlineUsergroupAdd />,
  "CONTACT US": <AiOutlinePhone />,
};

// Navbar component
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

  const iconSize = 18;

  // Wrap the navbar and page content in a background div that stretches to the footer
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

            const icon = iconMap[label];
            const smallIcon = icon ? React.cloneElement(icon, { size: iconSize }) : null;

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
                  {smallIcon} {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* Add a background overlay that stretches from below the navbar to the footer */}
      <div
        style={{
          position: "fixed",
          top: "64px", // adjust if navbar height changes
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

// Footer component
const Footer = () => {
  return (
    <footer
      style={{
        position: "relative",
        backgroundColor: "gray",
        color: "#ccc",
        padding: "1.5rem 2rem",
        textAlign: "center",
        marginTop: "3rem",
      }}
    >
      <p>&copy; {new Date().getFullYear()} GIKONKO TSS. All rights reserved.</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "0.5rem" }}>
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

// Logos (replace with your actual logo imports or URLs)
const logos = [
  "src/logo.png", // local logo, adjust if needed
];

// AboutUs component (page content)
const AboutUs = () => {
  const logo = logos[0];

  return (
    <section
      className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white flex flex-col items-center p-6 md:p-12 pt-16 relative"
      style={{ paddingTop: "5rem" }}
    >
      <div className="flex justify-center mb-8">
        <div className="w-48 h-48 bg-yellow-500 bg-opacity-20 rounded-lg flex items-center justify-center shadow-lg">
          <img
            src={logo}
            alt="School Logo"
            className="max-w-40 max-h-40 object-contain rounded-md"
            style={{ maxWidth: "160px", maxHeight: "160px" }}
          />
        </div>
      </div>

      <h2 className="text-4xl font-bold text-center mb-10 tracking-wide text-yellow-400">
        About GIKONKO Technical Secondary School
      </h2>
      <p className="text-center max-w-xl mb-10">
        Gikonko TSS is a Technical Secondary School located in the South of Rwanda, in
        Gisagara District, Gikonko Sector.
      </p>

      <div className="space-y-12 text-lg leading-relaxed max-w-4xl">
        <section className="flex items-start space-x-6 group hover:bg-yellow-700/20 p-6 rounded-lg transition duration-300 cursor-default">
          <FaBullseye className="text-yellow-400 text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
          <div>
            <h3 className="text-2xl font-semibold text-yellow-300 mb-2">Our Mission</h3>
            <p>
              To provide high-quality technical and vocational education that equips
              students with the knowledge, skills, and values necessary for productive
              employment, entrepreneurship, and lifelong learning.
            </p>
          </div>
        </section>

        <section className="flex items-start space-x-6 group hover:bg-yellow-700/20 p-6 rounded-lg transition duration-300 cursor-default">
          <FaEye className="text-yellow-400 text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
          <div>
            <h3 className="text-2xl font-semibold text-yellow-300 mb-2">Our Vision</h3>
            <p>
              To become a leading institution in technical and vocational education,
              fostering innovation, excellence, and sustainable development in Rwanda
              and beyond.
            </p>
          </div>
        </section>

        <section className="flex items-start space-x-6 group hover:bg-yellow-700/20 p-6 rounded-lg transition duration-300 cursor-default">
          <FaHeart className="text-yellow-400 text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
          <div>
            <h3 className="text-2xl font-semibold text-yellow-300 mb-2">Core Values</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Integrity and accountability</li>
              <li>Innovation and creativity</li>
              <li>Excellence in teaching and learning</li>
              <li>Inclusivity and collaboration</li>
              <li>Respect for people and diversity</li>
              <li>Community engagement and service</li>
            </ul>
          </div>
        </section>

        <section className="flex items-start space-x-6 group hover:bg-yellow-700/20 p-6 rounded-lg transition duration-300 cursor-default">
          <FaTools className="text-yellow-400 text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
          <div>
            <h3 className="text-2xl font-semibold text-yellow-300 mb-2">What We Offer</h3>
            <p>
              Our programs focus on technical skills in various fields, including Software
              Development, Building Construction, Electrical Technology, Professional
              Accounting (Level 1), Tailoring, Hairdressing, and Masonry.
              We are committed to hands-on training and real-world preparation to ensure
              every graduate is ready for the job market or entrepreneurship.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

// Main Aboutus component combining Navbar, AboutUs page content, and Footer
const Aboutus = () => {
  return (
    <>
      <Navbar />
      <AboutUs />
      <Footer />
    </>
  );
};

export default Aboutus;
