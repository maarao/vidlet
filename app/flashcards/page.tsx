"use client"

import Flashcard from "./components/flashcard"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "./components/flashcard-carousel"
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { useState } from 'react';



export default function Flashcards() {

    const flashcardSetKeys:string[] = [];

    const [selectedSet, setSelectedSet] = useState<string>("");

    const handleSelect = (value: string) => {

        setSelectedSet(value);
    }

    Object.keys(localStorage).forEach(function(key){
        if (!isNaN(+key)) flashcardSetKeys.push(key);
     });

    return (
        <div className="flex items-center justify-center h-full w-full">
            <Select onValueChange={handleSelect}>
                <SelectTrigger className="w-[15%] absolute z-10 top-32">
                    <SelectValue placeholder="Select a flashcard set..." />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Flashcard Sets</SelectLabel>
                        {flashcardSetKeys.map((val:string) => (
                            <SelectItem value={val}>{JSON.parse(localStorage.getItem(val)!).name}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            {selectedSet != "" ?
            <Carousel className="absolute top-64 z-0 w-1/2 h-1/2" opts={{startIndex: 0}}>
                <CarouselContent className="h-full">
                    {JSON.parse(localStorage.getItem(selectedSet)!).cards.map((card:{term:string, definition:string}) => (
                        <CarouselItem>
                            <div className="p-1 h-full">
                                <Card className="h-full cursor-pointer">
                                    <CardContent className="flex items-center justify-center align-middle p-0 min-h-full h-full">
                                        <Flashcard term={card.term} definition={card.definition}></Flashcard>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel> :
            <p></p>
            }
        </div>
    )
}

/*
{flashcardSetKeys.map((val:string) => (
                            localStorage.getItem(val)? <SelectItem value={val}>{JSON.parse(localStorage.getItem(val)? localStorage.getItem(val)).name}</SelectItem>
                        ))}
                        */