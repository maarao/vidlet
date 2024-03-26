'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";

// TODO: Make this have a unique key so that you can continuously overwrite/delete this specific flashcard
const Flashcard = (props: [{term: string, definition: string}]) => {
    const [term, setTerm] = useState<string>("");
    const [definition, setDefinition] = useState<string>("");

    const addFlashcard = () => {
        props.push({term: term, definition: definition});
    }

    return (
        <div>
            <div>
                <label>
                    Term:
                    <Input type="text" value={term} onChange={(e) => {setTerm(e.target.value)}} />
                </label>
            </div>
            <div>
                <label>
                    Definition:
                    <Input type="text" value={definition} onChange={(e) => {setDefinition(e.target.value)}} />
                </label>
            </div>
        </div>
    )
}

export { Flashcard }