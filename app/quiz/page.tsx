// Import necessary dependencies and components
import Question from '/app/components/quiz/question';
import { getFlashcards } from "/app/flashcards";

// Function definitions for generating questions and shuffling arrays
function generateFlashcardQuestions(flashcards) {
  const questions = [];

  // Iterate through each flashcard
  flashcards.forEach(flashcard => {
      const { term, definition } = flashcard;
      const possibleAnswers = getRandomPossibleAnswers(flashcards, term);

      // Shuffle possible answers including the correct answer
      const shuffledAnswers = shuffleArray([...possibleAnswers, term]);

      // Create question object
      const questionObj = {
          question: definition,
          answer: term,
          possibleAnswers: shuffledAnswers
      };

      // Add question object to the array
      questions.push(questionObj);
  });

  return questions;
}

function getRandomPossibleAnswers(flashcards, correctTerm) {
  const possibleAnswers = [];
  const numPossibleAnswers = 3;

  // Iterate through flashcards to get possible answers
  flashcards.forEach(flashcard => {
      const { term } = flashcard;
      if (term !== correctTerm) {
          possibleAnswers.push(term);
      }
  });

  // Shuffle possible answers and select a subset
  const shuffledPossibleAnswers = shuffleArray(possibleAnswers);
  return shuffledPossibleAnswers.slice(0, numPossibleAnswers);
}

function shuffleArray(array) {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Export default component
export default function QuizPage() {
  const questions = shuffleArray(generateFlashcardQuestions(getFlashcards()));

  return (
    <div className="flex justify-center">
      <div className="">
        {questions.map((question, index) => (
          <Question key={index} question={question} />
        ))}
      </div>
    </div>
  );
}
