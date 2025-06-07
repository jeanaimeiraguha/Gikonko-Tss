import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBullseye, FaEye, FaHeart, FaTools } from "react-icons/fa";

const AboutUs = () => {
  const navigate = useNavigate();

  // State to hold uploaded logo image URL
  const [logoUrl, setLogoUrl] = useState(null);

  // Handle file input change
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLogoUrl(url);
    }
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white flex flex-col items-center p-6 md:p-12 pt-16 relative">
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-10">
        <button
          onClick={() => navigate("/")}
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-4 py-2 rounded-full shadow transition duration-300"
        >
          ← Back to Home
        </button>
      </div>

      <div className="max-w-5xl w-full rounded-lg bg-gray-900 bg-opacity-80 backdrop-blur-lg shadow-2xl p-8 mt-12">
        {/* Logo Upload */}
        <div className="flex flex-col items-center mb-8">
          <label
            htmlFor="logo-upload"
            className="cursor-pointer p-2 border-2 border-dashed border-yellow-400 rounded-md hover:bg-yellow-400 hover:text-gray-900 transition flex flex-col items-center"
            title="Click to upload school logo"
          >
            {logoUrl ? (
              <img
                src={logoUrl}
                alt="School Logo"
                className="w-40 h-40 object-contain rounded-md shadow-lg"
              />
            ) : (
              <div className="text-yellow-400 flex flex-col items-center space-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v-4a4 4 0 014-4h8a4 4 0 014 4v4M12 12v6m0 0h.01"
                  />
                </svg>
                <span className="font-semibold text-lg">Upload School Logo</span>
              </div>
            )}
          </label>
          <input
            type="file"
            id="logo-upload"
            accept="image/*"
            onChange={handleLogoChange}
            className="hidden"
          />
        </div>

        <h2 className="text-4xl font-bold text-center mb-10 tracking-wide text-yellow-400">
          About GIKONKO Technical Secondary School
        </h2>

        <div className="space-y-12 text-lg leading-relaxed">
          {/* Mission */}
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

          {/* Vision */}
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

          {/* Core Values */}
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

          {/* What We Offer */}
          <section className="flex items-start space-x-6 group hover:bg-yellow-700/20 p-6 rounded-lg transition duration-300 cursor-default">
            <FaTools className="text-yellow-400 text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
            <div>
              <h3 className="text-2xl font-semibold text-yellow-300 mb-2">What We Offer</h3>
              <p>
                Our programs focus on technical skills in various fields, including ICT,
                electricity, construction, and mechanical engineering. We are committed to
                hands-on training and real-world preparation to ensure that every graduate
                is ready for the job market or entrepreneurship.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
