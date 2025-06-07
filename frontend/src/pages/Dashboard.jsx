import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [summary, setSummary] = useState({
    trainees: 0,
    modules: 0,
    trades: 0,
    marks: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/dashboard/summary')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch summary');
        return res.json();
      })
      .then(data => {
        setSummary(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading dashboard...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">Error: {error}</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Dashboard Summary</h1>
          <p className="text-gray-600 mt-2 max-w-xl">
            Overview of the key statistics of the system including trainees, modules, trades, and marks.
          </p>
        </div>

        {/* 🔗 Link to Services Page */}
        <nav className="mt-4 sm:mt-0">
          <Link
            to="/services"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Our Services
          </Link>
        </nav>
      </header>

      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SummaryCard title="Trainees" count={summary.trainees} color="bg-green-600" />
          <SummaryCard title="Modules" count={summary.modules} color="bg-blue-600" />
          <SummaryCard title="Trades" count={summary.trades} color="bg-yellow-500" />
          <SummaryCard title="Marks" count={summary.marks} color="bg-purple-600" />
        </div>
      </main>
    </div>
  );
}

function SummaryCard({ title, count, color }) {
  return (
    <div
      className={`${color} rounded-lg shadow-md p-6 flex flex-col justify-center items-center text-white`}
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-5xl font-bold">{count}</p>
    </div>
  );
}
