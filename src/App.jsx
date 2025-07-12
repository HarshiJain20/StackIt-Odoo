import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import MainLayout from './MainLayout';
import AboutUs from './Pages/AboutUs/AboutUs';
import AskQuestion from './Pages/AskQuestion/AskQuestion';
import Auth from './Pages/Auth/Auth';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/*" element={<MainLayout />} />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/ask" element={<AskQuestion />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default App;
