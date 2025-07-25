import React from "react";
import { motion } from "framer-motion";
import { Users, Briefcase, Lightbulb, HeartHandshake } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <motion.div
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl font-bold text-center text-blue-600 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Our System
        </motion.h1>

        <motion.p
          className="text-gray-700 text-center text-lg mb-10"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
        >
          Welcome to our modern School Management System – crafted to simplify academic, administrative, and student-related processes with innovation and reliability.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Section 1 */}
          <motion.div
            className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="flex items-center gap-4 mb-4">
              <Users className="w-10 h-10 text-blue-500" />
              <h2 className="text-xl font-semibold text-blue-800">Our Mission</h2>
            </div>
            <p className="text-gray-600">
              To empower schools with a digital platform that enhances communication, data management, and learning progress tracking for all stakeholders.
            </p>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-xl transition"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="flex items-center gap-4 mb-4">
              <Briefcase className="w-10 h-10 text-green-500" />
              <h2 className="text-xl font-semibold text-green-800">Our Work</h2>
            </div>
            <p className="text-gray-600">
              From managing students, exams, and results to generating insightful reports, our tools ensure a smooth and efficient academic workflow.
            </p>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            className="bg-yellow-50 p-6 rounded-xl shadow-md hover:shadow-xl transition"
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="flex items-center gap-4 mb-4">
              <Lightbulb className="w-10 h-10 text-yellow-500" />
              <h2 className="text-xl font-semibold text-yellow-800">Our Vision</h2>
            </div>
            <p className="text-gray-600">
              To become the go-to digital backbone for schools across the nation and beyond, fostering smarter, paperless education systems.
            </p>
          </motion.div>

          {/* Section 4 */}
          <motion.div
            className="bg-red-50 p-6 rounded-xl shadow-md hover:shadow-xl transition"
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="flex items-center gap-4 mb-4">
              <HeartHandshake className="w-10 h-10 text-red-500" />
              <h2 className="text-xl font-semibold text-red-800">Why Choose Us?</h2>
            </div>
            <p className="text-gray-600">
              We blend technology and education to bring a seamless, responsive, and student-centered experience to schools and institutions.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
