import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Dummy authentication check
const isAuthenticated = () => {
  return localStorage.getItem('user'); // Adjust this based on your auth logic
};

const HomeMainbar = () => {
  const [filter, setFilter] = useState('Newest');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleAskQuestion = () => {
    if (isAuthenticated()) {
      navigate('/ask');
    } else {
      setShowModal(true);
    }
  };

  const handleLoginRedirect = () => {
    setShowModal(false);
    navigate('/auth'); // Redirect to login/signup
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

      {/* Login Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Login Required
            </h2>
            <p className="text-gray-600 mb-6">
              You must be logged in to ask a question.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded bg-gray-300 text-gray-800 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleLoginRedirect}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Login Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeMainbar;
