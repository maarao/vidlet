import fs from 'fs';

interface Flashcard {
  term: string;
  definition: string;
}

interface FlashcardData {
  flashcards: Flashcard[];
}

export function getFlashcards(): Flashcard[] {
  // Read the contents of the JSON file
  const rawData = fs.readFileSync('app/scripts/flashcards/test.json', 'utf-8');
  const flashcardsData: FlashcardData = JSON.parse(rawData);

  // Extract the flashcards array
  return flashcardsData.flashcards;
}
