"use client";

import Image from "next/image";
import { Element } from "react-scroll";

import { Button } from "@/components/ui/button";

export function HowToHelp() {
  return (
    <section className="w-full mt-24 bg-secondary/10 pb-24">
      <Element
        name="how-to-help"
        className="w-full px-6 flex flex-col gap-12 sm:px-16 lg:container lg:mx-auto lg:flex-row-reverse"
      >
        <div className="relative w-full aspect-square -translate-y-10 sm:w-3/5 sm:self-end lg:w-1/2">
          <Image
            src="/assets/images/how-to-help.png"
            alt="Multiplique Esperança Conosco"
            fill
            className="object-contain object-center"
          />
        </div>

        <div className="w-full flex flex-col gap-12 lg:w-1/2 lg:mt-16">
          <div className="w-full flex flex-col gap-7">
            <h2 className="text-3xl font-semibold text-foreground !leading-tight lg:text-4xl">
              Multiplique Esperança Conosco
            </h2>

            <div className="w-full flex flex-col gap-5">
              <p className="text-base text-foreground/70 lg:text-xl">
                Contribuir para a <strong>Corrente do Bem Vila Ema</strong> é simples, mas transforma vidas. Seja com
                doações financeiras, materiais ou o seu tempo como voluntário, cada gesto ajuda a levar cuidado e
                esperança para quem mais precisa.
              </p>

              <p className="text-base text-foreground/70 lg:text-xl">
                Estamos sempre em busca de pessoas dispostas a fortalecer nossa causa. Ao apoiar nossos projetos, você
                se torna parte de uma corrente que multiplica solidariedade e impacto em nossa comunidade. Venha fazer a
                diferença conosco!
              </p>
            </div>
          </div>

          <Button variant="accent" className="w-fit">
            Entre em contato
          </Button>
        </div>
      </Element>
    </section>
  );
}
