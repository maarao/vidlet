'use client'

// import { useState } from "react";


const Flashcard = (props: [{term: string, definition: string}]) => {
    const [term, setTerm] = useState<string>("");
    const [definition, setDefinition] = useState<string>("");

    return (
        <div>Flashcard</div>
    )
}

export {Flashcard}