import Flashcard from '/app/components/flashcards/flashcard';
import { getFlashcards } from "/app/flashcards";
import { Carousel } from 'flowbite-react';

export default function FlashcardPage() {
    return (
        <div>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 justify-center">
                <Carousel className="mt-32" slide={false}>
                    {getFlashcards().map((flashcard, index) => (
                        <div className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white">
                            <Flashcard key={index} term={flashcard.term} definition={flashcard.definition} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
        
    )
}
