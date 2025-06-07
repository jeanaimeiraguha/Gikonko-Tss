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
  { src: "src/abcd.png" },
  { src: "https://rusumorpcl.com/images/WhatsApp_Image_2020-09-21_at_205406_1.jpeg" },
  { src: "https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/483795602_1163679748882157_6012386503642438116_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeG8f4JQbBAL0rWKzrjQscGaZstZOdcri9lmy1k51yuL2aOy6-ItM1eEmFN_kowDOrsQl7EH1LoqXwdPBjcsLXRr&_nc_ohc=3OPt7HkO6tYQ7kNvwGQVp-8&_nc_oc=AdlAeyI-Dpzv24smPvCvhH-dmf1FR5c4EDtnhBJEokqKZS_aRgrdyOU355R-4xw_xlA&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=TBx9kTiZO6saGsxRVQVaxQ&oh=00_AfMdnooZM8aMlqf72SqNLHu4D95k52kwC-_jlWPVPsREHQ&oe=684A3859" },
  { src: "https://en.igihe.com/IMG/arton4825.jpg?1356359829" },
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
