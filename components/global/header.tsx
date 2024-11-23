import Image from "next/image";
import Link from "next/link";
import { AlignJustify, Dot, Phone } from "lucide-react";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

function MobileMenu() {
  //TODO: adicionar links com scroll para fechar o sheet e scrollar para a seção
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <AlignJustify className="w-8 h-8 text-accent" />
      </SheetTrigger>

      <SheetContent className="w-full">
        <SheetTitle hidden>Menu</SheetTitle>

        <div className="mt-16 w-full h-[calc(100%-64px)] flex flex-col justify-between">
          <ul className="w-full flex flex-col">
            <li className="flex items-center gap-2 w-full py-4 border-b border-black/20">
              <Dot className="text-accent" />
              Início
            </li>

            <li className="flex items-center gap-2 w-full py-4 border-b border-black/20">
              <Dot className="text-accent" />
              Sobre
            </li>

            <li className="flex items-center gap-2 w-full py-4 border-b border-black/20">
              <Dot className="text-accent" />
              Projetos
            </li>

            <li className="flex items-center gap-2 w-full py-4 border-b border-black/20">
              <Dot className="text-accent" />
              Como ajudar
            </li>

            <li className="flex items-center gap-2 w-full py-4 border-b border-black/20">
              <Dot className="text-accent" />
              Eventos
            </li>

            <li className="flex items-center gap-2 w-full py-4 border-b border-black/20">
              <Dot className="text-accent" />
              Depoimentos
            </li>

            <li className="flex items-center gap-2 w-full py-4 border-b border-black/20">
              <Dot className="text-accent" />
              Parceiras
            </li>

            <li className="flex items-center gap-2 w-full py-4 border-b border-black/20">
              <Dot className="text-accent" />
              Contato
            </li>
          </ul>

          <div className="w-full flex flex-col items-center gap-4">
            <a href="#" target="_blank" rel="noreferrer noopener" className="flex items-center gap-2">
              <FaWhatsapp size={24} className="text-accent" />
              (11) 91234-1234
            </a>

            <a href="#" target="_blank" rel="noreferrer noopener" className="flex items-center gap-4">
              <FaInstagram size={24} className="text-accent" />
              @correntedobem.vilaema
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function Header() {
  return (
    <header className="relative w-full p-6 py-4 flex flex-col items-center gap-4 sm:px-16 lg:pb-0 lg:container lg:mx-auto">
      <div className="w-full flex items-center justify-between">
        <a href="#" target="_blank" rel="noreferrer noopener" className="hidden lg:flex items-center gap-2 w-[250px]">
          <FaWhatsapp size={24} className="text-accent" />
          (11) 91234-1234
        </a>

        <Link href="/" className="relative size-16 lg:size-20">
          <Image
            src="/assets/images/logo.png"
            alt="Corrente do Bem - Vila Ema"
            fill
            className="object-contain object-center"
          />
        </Link>

        <a href="#" target="_blank" rel="noreferrer noopener" className="hidden lg:flex items-center gap-4">
          @correntedobem.vilaema
          <FaInstagram size={24} className="text-accent" />
        </a>

        <MobileMenu />
      </div>

      <nav className="hidden lg:flex sticky top-0 rounded-b-xl overflow-hidden w-fit z-20">
        <button className="bg-secondary px-4 py-3 flex items-center justify-center text-white font-medium">
          Início
        </button>

        <button className="bg-secondary px-4 py-3 flex items-center justify-center text-white font-medium">
          Sobre
        </button>

        <button className="bg-secondary px-4 py-3 flex items-center justify-center text-white font-medium">
          Projetos
        </button>

        <button className="bg-secondary px-4 py-3 flex items-center justify-center text-white font-medium">
          Como ajudar
        </button>

        <button className="bg-secondary px-4 py-3 flex items-center justify-center text-white font-medium">
          Eventos
        </button>

        <button className="bg-secondary px-4 py-3 flex items-center justify-center text-white font-medium">
          Depoimentos
        </button>

        <button className="bg-secondary px-4 py-3 flex items-center justify-center text-white font-medium">
          Parcerias
        </button>

        <button className="bg-primary px-6 py-3 flex items-center justify-center gap-2 text-base font-semibold text-foreground">
          <Phone size={20} fill="#021D12" strokeWidth={1} className="text-foreground" />
          Contato
        </button>
      </nav>
    </header>
  );
}
