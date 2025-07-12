import React from 'react';
import { FaQuestionCircle, FaTags, FaUsers } from 'react-icons/fa';

const LeftSidebar = () => {
  return (
    <aside className="w-44 h-[calc(100vh-4rem)] fixed top-16.5 left-0 bg-white border-r shadow-sm px-4 py-6">
      <div className="text-black-500 uppercase text-sm font-semibold mb-4">Public</div>
      <nav className="flex flex-col gap-2 text-black-700">
        <a
          href="/questions"
          className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-100 transition"
        >
          <FaQuestionCircle />
          Questions
        </a>
        <a
          href="/tags"
          className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-100 transition"
        >
          <FaTags />
          Tags
        </a>
        <a
          href="/users"
          className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-100 transition"
        >
          <FaUsers />
          Users
        </a>
      </nav>
    </aside>
  );
};

export default LeftSidebar;