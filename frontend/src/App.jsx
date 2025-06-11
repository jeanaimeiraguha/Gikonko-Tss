
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Services from './pages/Service';    
import AboutUs from './pages/AboutUs';     
import NotFound from './pages/NotFound';   
// import News from './News'
import News from './pages/News';
import Innovation from './pages/Innovation'; 
import Publication from './pages/Publication'; 
import Contact from './pages/Contact';
import Login from './pages/Login';
// import Trainee from './component/trainee'
// import Trade from './pages/trade'
import Trades from './pages/trade'
import Trainee from './pages/trainee'
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
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trades" element={<Trades/>} />
        <Route path="/trainee" element={<Trainee/>} />
      </Routes>
    </Router>
  );
}

export default App;
