"use client";

import Image from "next/image";
import { Element } from "react-scroll";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Ana Cláudia Souza",
    job: "Professora",
    message:
      "Participar dos eventos da Corrente do Bem tem sido uma experiência transformadora. Ver o sorriso das crianças e a gratidão das famílias é algo que me motiva a continuar ajudando.",
  },
  {
    id: 2,
    name: "Rafael Lima",
    job: "Empresário",
    message:
      "A ONG faz um trabalho incrível ao conectar a comunidade e oferecer apoio a quem mais precisa. É inspirador ver como pequenas ações podem gerar um impacto tão grande.",
  },
  {
    id: 3,
    name: "Marina Oliveira",
    job: "Estudante de Enfermagem",
    message:
      "Como voluntária, aprendi o verdadeiro significado de solidariedade. A dedicação e o amor da equipe da Corrente do Bem me mostraram que juntos podemos fazer a diferença.",
  },
];

export function Testimonials() {
  return (
    <section className="w-full block relative">
      <Element name="testimonials" className="w-full flex flex-col sm:flex-row">
        <div className="relative w-full aspect-square sm:w-2/5 after:content-[''] lg:aspect-video after:block after:h-full after:w-full after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:bg-gradient-to-t after:from-foreground after:from-20% after:to-transparent sm:after:bg-gradient-to-l">
          <Image src="/assets/images/testimonial.jpeg" alt="Depoimentos" fill className="object-cover object-center" />
        </div>

        <div className="py-16 px-6 bg-foreground sm:w-3/5 sm:px-16">
          <Carousel
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {TESTIMONIALS.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="w-full flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                      <h4 className="text-2xl font-semibold text-white">{testimonial.name}</h4>

                      <div className="flex items-center gap-2">
                        <div className="w-9 h-px bg-white/70" />

                        <span className="text-base text-white/70 font-medium">{testimonial.job}</span>
                      </div>
                    </div>

                    <p className="text-xl text-white/70">{testimonial.message}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </Element>
    </section>
  );
}
