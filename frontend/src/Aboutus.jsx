import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBullseye, FaEye, FaHeart, FaTools } from "react-icons/fa";

const AboutUs = () => {
  const navigate = useNavigate();

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
        <h2 className="text-4xl font-bold text-center mb-10 tracking-wide text-yellow-400">
          About GIKONKO Technical Secondary School
        </h2>

        <p>
          Gikonko TSS is a Technical Secondary School located in the south of Rwanda, in
          Gisagara District, Gikonko Sector.
        </p>

        <div className="space-y-12 text-lg leading-relaxed mt-8">
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
                Our programs focus on technical skills in various fields, including
                Software Development, Building Construction, Electrical Technology, and
                Professional Accounting. Level 1 programs also include Tailoring, Hair
                Dressing, and Masonry. We are committed to hands-on training and real-world
                preparation to ensure that every graduate is ready for the job market or
                entrepreneurship.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
