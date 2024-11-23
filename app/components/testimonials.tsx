import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Forem ipsum",
    job: "Forem ipsum",
    message:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
  },
  {
    id: 2,
    name: "Forem ipsum",
    job: "Forem ipsum",
    message:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
  },
  {
    id: 3,
    name: "Forem ipsum",
    job: "Forem ipsum",
    message:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
  },
];

export function Testimonials() {
  return (
    <section className="w-full mt-24 block relative">
      <div className="w-full flex flex-col sm:flex-row">
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
      </div>
    </section>
  );
}
