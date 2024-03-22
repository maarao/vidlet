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
    const [term, setTerm] = useState<string>("");
    const [definition, setDefinition] = useState<string>("");

    return (
        <div>
            
        </div>
    )
}

export default Create;
