"use client"

import Flashcard from "./components/flashcard"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"



export default function Home() {
    return (
        <div className="h-full w-full">
            <div className="flex items-center justify-center border-8 border-red-50 h-full w-full">
                <Select>
                    <SelectTrigger className="w-[180px] absolute z-10 top-32">
                        <SelectValue placeholder="Select a flashcard set" />
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
                <Carousel className="absolute top-64 z-0 border-8 w-3/5 h-2/5">
                    <div className="h-full">
                        <CarouselContent className="h-full border-8 border-black">
                            {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem className="h-full" key={index}>
                                <div className="p-1 h-full">
                                    <Card className="h-full">
                                        <CardContent className="flex items-center justify-center p-0 h-full">
                                            <Flashcard term="hi" definition="yo"></Flashcard>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                    </div>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}