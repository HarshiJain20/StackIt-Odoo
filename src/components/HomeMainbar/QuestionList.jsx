import React from 'react';
import Questions from './Questions';
import { questions } from './data';

const QuestionList = () => {
  return (
    <div className="pt-6 ml-44 max-w-5xl mx-auto mb-10">

      {questions.map((q) => (
        <div key={q.id} className="cursor-pointer">
          <Questions question={q} />
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 text-sm text-gray-700 mt-10">
        <button className="px-3 py-1 rounded hover:bg-gray-200">{'<'}</button>
        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
          <button
            key={n}
            className={`px-3 py-1 rounded hover:bg-gray-200 ${
              n === 2 ? 'bg-blue-100 text-blue-600 font-medium' : ''
            }`}
          >
            {n}
          </button>
        ))}
        <button className="px-3 py-1 rounded hover:bg-gray-200">{'>'}</button>
      </div>
    </div>
  );
};

export default QuestionList;
