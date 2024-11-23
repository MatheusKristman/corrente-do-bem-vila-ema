"use client";

import { format } from "date-fns";
import { CalendarDays, MapPin } from "lucide-react";
import { Element } from "react-scroll";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const EVENTS = [
  {
    id: 0,
    title: "Feira Solidária de Natal",
    date: new Date("2024-12-15"),
    location: "Praça da Vila Ema, São Paulo, SP",
    description:
      "Evento para arrecadação de brinquedos, roupas e alimentos para crianças e famílias carentes durante o Natal. Haverá barraquinhas de comida e atividades para crianças.",
  },
  {
    id: 1,
    title: "Visita ao Lar dos Idosos",
    date: new Date("2024-11-30"),
    location: "Lar Esperança, São Paulo, SP",
    description:
      "Uma tarde especial com música, conversa e distribuição de kits de higiene para os idosos. Voluntários são bem-vindos para interagir e alegrar o dia dos moradores.",
  },
  {
    id: 2,
    title: "Campanha do Agasalho",
    date: new Date("2024-06-10"),
    location: "Sede Temporária - Rua da Amizade, 45, São Paulo, SP",
    description:
      "Coleta de agasalhos e cobertores para distribuição a pessoas em situação de rua e famílias em vulnerabilidade. Ajude a aquecer vidas neste inverno!",
  },
  {
    id: 3,
    title: "Páscoa Solidária",
    date: new Date("2025-03-22"),
    location: "Centro Comunitário da Vila Ema, São Paulo, SP",
    description:
      "Entrega de ovos de Páscoa e atividades recreativas para crianças. Venha participar e tornar a Páscoa de muitas famílias ainda mais especial.",
  },
  {
    id: 4,
    title: "Dia das Crianças na Comunidade",
    date: new Date("2025-10-12"),
    location: "Campo de Futebol da Vila Ema, São Paulo, SP",
    description:
      "Um dia cheio de brincadeiras, oficinas criativas e distribuição de lanches para crianças. Traga seu sorriso e venha fazer parte desse momento!",
  },
];

export function Events() {
  return (
    <section className="w-full px-6 mt-24 sm:px-16 lg:container lg:mx-auto">
      <Element name="events" className="w-full flex flex-col gap-12">
        <div className="w-full flex flex-col items-center gap-4">
          <h2 className="text-3xl font-semibold text-foreground text-center !leading-tight sm:max-w-lg lg:text-4xl">
            Acompanhe e Participe de Nossas Ações
          </h2>

          <p className="text-base text-foreground/70 text-center sm:max-w-md lg:text-xl lg:max-w-lg">
            Veja os próximos eventos e reserve um espaço na sua agenda para apoiar nossa missão.
          </p>
        </div>

        <div className="w-full">
          <Carousel
            opts={{
              loop: true,
            }}
          >
            <div className="flex items-center justify-between gap-12">
              <CarouselPrevious className="static translate-x-0 translate-y-0 hidden sm:flex" />

              <CarouselContent>
                {EVENTS.map((event) => (
                  <CarouselItem key={event.id} className="sm:basis-[80%] lg:basis-1/3">
                    <div className="w-full h-full bg-white rounded-3xl p-8 flex flex-col gap-5 border-2 border-accent/10">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-2xl font-semibold text-foreground">{event.title}</h3>

                        <div className="flex items-center gap-2">
                          <CalendarDays className="text-accent size-4 shrink-0" />

                          <span className="text-[12px] font-medium text-foreground/50">
                            {format(event.date, "dd/MM/yyyy")}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <MapPin className="text-accent size-4 shrink-0" />

                          <span className="text-[12px] font-medium text-foreground/50">{event.location}</span>
                        </div>
                      </div>

                      <p className="text-base text-foreground/70 flex-grow">{event.description}</p>

                      <Button variant="accent">Quero participar</Button>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselNext className="static translate-x-0 translate-y-0 hidden sm:flex" />
            </div>

            <div className="flex items-center justify-around gap-6 mt-9 sm:hidden">
              <CarouselPrevious className="static translate-x-0 translate-y-0" />
              <CarouselNext className="static translate-x-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </Element>
    </section>
  );
}
