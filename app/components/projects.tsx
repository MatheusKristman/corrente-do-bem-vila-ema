import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Projects() {
  return (
    <section className="w-full px-6 mt-24 flex flex-col gap-12 sm:px-16 sm:mt-36 lg:container lg:mx-auto">
      <div className="w-full flex flex-col gap-12">
        <div className="w-full flex flex-col items-center gap-4">
          <h2 className="text-3xl text-foreground font-semibold !leading-tight text-center max-w-md lg:text-4xl">
            Momentos Que Transformam Vidas
          </h2>

          <p className="text-base text-foreground/70 text-center max-w-lg lg:text-xl">
            Da organização de eventos às visitas solidárias, nossos projetos mostram a força do trabalho em conjunto.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 grid-rows-2 gap-7 sm:grid-cols-3">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
            <Image src="/assets/images/project-1.jpeg" alt="Projeto 1" fill className="object-cover object-center" />
          </div>

          <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
            <Image src="/assets/images/project-2.jpeg" alt="Projeto 1" fill className="object-cover object-center" />
          </div>

          <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
            <Image src="/assets/images/project-3.jpeg" alt="Projeto 1" fill className="object-cover object-center" />
          </div>

          <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
            <Image src="/assets/images/project-4.jpeg" alt="Projeto 1" fill className="object-cover object-center" />
          </div>

          <div className="relative w-full aspect-square rounded-2xl overflow-hidden hidden sm:block">
            <Image src="/assets/images/project-5.jpeg" alt="Projeto 1" fill className="object-cover object-center" />
          </div>

          <div className="relative w-full aspect-square rounded-2xl overflow-hidden hidden sm:block">
            <Image src="/assets/images/project-6.jpeg" alt="Projeto 1" fill className="object-cover object-center" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-12 lg:flex-row lg:items-end lg:justify-between">
        <div className="w-full flex flex-col items-center gap-3 lg:w-fit lg:items-start">
          <h3 className="text-3xl font-semibold text-foreground !leading-tight text-center max-w-md lg:text-left lg:text-4xl">
            Venha fazer parte dessa corrente do bem!
          </h3>

          <p className="text-center font-medium text-base text-foreground/70 max-w-lg lg:text-left lg:text-xl">
            Queremos fazer mais, e você pode nos ajudar! Venha fortalecer a nossa missão de cuidar de quem precisa.
          </p>
        </div>

        <Button>Seja um apoiador</Button>
      </div>
    </section>
  );
}
