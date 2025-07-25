import React from 'react';
import { FaChalkboardTeacher, FaUserGraduate, FaSchool } from 'react-icons/fa';
import { AiFillInfoCircle } from 'react-icons/ai';

const AboutUs = () => {
  const iconStyle = {
    fontSize: '3rem',
    marginRight: '1rem',
    transition: 'transform 0.3s ease-in-out',
    color: '#7c3aed',
  };

  const cardStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    borderRadius: '0.75rem',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s ease-in-out',
  };

  const cardHover = {
    transform: 'scale(1.02)',
  };

  const headingStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#343a40',
  };

  const textStyle = {
    fontSize: '1rem',
    color: '#495057',
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="text-center mb-5">
        <h1 style={{ fontWeight: 'bold', color: '#7c3aed' }}>
          <AiFillInfoCircle style={{ verticalAlign: 'middle' }} /> About Us
        </h1>
        <p style={{ color: '#6c757d' }}>
          Learn more about GIKONKO TSS, our mission, vision, and goals.
        </p>
      </div>

      <div
        className="card mb-4"
        style={cardStyle}
        onMouseEnter={(e) => (e.currentTarget.style.transform = cardHover.transform)}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <FaSchool style={iconStyle} />
        <div>
          <h3 style={headingStyle}>Our School</h3>
          <p style={textStyle}>
            GIKONKO TSS is a technical secondary school focused on excellence in vocational and technical education. We empower students with practical skills for a better future.
          </p>
        </div>
      </div>

      <div
        className="card mb-4"
        style={cardStyle}
        onMouseEnter={(e) => (e.currentTarget.style.transform = cardHover.transform)}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <FaChalkboardTeacher style={iconStyle} />
        <div>
          <h3 style={headingStyle}>Our Mission</h3>
          <p style={textStyle}>
            To deliver high-quality technical education that prepares students for national and international job markets while fostering innovation, discipline, and responsibility.
          </p>
        </div>
      </div>

      <div
        className="card mb-4"
        style={cardStyle}
        onMouseEnter={(e) => (e.currentTarget.style.transform = cardHover.transform)}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <FaUserGraduate style={iconStyle} />
        <div>
          <h3 style={headingStyle}>Our Vision</h3>
          <p style={textStyle}>
            To become a center of excellence in technical education, shaping the future of Rwanda through skill-based learning and community development.
          </p>
        </div>
      </div>

      <footer className="text-center mt-5 pt-3 border-top" style={{ color: '#6c757d' }}>
        © {new Date().getFullYear()} GIKONKO TSS. All rights reserved.
      </footer>
    </div>
  );
};

export default AboutUs;
