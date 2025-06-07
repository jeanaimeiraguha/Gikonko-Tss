import React, { useEffect, useState } from "react"; 
import { Link, useLocation } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineTool,
  AiOutlineUsergroupAdd,
  AiOutlineAppstore,
  AiOutlineFileDone,
  AiOutlineBarChart,
  AiOutlineUser,
  AiOutlineInfoCircle,
  AiFillRead,
  AiOutlinePhone,
  AiOutlineBulb,
  AiFillNotification,
} from "react-icons/ai";
import { GiTrade } from "react-icons/gi";

// Image list
const images = [
  { src: "https://pbs.twimg.com/media/FvUKNfeXsAEVjFW?format=jpg&name=4096x4096" },
  { src: "src/a.jpg" },
  { src: "src/acc2.jpg" },
  { src: "src/abc.jpg" },
  { src: "https://images.unsplash.com/photo-1533713451883-ec4b9fc3ecb9?auto=format&fit=crop&w=800&q=80" },
  { src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80" },
  { src: "https://pbs.twimg.com/media/FjxeB9rX0AEEkNP?format=jpg&name=large" },
];

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

  // Smaller icon size
  const iconSize = 18;

  return (
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
        fontSize: "1rem", // reduced from 1.3rem
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
          gap: "1.2rem", // reduced gap slightly
          listStyle: "none",
          flexWrap: "wrap",
          justifyContent: "flex-end",
          flexGrow: 2,
        }}
      >
        {navItems.map(({ label, path }) => {
          const isActive = location.pathname === path;

          // Get original icon from iconMap and clone with smaller size
          const icon = iconMap[label];
          const smallIcon = icon ? React.cloneElement(icon, { size: iconSize }) : null;

          return (
            <li
              key={label}
              style={{
                backgroundColor: isActive ? "#7c3aed" : "transparent",
                padding: "0.2rem 0.4rem", // reduced padding a bit
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
                  gap: "0.3rem", // reduced gap
                  fontSize: "0.85rem", // smaller nav text
                }}
              >
                {smallIcon} {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

// Scrolling images component
const ScrollingImagesBackground = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div style={{ position: "relative", height: "calc(100vh - 132px)", overflow: "hidden" }}>
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.src}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: idx === current ? 1 : 0,
            transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
            transform: idx === current ? "scale(1.05)" : "scale(1)",
            filter: "brightness(0.7)",
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 2,
        }}
      />
    </div>
  );
};

// Welcome message
const WelcomeMessage = () => (
  <div
    style={{
      marginTop: "72px",
      height: "60px",
      backgroundColor: "rgba(0, 64, 128, 0.85)",
      color: "#fff",
      fontSize: "1.5rem",
      fontWeight: "600",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 11,
    }}
  >
    Welcome to GIKONKO TECHNICAL SECONDARY SCHOOL!
  </div>
);

// Footer component
const Footer = () => (
  <footer
    style={{
      backgroundColor: "rgba(0,0,0,0.75)",
      color: "#ccc",
      padding: "1.5rem 2rem",
      textAlign: "center",
    }}
  >
    <div>
      <p>&copy; {new Date().getFullYear()} GIKONKO TSS. All rights reserved.</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        {["Privacy Policy", "Terms of Service", "Contact Us"].map((text) => (
          <span
            key={text}
            style={{ cursor: "pointer" }}
            onMouseEnter={(e) => (e.target.style.color = "#7c3aed")}
            onMouseLeave={(e) => (e.target.style.color = "#ccc")}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  </footer>
);

// Page wrapper
const DashboardPage = () => (
  <>
    <Navbar />
    <WelcomeMessage />
    <ScrollingImagesBackground />
    <Footer />
  </>
);

export default DashboardPage;
