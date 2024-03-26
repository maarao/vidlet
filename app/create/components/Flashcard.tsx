'use client'

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";

const Flashcard = (props: { flashcards }) => {
    const [term, setTerm] = useState<string>("");
    const [definition, setDefinition] = useState<string>("");
    const flashcardIndex = useMemo(() => props.flashcards.cards.length - 1, [props.flashcards.cards.length]);

    const addFlashcard = () => {
        props.flashcards.cards[flashcardIndex] = ({term: term, definition: definition});
    }

    return (
        <div>
            <div>
                <label>
                    Term:
                    <Input type="text" value={term} onChange={(e) => {setTerm(e.target.value)}} onBlur={addFlashcard} />
                </label>
            </div>
            <div>
                <label>
                    Definition:
                    <Input type="text" value={definition} onChange={(e) => {setDefinition(e.target.value)}} onBlur={addFlashcard} />
                </label>
            </div>
        </div>
    )
}

export { Flashcard }