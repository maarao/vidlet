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

    const [flashcards, setFlashcards] = useState<FlashcardSet>({key: uid, name: "Unnamed Set", cards: []});

    const [name, setName] = useState<string>("");

    const [term, setTerm] = useState<string>("");
    const [definition, setDefinition] = useState<string>("");

    return (
        <div>
            <h1>Add Term and Definition</h1>
            <div>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
                </label>
            </div>
            
        </div>
    )
}

export default Create;
