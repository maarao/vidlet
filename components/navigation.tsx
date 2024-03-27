"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu";

  const Navigation = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                 <NavigationMenuItem className="pr-6">
                    <a href="/">Home</a>
                </NavigationMenuItem>
                <NavigationMenuItem className="pr-6">
                    <a href="/create">Create</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <a href="/flashcards">View Flashcards</a>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
  }

  export default Navigation;