import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      <motion.div
        className="text-center bg-gray-950 border border-gray-800 p-10 rounded-3xl shadow-2xl max-w-md"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex justify-center mb-6"
          initial={{ rotate: -10 }}
          animate={{ rotate: 10 }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 1,
          }}
        >
          <AlertTriangle size={60} className="text-yellow-400" />
        </motion.div>

        <h1 className="text-5xl font-bold text-white mb-4">404</h1>
        <p className="text-lg text-gray-300 mb-6">Oops! The page you're looking for  still under construction navigate to home</p>

        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition-transform transform hover:scale-105"
        >
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
