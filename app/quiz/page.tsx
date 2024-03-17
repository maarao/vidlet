import Question from '/app/components/quiz/question';
import { getFlashcards } from "/app/flashcards";

export default function QuizPage() {
  const flashcards = getFlashcards();
  console.log(flashcards);
    return (
    <div>
      <h1>Quiz Page</h1>
      <div className="flex justify-center">
      {/* <Question ></Question> */}
      </div>
    </div>
  );
}