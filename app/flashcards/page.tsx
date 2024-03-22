import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { Card, CardContent } from "@/components/ui/card"
  import Flashcard from "./components/flashcard"



export default function Home() {
    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <Carousel className="w-full max-w-xs relative top-16">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                            <Card className="size-full">
                                <CardContent className="flex aspect-square items-center justify-center p-0">
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
        </div>
    )
}