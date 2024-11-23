import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { format } from "date-fns";
import { CalendarDays, MapPin } from "lucide-react";

const EVENTS = [
  {
    id: 0,
    title: "Dorem Ipsum",
    date: new Date(),
    location: "Lorem Ipsum, 123",
    description:
      "Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
  },
  {
    id: 1,
    title: "Dorem Ipsum",
    date: new Date(),
    location: "Lorem Ipsum, 123",
    description:
      "Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
  },
  {
    id: 2,
    title: "Dorem Ipsum",
    date: new Date(),
    location: "Lorem Ipsum, 123",
    description:
      "Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
  },
  {
    id: 3,
    title: "Dorem Ipsum",
    date: new Date(),
    location: "Lorem Ipsum, 123",
    description:
      "Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
  },
  {
    id: 4,
    title: "Dorem Ipsum",
    date: new Date(),
    location: "Lorem Ipsum, 123",
    description:
      "Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
  },
  {
    id: 5,
    title: "Dorem Ipsum",
    date: new Date(),
    location: "Lorem Ipsum, 123",
    description:
      "Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
  },
  {
    id: 6,
    title: "Dorem Ipsum",
    date: new Date(),
    location: "Lorem Ipsum, 123",
    description:
      "Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
  },
];

export function Events() {
  return (
    <section className="w-full px-6 mt-24 flex flex-col gap-12 sm:px-16 lg:container lg:mx-auto">
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
                  <div className="w-full bg-white rounded-3xl p-8 flex flex-col gap-5 border-2 border-accent/10">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-2xl font-semibold text-foreground">{event.title}</h3>

                      <div className="flex items-center gap-2">
                        <CalendarDays className="text-accent size-4" />

                        <span className="text-[12px] font-medium text-foreground/50">
                          {format(event.date, "dd/MM/yyyy")}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin className="text-accent size-4" />

                        <span className="text-[12px] font-medium text-foreground/50">{event.location}</span>
                      </div>
                    </div>

                    <p className="text-base text-foreground/70">{event.description}</p>

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
    </section>
  );
}
