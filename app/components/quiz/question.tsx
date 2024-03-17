import { Card } from 'flowbite-react';

export default function Question(props) {
  const {term, correct, answers} = props;

  return (
    <div className="flex flex-col w-full">
      <div className="bg-gray-100 p-4 rounded shadow-md">
        <h2 className="text-xl font-bold">{term}</h2>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {options.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              id={`answer-${index + 1}`}
              name="answer"
              className="w-4 h-4 mr-2"
            />
            <label htmlFor={`answer-${index + 1}`}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
}