import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
// import Services from './pages/service';
// import AboutUs from './AboutUs'; // 🔥 Fixed: match file name exactly
import AboutUs from './pages/aboutus'
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<AboutUs />} /> 🔥 Also fixed here
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
