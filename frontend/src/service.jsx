import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserGraduate, FaChalkboardTeacher, FaCalendarAlt, FaClipboardList, FaBook, FaMoneyCheckAlt, FaCheckCircle } from 'react-icons/fa';

const servicesData = [
  {
    title: 'Student Enrollment',
    icon: <FaUserGraduate size={40} className="text-blue-400" />,
    description: 'Manage admissions, registrations, and student profiles effortlessly.',
  },
  {
    title: 'Teacher Management',
    icon: <FaChalkboardTeacher size={40} className="text-green-400" />,
    description: 'Maintain teacher records, schedules, and assignments.',
  },
  {
    title: 'Class Timetabling',
    icon: <FaCalendarAlt size={40} className="text-yellow-400" />,
    description: 'Generate dynamic class schedules with ease.',
  },
  {
    title: 'Exam & Result Tracking',
    icon: <FaClipboardList size={40} className="text-red-400" />,
    description: 'Organize exams and publish results securely.',
  },
  {
    title: 'Library System',
    icon: <FaBook size={40} className="text-purple-400" />,
    description: 'Track book inventory and issue/return logs.',
  },
  {
    title: 'Fee Payment & Invoicing',
    icon: <FaMoneyCheckAlt size={40} className="text-pink-400" />,
    description: 'Issue invoices and monitor student payments.',
  },
  {
    title: 'Attendance Monitoring',
    icon: <FaCheckCircle size={40} className="text-teal-400" />,
    description: 'Track student attendance in real-time.',
  },
];

const Services = () => {
  return (
    <div className="bg-[#0c1123] min-h-screen px-6 py-12 text-white">
      <div className="mb-10">
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg transition"
        >
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-300">
        Our School Management Features
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map(({ title, icon, description }) => (
          <div
            key={title}
            className="group bg-[#1a1f36] rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-blue-700 transition-transform transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
          >
            <div className="flex items-center justify-center mb-4">
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-center text-blue-400 group-hover:text-white">
              {title}
            </h3>
            <p className="text-sm text-center mt-2 text-gray-300 group-hover:text-gray-200">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
