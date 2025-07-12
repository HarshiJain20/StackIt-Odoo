import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user')); // Get logged-in user

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/auth');
  };

  const handleAuth = () => {
    navigate('/auth');
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b shadow-sm z-50">
      <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="logo text-2xl font-bold">
          <span className="text-blue-600">Stack</span>
          <span className="text-gray-800">-It</span>
        </div>

        {/* Search Bar */}
        <div className="search-bar flex flex-row flex-1 items-center gap-1 mx-6">
          <FaSearch />
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-1.5 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Navigation Links & Auth */}
        <div className="nav-links flex items-center gap-6">
          <Link to="/" className="text-gray-700 font-medium hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-700 font-medium hover:text-blue-600">About Us</Link>
          <Link to="/contact" className="text-gray-700 font-medium hover:text-blue-600">Contact Us</Link>

          {user ? (
            <>
              <div className="flex items-center gap-2 text-gray-700">
                <FaUserCircle className="text-2xl text-blue-600" />
                <span className="text-sm font-medium capitalize">{user.role}</span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-1.5 rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={handleAuth}
              className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-800 transition"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
