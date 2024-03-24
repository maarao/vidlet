'use client'

import React, { useState } from 'react';

const Flashcard = ({ term, definition }: {term: string, definition:string}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="size-full" onClick={handleClick}>
      <div className={`w-full h-full flex justify-center items-center text-center font-bold text-lg ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="select-none">
          {isFlipped ? <p>{definition}</p> : <h2>{term}</h2>}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
