'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Flashcard = (props: { flashcards, index }) => {
    const [term, setTerm] = useState<string>("");
    const [definition, setDefinition] = useState<string>("");

    const addFlashcard = () => {
        props.flashcards.cards[props.index] = ({term: term, definition: definition});
    }

    return (
        <div>
            <div className="flex flex-row">
                <div className="basis-1/2 mr-10">
                    <Textarea value={term} onChange={(e) => {setTerm(e.target.value)}} onBlur={addFlashcard} />
                </div>
                <div className="basis-1/2 ml-10">
                    <Textarea value={definition} onChange={(e) => {setDefinition(e.target.value)}} onBlur={addFlashcard} />
                </div>
            </div>
        </div>
    )
}

export { Flashcard }