import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import QuestionList from './components/HomeMainbar/QuestionList';
import HomeMainbar from './components/HomeMainbar/HomeMainbar';
import Tags from './Pages/Tags/Tags';

const MainLayout = () => {
  const location = useLocation();
  const sidebarRoutes = ['/', '/questions', '/tags', '/users'];
  const showSidebar = sidebarRoutes.includes(location.pathname);

  return (
    <div className="flex">
      {showSidebar && <LeftSidebar />}
      
      <div className={`flex-1 min-h-screen bg-white px-6 pt-8 ${showSidebar ? 'ml-3' : ''}`}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomeMainbar />
                <QuestionList />
              </>
            }
          />
          <Route path="/questions" element={<h1 className="text-xl">Questions Page</h1>} />
          <Route path="/tags" element={<Tags/>} />
          <Route path="/users" element={<h1 className="text-xl">Users Page</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default MainLayout;
