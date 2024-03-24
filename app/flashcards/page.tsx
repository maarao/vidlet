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

    return (
        <div className="flex items-center justify-center border-8 border-red-50 h-full w-full">
            <Select>
                <SelectTrigger className="w-[15%] absolute z-10 top-32">
                    <SelectValue placeholder="Select a flashcard set..." />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Flashcard Sets</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Carousel className="absolute top-64 z-0 w-3/5 h-2/5">
                <CarouselContent className="h-full">
                    {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1 h-full">
                            <Card className="h-full">
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