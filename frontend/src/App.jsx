// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentDashboard from './pages/studentdashboard';
import Dashboard from './pages/dashboard';
import Services from './pages/service';    
import AboutUs from './pages/aboutUs';     
import NotFound from './pages/NotFound';   
import News from './pages/News';
import Innovation from './pages/innovation'; 
import Publication from './pages/publication'; 
import Contact from './pages/contact';
import Login from './pages/login';
import Trades from './pages/trade';
import Trainee from './pages/trainee';
import Students from './pages/students';
import Marks from './pages/marks'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trades" element={<Trades />} />
        <Route path="/trainee" element={<Trainee />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/marks" element={<Marks />} />
      </Routes>
    </Router>
  );
}

export default App;
