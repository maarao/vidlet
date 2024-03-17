'use client'
import React, { useState } from 'react';

const Question = ({ question }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    if (answer === question.answer) {
      setSelectedAnswer('Correct!');
    } else {
      setSelectedAnswer('Incorrect!');
    }
  };

  return (
    <div className="text-center mt-8">
      <h2 className="text-2xl font-bold">{question.question}</h2>
      <div className="mt-4">
        {question.possibleAnswers.map((answer, index) => (
          <button
            key={index}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 mb-2 rounded"
            onClick={() => handleAnswerClick(answer)}
            disabled={selectedAnswer !== null}
          >
            {answer}
          </button>
        ))}
      </div>
      {selectedAnswer && <p className="mt-4 text-xl">{selectedAnswer}</p>}
    </div>
  );
};

export default Question;
