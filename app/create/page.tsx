'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button"
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
    const [flashcards, setFlashcards] = useState<FlashcardSet>({key: Date.now(), version: 1.0, name: "Unnamed Set", cards: []});

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

        localStorage.setItem("study-set-" + flashcards.key.toString(), JSON.stringify(flashcards));

        cleanUp();
    }

    return (
        <div>
            <h1>Add Term and Definition</h1>

            <div>
                <label>
                    Name:
                    <Input type="text" value={flashcards.name} onChange={(e) => {setFlashcards({...flashcards, name: e.target.value})}} />
                </label>
            </div>

            <Flashcard flashcards={flashcards} />

            <Button onClick={createFlashcardSet}>Create Flashcard Set</Button>
        </div>
    )
}

export default Create;
