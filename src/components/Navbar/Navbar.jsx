import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-white border-b shadow-sm">
  <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
    {/* Logo */}
    <div className="logo text-2xl font-bold">
      <span className="text-blue-600">Stack</span>
      <span className="text-gray-800">-It</span>
    </div>

    {/* Search */}
    <div className="search-bar flex flex-row flex-1 items-center gap-1 mx-6">
        <FaSearch/>
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-3 py-1.5 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
      />
      
    </div>

    {/* Navigation Links */}
    <div className="nav-links flex items-center gap-6">
      <a href="#" className="text-gray-700 font-medium hover:text-blue-600">Home</a>
      <a href="#" className="text-gray-700 font-medium hover:text-blue-600">About Us</a>
      <a href="#" className="text-gray-700 font-medium hover:text-blue-600">Contact Us</a>
      <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-800 transition">
        Login
      </button>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
