import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import QuestionList from './components/HomeMainbar/QuestionList';
import AboutUs from './Pages/AboutUs/AboutUs';
import HomeMainbar from './components/HomeMainbar/HomeMainbar'; // ✅ Import

const MainLayout = () => {
  const location = useLocation();
  const showSidebar = location.pathname === '/';

  return (
    <div className="flex">
      {showSidebar && <LeftSidebar />}
      <div className="flex-1 min-h-screen bg-white pt-8 px-6">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomeMainbar /> {/* ✅ Only shows on homepage */}
                <QuestionList />
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainLayout;
