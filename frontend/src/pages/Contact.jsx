import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";

// Navbar Component (same style as before)
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

// Footer Component (same style as before)
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

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // success or error message

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    // You can replace this with your API call or email sending logic
    console.log("Form submitted:", form);

    setStatus({ type: "success", message: "Message sent successfully!" });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

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
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <div style={{ width: "100%", maxWidth: "700px" }}>
       

          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "2rem",
              textAlign: "center",
              color: "#7c3aed",
            }}
          >
            Contact Us
          </h1>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              backgroundColor: "#1a1f36",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 10px 15px rgba(124, 58, 237, 0.4)",
            }}
          >
            <label style={{ fontWeight: "600" }}>
              Name:
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.3rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  outline: "none",
                }}
                required
              />
            </label>

            <label style={{ fontWeight: "600" }}>
              Email:
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.3rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  outline: "none",
                }}
                required
              />
            </label>

            <label style={{ fontWeight: "600" }}>
              Subject:
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject of your message"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.3rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  outline: "none",
                }}
                required
              />
            </label>

            <label style={{ fontWeight: "600" }}>
              Message:
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={6}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.3rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  outline: "none",
                  resize: "vertical",
                }}
                required
              />
            </label>

            <button
              type="submit"
              style={{
                backgroundColor: "#7c3aed",
                color: "white",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                border: "none",
                fontWeight: "700",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#5b21b6")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#7c3aed")}
            >
              Send Message
            </button>

            {status && (
              <p
                style={{
                  color: status.type === "success" ? "#4ade80" : "#f87171",
                  fontWeight: "600",
                  marginTop: "0.5rem",
                  textAlign: "center",
                }}
              >
                {status.message}
              </p>
            )}
          </form>

          <section
            style={{
              marginTop: "3rem",
              backgroundColor: "#1a1f36",
              padding: "1.5rem",
              borderRadius: "1rem",
              boxShadow: "0 10px 15px rgba(124, 58, 237, 0.3)",
              color: "#ccc",
            }}
          >
            <h2 style={{ color: "#7c3aed", marginBottom: "1rem" }}>
              Contact Information
            </h2>
            <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <AiOutlineHome size={20} /> GIKONKO Technical Secondary School, Kigali, Rwanda
            </p>
            <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <AiOutlinePhone size={20} /> +250 788 123 456
            </p>
            <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <AiOutlineMail size={20} /> info@gikonkotss.rw
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
