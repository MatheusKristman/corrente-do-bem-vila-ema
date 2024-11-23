import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <section className="w-full px-6 pt-24 flex flex-col gap-16 sm:px-16 sm:pt-36 lg:container lg:mx-auto lg:flex-row">
      <div className="relative aspect-square w-full sm:max-w-lg">
        <Image src="/assets/images/about.png" alt="Como tudo começou" fill className="object-contain object-top" />
      </div>

      <div className="w-full flex flex-col gap-12">
        <div className="w-full flex flex-col gap-9">
          <h2 className="text-foreground text-3xl font-semibold !leading-tight lg:text-4xl">Como Tudo Começou</h2>

          <div className="w-full flex flex-col gap-5">
            <p className="text-base text-foreground/70 lg:text-xl">
              No início da pandemia, um encontro inesperado mudou tudo. Ao se deparar com uma senhora passando fome,
              nasceu o desejo de fazer a diferença. Foi assim que surgiu a Corrente do Bem Vila Ema, com uma campanha
              para arrecadar alimentos e ajudar pessoas vulneráveis.
            </p>

            <p className="text-base text-foreground/70 lg:text-xl">
              O impacto foi imediato e surpreendente: mais de 80 voluntários se uniram para fortalecer a causa. Desde
              então, a ONG não parou de crescer. Hoje, atendemos lares de idosos, centros de acolhimento e famílias
              necessitadas, levando não apenas alimentos, mas também cuidados essenciais.
            </p>

            <p className="text-base text-foreground/70 lg:text-xl">
              Ao longo do tempo, a Corrente do Bem expandiu sua atuação e consolidou projetos que fortalecem sua missão
              de transformar vidas. Entre nossas iniciativas, destacam-se:
            </p>
          </div>

          <ul className="w-full flex flex-col gap-9">
            <li className="flex items-center gap-5">
              <BadgeCheck fill="#18ECA2" className="text-white size-8 shrink-0" />

              <p className="text-base text-foreground/70 lg:text-xl">Bazar Solidário</p>
            </li>

            <li className="flex items-center gap-5">
              <BadgeCheck fill="#18ECA2" className="text-white size-8 shrink-0" />

              <p className="text-base text-foreground/70 lg:text-xl">
                Visitas em Lares de Idosos e Centros de Acolhimento
              </p>
            </li>

            <li className="flex items-center gap-5">
              <BadgeCheck fill="#18ECA2" className="text-white size-8 shrink-0" />

              <p className="text-base text-foreground/70 lg:text-xl">Arrecadação de Alimentos e Utensílios de Casa</p>
            </li>
          </ul>
        </div>

        {/* TODO: adicionar link para whatsapp */}
        <Button variant="accent" className="w-fit">
          Entre em contato
        </Button>
      </div>
    </section>
  );
}
