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
    const [uid, setUid] = useState<number>(Date.now());

    const [flashcards, setFlashcards] = useState<FlashcardSet>({key: uid, name: "", cards: []});

    const [name, setName] = useState<string>("Unnamed Set");

    const [term, setTerm] = useState<string>("");
    const [definition, setDefinition] = useState<string>("");

    const updateName = () => {
        setFlashcards({...flashcards, name: name});
        console.log(flashcards);
    }

    const addFlashcard = () => {
        setFlashcards({...flashcards, cards: [...flashcards.cards, {term: term, definition: definition}]});
        setTerm("");
        setDefinition("");
    }

    const updateUid = () => {
        setUid(Date.now());
        setFlashcards({...flashcards, key: uid});
    }

    const createFlashcardSet = () => {
        // updateName();
        updateUid();

        localStorage.setItem(flashcards.key.toString(), JSON.stringify(flashcards));

        setName("");
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
