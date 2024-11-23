"use client";

import { MoveRight } from "lucide-react";
import { Element, Link } from "react-scroll";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <main className="w-full block bg-hero bg-right bg-cover bg-no-repeat relative lg:bg-[100%_25%] lg:-mt-12 after:content-[''] after:block after:h-full after:w-full after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:bg-gradient-to-r after:from-foreground after:from-50% after:to-transparent">
      <Element
        name="hero"
        className="w-full py-24 px-6 flex flex-col gap-9 relative z-10 sm:px-16 lg:container lg:mx-auto"
      >
        <h1 className="text-white font-bold text-4xl !leading-tight sm:w-1/2 lg:text-4xl xl:text-5xl">
          Uma Corrente de Solidariedade Que Faz a Diferença
        </h1>

        <Button variant="accent" className="w-fit cursor-pointer" asChild>
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={-112}>
            Saiba mais
            <MoveRight />
          </Link>
        </Button>
      </Element>
    </main>
  );
}
