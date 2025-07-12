import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Optional for navigation

const HomeMainbar = () => {
  const [filter, setFilter] = useState('Newest');
  const navigate = useNavigate(); // If you're using React Router

  const handleAskQuestion = () => {
    // Example route: /ask or /add-question
    navigate('/ask'); // Optional; you can change this
  };

  return (
    <div className="pt-16 ml-44 px-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Top Questions</h1>

        <button
          onClick={handleAskQuestion}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Ask Question
        </button>
      </div>
    </div>
  );
};

export default HomeMainbar;