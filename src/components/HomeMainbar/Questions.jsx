import React from 'react';

const Questions = ({ question }) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 mb-6 hover:shadow-lg transition-all duration-200">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900 mb-2">{question.title}</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
        {question.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {question.tags?.length > 0 ? (
          question.tags.map((tag, idx) => (
            <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))
        ) : (
          <span className="text-xs text-gray-400">No tags</span>
        )}
      </div>

      {/* Footer: User & Answer Count */}
      <div className="flex justify-between text-sm text-gray-500 mt-4">
        <span>👤 {question.username}</span>
        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
          💬 {question.answers} Answers
        </span>
      </div>
    </div>
  );
};

export default Questions;
