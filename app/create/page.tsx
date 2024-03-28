'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Flashcard } from "./components/flashcard";

interface Flashcard {
    term: string;
    definition: string;
}

interface FlashcardSet {
    key: number;
    version: number;
    name: string;
    cards: Flashcard[];
}

const Create = () => {
    const [flashcards, setFlashcards] = useState<FlashcardSet>({
        key: Date.now(),
        version: 1.0,
        name: "Unnamed Set",
        cards: []
    });

    const [numFlashcards, setNumFlashcards] = useState<number[]>([0]);

    const handleNumFlashcards = () => {
        setNumFlashcards([...numFlashcards, numFlashcards.length]);
    }

    const updateUid = () => {
        setFlashcards({ ...flashcards, key: Date.now() });
    }

    const cleanUp = () => {
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }

    const createFlashcardSet = () => {
        updateUid();

        localStorage.setItem("study-set-" + flashcards.key.toString(), JSON.stringify({...flashcards, cards: flashcards.cards.filter((card) => card.definition !== "" || card.term !== "")}));

        cleanUp();
    }

    const removeFlashcard = (indexToRemove) => {
        setNumFlashcards(numFlashcards.filter((_, index) => index !== indexToRemove));
        const updatedCards = flashcards.cards.filter((_, index) => index !== indexToRemove);
        setFlashcards({ ...flashcards, cards: updatedCards });
    }

    return (
        <div className="max-w-6xl mx-auto">
            <div>
                <label>Name:</label>
                <Input type="text" value={flashcards.name} onChange={(e) => {setFlashcards({...flashcards, name: e.target.value})}} />
            </div>
            <div className="flex flex-row pt-5 pb-2 text-center">
                <div className="basis-1/2 mr-10">Term</div>
                <div className="basis-1/2 ml-10">Definition</div>
            </div>

            {numFlashcards.map((num) => (
                <div className="pb-4" key={num}>
                    <Flashcard flashcards={flashcards} index={num} numFlashcards={numFlashcards} onDelete={removeFlashcard} />
                </div>
            ))}

            <div className="flex justify-center">
            <Button onClick={handleNumFlashcards}>Add Another Flashcard</Button>
            </div>
            <Button onClick={createFlashcardSet}>Create Flashcard Set</Button>
        </div>
    )
}

export default Create;
