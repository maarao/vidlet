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



export default function Flashcards() {

    const flashcardSetKeys:string[] = Object.keys(localStorage);

    return (
        <div className="flex items-center justify-center border-8 border-red-50 h-full w-full">
            <Select>
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
            <Carousel className="absolute top-64 z-0 w-1/2 h-1/2">
                <CarouselContent className="h-full">
                    {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1 h-full">
                            <Card className="h-full cursor-pointer">
                                <CardContent className="flex items-center justify-center align-middle p-0 min-h-full h-full">
                                    <Flashcard term="hi" definition="yo"></Flashcard>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

/*
{flashcardSetKeys.map((val:string) => (
                            localStorage.getItem(val)? <SelectItem value={val}>{JSON.parse(localStorage.getItem(val)? localStorage.getItem(val)).name}</SelectItem>
                        ))}
                        */