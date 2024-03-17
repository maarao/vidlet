import Flashcard from '/app/components/flashcards/flashcard';
import { getFlashcards } from "/app/flashcards";

export default function FlashcardPage() {
    return (
        <div className="flex justify-center">
            <div>
            {getFlashcards().map((flashcard, index) => (
                <Flashcard key={index} term={flashcard.term} definition={flashcard.definition} />
            ))}
            </div>
        </div>
    )
}
