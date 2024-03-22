'use client'

import { useState } from "react";


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
                    <input type="text" value={term} onChange={(e) => {setTerm(e.target.value)}} />
                </label>
            </div>
            <div>
                <label>
                    Definition:
                    <input type="text" value={definition} onChange={(e) => {setDefinition(e.target.value)}} />
                </label>
            </div>
        </div>
    )
}

export {Flashcard}