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

            {numFlashcards.map((num) => (
                <Flashcard flashcards={flashcards} index={num} key={num} />
            ))}

            <Button onClick={handleNumFlashcards}>Add Another Flashcard</Button>
            <Button onClick={createFlashcardSet}>Create Flashcard Set</Button>
        </div>
    )
}

export default Create;
