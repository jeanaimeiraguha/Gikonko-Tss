import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineBook, AiOutlineTool } from "react-icons/ai";

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

  const iconMap = {
    HOME: <AiOutlineTool />,
    "ABOUT US": <AiOutlineTool />,
    "OUR SERVICES": <AiOutlineTool />,
    NEWS: <AiOutlineTool />,
    INNOVATION: <AiOutlineTool />,
    PUBLICATION: <AiOutlineTool />,
    ADMINISTRATIONS: <AiOutlineTool />,
    "CONTACT US": <AiOutlineTool />,
  };

  const location = useLocation();
  const iconSize = 18;

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

// Sample publications data
const publications = [
  {
    title: "Annual Research Journal 2024",
    description: "Compilation of scientific research papers by GIKONKO TSS students and faculty.",
    link: "#",
  },
  {
    title: "Student Art & Design Magazine",
    description: "Showcasing creative art and design projects from our talented students.",
    link: "#",
  },
  {
    title: "Technical Innovations Report",
    description: "Overview of technological advancements developed at GIKONKO TSS.",
    link: "#",
  },
  {
    title: "Environmental Studies Paper",
    description: "Research on sustainable practices and environment-friendly initiatives.",
    link: "#",
  },
];

const Publication = () => {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "100vh",
          paddingTop: "5rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          paddingBottom: "4rem",
          color: "white",
          backgroundColor: "#0c1123",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "1200px" }}>
          

          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "2rem",
              textAlign: "center",
              color: "#7c3aed",
            }}
          >
            Publications
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {publications.map(({ title, description, link }, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#1a1f36",
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  boxShadow:
                    "0 10px 15px -3px rgba(124, 58, 237, 0.4), 0 4px 6px -2px rgba(124, 58, 237, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 25px 50px -12px rgba(124, 58, 237, 0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 15px -3px rgba(124, 58, 237, 0.4), 0 4px 6px -2px rgba(124, 58, 237, 0.1)";
                }}
                onClick={() => window.open(link, "_blank")}
              >
                <div style={{ marginBottom: "1rem", color: "#7c3aed" }}>
                  <AiOutlineBook size={40} />
                </div>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>{title}</h2>
                <p style={{ fontSize: "1rem", color: "#bbb" }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Publication;
