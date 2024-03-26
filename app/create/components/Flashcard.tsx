'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Flashcard = (props: { flashcards, index }) => {
    const [term, setTerm] = useState<string>("");
    const [definition, setDefinition] = useState<string>("");

    const addFlashcard = () => {
        props.flashcards.cards[props.index] = ({term: term, definition: definition});
    }

    return (
        <div>
            <div className="flex flex-row">
                <div className="basis-1/2">
                    <Input type="text" value={term} onChange={(e) => {setTerm(e.target.value)}} onBlur={addFlashcard} />
                </div>
                <div className="basis-1/2 ml-4">
                    <Input type="text" value={definition} onChange={(e) => {setDefinition(e.target.value)}} onBlur={addFlashcard} />
                </div>
            </div>
        </div>
    )
}

export { Flashcard }