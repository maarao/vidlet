'use client'

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react";

interface Flashcard {
    term: string;
    definition: string;
}

interface FlashcardSet {
    key: number;
    name: string;
    cards: Flashcard[];
}

const Create = () => {
    const [flashcards, setFlashcards] = useState<FlashcardSet>({key: Date.now(), name: "Unnamed Set", cards: []});

    const [term, setTerm] = useState<string>("");
    const [definition, setDefinition] = useState<string>("");

    const addFlashcard = () => {
        setFlashcards({...flashcards, cards: [...flashcards.cards, {term: term, definition: definition}]});
        setTerm("");
        setDefinition("");
    }

    const updateUid = () => {
        setFlashcards({...flashcards, key: Date.now()});
    }

    const cleanUp = () => {
        setFlashcards({key: Date.now(), name: "Unnamed Set", cards: []});
        setTerm("");
        setDefinition("");
    }

    const createFlashcardSet = () => {
        updateUid();

        localStorage.setItem(flashcards.key.toString(), JSON.stringify(flashcards));

        cleanUp();
    }

    return (
        <div>
            <h1>Add Term and Definition</h1>
            <div>
                <label>
                    Name:
                    <input type="text" value={flashcards.name} onChange={(e) => {setFlashcards({...flashcards, name: e.target.value})}} />
                </label>
            </div>
            <div>
                <label>
                    Term:
                    <input type="text" value={term} onChange={(e) => {setTerm(e.target.value)}} />
                </label>
            </div>
            <div>
                <label>
                    Definition:
                    <input type="text" value={definition} onChange={(e) => {setDefinition(e.target.value)}} />
                </label>
            </div>
            <Button onClick={addFlashcard}>Add Flashcard</Button>
            <Button onClick={createFlashcardSet}>Create Flashcard Set</Button>
        </div>
    )
}

export default Create;
