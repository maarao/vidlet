'use client'

import React, { useState } from 'react';

const Flashcard = ({ term, definition }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-64 h-48 shadow-md rounded-lg overflow-hidden border border-gray-200 transform transition-transform duration-500 cursor-pointer hover:shadow-lg"
      onClick={handleClick}
    >
      <div className={`w-full h-full flex justify-center items-center text-center font-bold text-lg ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="p-4">
          {isFlipped ? <p>{definition}</p> : <h2>{term}</h2>}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
