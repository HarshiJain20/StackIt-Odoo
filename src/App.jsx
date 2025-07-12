import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import QuestionList from './components/HomeMainbar/QuestionList';
import AboutUs from './Pages/AboutUs/AboutUs';

const MainLayout = () => {
  const location = useLocation();

  const showSidebar = location.pathname === '/';

  return (
    <div className="flex">
      {showSidebar && <LeftSidebar />}
      <div className="flex-1 p-6 min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<QuestionList />} />
          <Route path="/about" element={<AboutUs />} />
          
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <MainLayout />
    </Router>
  );
};

export default App;