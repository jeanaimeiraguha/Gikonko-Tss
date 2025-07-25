import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

// Image list
const images = [
  {
    src: "https://pbs.twimg.com/media/FvUKNfeXsAEVjFW?format=jpg&name=4096x4096",
  },
  {
    src: "https://rusumorpcl.com/images/WhatsApp_Image_2020-09-21_at_205406_1.jpeg",
  },
  {
    src: "https://en.igihe.com/IMG/arton4825.jpg?1356359829",
  },
];

// Icon map
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

// ✅ Compact Navbar
const Navbar = () => {
  const location = useLocation();
  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/aboutus" },
    { label: "OUR SERVICES", path: "/services" },
    { label: "NEWS", path: "/news" },
    { label: "INNOVATION", path: "/innovation" },
    { label: "PUBLICATION", path: "/publication" },
    { label: "ADMINISTRATIONS", path: "/login" },
    { label: "CONTACT US", path: "/contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#002244",
        color: "#fff",
        padding: "0.5rem 1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          fontSize: "1.2rem",
          color: "#ffd700",
          fontWeight: "bold",
          padding: "0.3rem 0.5rem",
        }}
      >
        GIKONKO TSS
      </div>
      <ul
        style={{
          display: "flex",
          gap: "0.8rem",
          listStyle: "none",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {navItems.map(({ label, path }) => {
          const isActive = location.pathname === path;
          const icon = iconMap[label];
          return (
            <li
              key={label}
              style={{
                backgroundColor: isActive ? "#7c3aed" : "transparent",
                borderRadius: "4px",
                transition: "0.3s",
              }}
            >
              <Link
                to={path}
                style={{
                  color: isActive ? "#fff" : "#ccc",
                  textDecoration: "none",
                  padding: "0.3rem 0.4rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontWeight: 500,
                  fontSize: "0.85rem",
                }}
              >
                {React.cloneElement(icon, { size: 16 })} {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

// Welcome message
const WelcomeMessage = () => (
  <div
    style={{
      marginTop: "62px",
      backgroundColor: "#003366",
      color: "#fff",
      padding: "1rem",
      textAlign: "center",
      fontSize: "1.2rem",
      fontWeight: "bold",
      letterSpacing: "1px",
    }}
  >
    🎓 Welcome to GIKONKO TECHNICAL SECONDARY SCHOOL!
  </div>
);

// Hero Section (Image Carousel)
const ScrollingImagesBackground = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", height: "85vh", overflow: "hidden" }}>
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.src}
          alt=""
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
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#fff",
          textAlign: "center",
          zIndex: 10,
          padding: "1rem 2rem",
        }}
      >
        <h1 style={{ fontSize: "2.2rem", fontWeight: "bold" }}>
          Shaping Future Technicians
        </h1>
        <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
          Empowering Youth through Practical Skills & Innovation 💡
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#fff",
          animation: "bounce 2s infinite",
        }}
      >
        ⬇️
      </div>
    </div>
  );
};

// CTA Section
const CallToAction = () => (
  <section
    style={{
      backgroundColor: "#f8f9fa",
      padding: "3rem 2rem",
      textAlign: "center",
    }}
  >
    <h2
      style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#004080" }}
    >
      Ready to explore our programs?
    </h2>
    <p style={{ fontSize: "1rem", marginBottom: "1.5rem" }}>
      Discover our departments, innovation lab, and exam success stories.
    </p>
    <Link
      to="/aboutus"
      style={{
        backgroundColor: "#7c3aed",
        color: "#fff",
        padding: "0.7rem 1.4rem",
        borderRadius: "5px",
        textDecoration: "none",
        fontWeight: "600",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        fontSize: "0.95rem",
      }}
    >
      Learn More
    </Link>
  </section>
);

// Footer
const Footer = () => (
  <footer
    style={{
      backgroundColor: "#222",
      color: "#ccc",
      padding: "2rem 1rem",
      textAlign: "center",
      fontSize: "0.9rem",
    }}
  >
    <p>&copy; {new Date().getFullYear()} GIKONKO TSS. All rights reserved.</p>
    <div style={{ marginTop: "0.5rem" }}>
      {["Privacy Policy", "Terms", "Support"].map((item) => (
        <span
          key={item}
          style={{
            margin: "0 1rem",
            cursor: "pointer",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#7c3aed")}
          onMouseLeave={(e) => (e.target.style.color = "#ccc")}
        >
          {item}
        </span>
      ))}
    </div>
  </footer>
);

// Page Layout
const DashboardPage = () => (
  <>
    <Navbar />
    <WelcomeMessage />
    <ScrollingImagesBackground />
    <CallToAction />
    <Footer />
  </>
);

export default DashboardPage;
