'use client'

import React, { useState } from 'react';

const Flashcard = ({ term, definition }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="rounded-lg light:bg-gray-100 bg-gray-800 p-8 text-center mt-12 w-[800px] h-[520px] flex flex-col justify-between"
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
