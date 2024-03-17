'use client'
import React, { useState } from 'react';

const Question = ({ question }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(Array(question.possibleAnswers.length).fill(null));

  const handleAnswerClick = (answer, index) => {
    const isCorrect = answer === question.answer;

    // Update answer status
    const newAnswerStatus = answerStatus.map((status, i) => {
      if (i === index) {
        return isCorrect ? 'correct' : 'incorrect';
      }
      return status;
    });

    // Update selected answer
    setSelectedAnswer(isCorrect ? 'Correct!' : 'Incorrect!');

    // If the answer is incorrect, mark the correct answer
    if (!isCorrect) {
      const correctIndex = question.possibleAnswers.findIndex(ans => ans === question.answer);
      newAnswerStatus[correctIndex] = 'correct';
    }

    setAnswerStatus(newAnswerStatus);
  };

  return (
    <div className="rounded-lg light:bg-gray-100 bg-gray-800 p-8 text-center mt-12 max-w-4xl h-[520px] flex flex-col justify-between">
      <div>
        <h2 className="text-2xl pt-10">{question.question}</h2>
        <div className="pt-[240px]">
          {question.possibleAnswers.map((answer, index) => (
            <button
              key={index}
              className={`font-bold py-3 px-6 mr-2 mb-2 rounded ${answerStatus[index] === 'correct' ? 'bg-green-500' : answerStatus[index] === 'incorrect' ? 'bg-red-500' : 'bg-gray-600 hover:bg-gray-700'}`}
              onClick={() => handleAnswerClick(answer, index)}
              disabled={selectedAnswer !== null}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
      {/* {selectedAnswer && <p className="mt-4 text-xl">{selectedAnswer}</p>} */}
    </div>
  );
};

export default Question;
