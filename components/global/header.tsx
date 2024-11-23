"use client";

import Image from "next/image";
import Link from "next/link";
import { AlignJustify, Dot, Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { Events, Link as ScrollLink } from "react-scroll";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>();

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {
      setIsOpen(false);
    });

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="lg:hidden">
        <AlignJustify className="w-8 h-8 text-accent" />
      </SheetTrigger>

      <SheetContent className="w-full overflow-y-auto">
        <SheetTitle hidden>Menu</SheetTitle>

        <div className="mt-16 w-full h-[calc(100%-64px)] flex flex-col justify-between gap-12">
          <ul className="w-full flex flex-col">
            <li>
              <ScrollLink
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-96}
                className="flex items-center gap-2 w-full px-2 py-4 border-b border-black/20"
              >
                <div className="w-1 h-1 rounded-full bg-accent hidden" />
                Início
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-96}
                className="flex items-center gap-2 w-full px-2 py-4 border-b border-black/20"
              >
                <div className="w-1 h-1 rounded-full bg-accent hidden" />
                Sobre
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-96}
                className="flex items-center gap-2 w-full px-2 py-4 border-b border-black/20"
              >
                <div className="w-1 h-1 rounded-full bg-accent hidden" />
                Projetos
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                activeClass="active"
                to="how-to-help"
                spy={true}
                smooth={true}
                offset={-96}
                className="flex items-center gap-2 w-full px-2 py-4 border-b border-black/20"
              >
                <div className="w-1 h-1 rounded-full bg-accent hidden" />
                Como ajudar
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                activeClass="active"
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-96}
                className="flex items-center gap-2 w-full px-2 py-4 border-b border-black/20"
              >
                <div className="w-1 h-1 rounded-full bg-accent hidden" />
                Depoimentos
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                activeClass="active"
                to="events"
                spy={true}
                smooth={true}
                offset={-96}
                className="flex items-center gap-2 w-full px-2 py-4 border-b border-black/20"
              >
                <div className="w-1 h-1 rounded-full bg-accent hidden" />
                Eventos
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                activeClass="active"
                to="contacts"
                spy={true}
                smooth={true}
                offset={-96}
                className="flex items-center gap-2 w-full px-2 py-4 border-b border-black/20"
              >
                <div className="w-1 h-1 rounded-full bg-accent hidden" />
                Contato
              </ScrollLink>
            </li>
          </ul>

          <div className="w-full flex flex-col items-center gap-4 pb-6">
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
    <header className="sticky top-0 left-0 right-0 z-30 w-full p-6 py-4 flex flex-col items-center gap-4 sm:px-16 lg:-top-[calc(80px+16px+16px)] lg:pb-0 lg:container lg:mx-auto">
      <div className="w-full flex items-center justify-between bg-white">
        <a href="#" target="_blank" rel="noreferrer noopener" className="hidden lg:flex items-center gap-2 w-[250px]">
          <FaWhatsapp size={24} className="text-accent" />
          (11) 98798-3237
        </a>

        <Link href="/" className="relative size-16 lg:size-20">
          <Image
            src="/assets/images/logo.png"
            alt="Corrente do Bem - Vila Ema"
            fill
            className="object-contain object-center"
          />
        </Link>

        <a
          href="https://www.instagram.com/correntedobem.vilaema/"
          target="_blank"
          rel="noreferrer noopener"
          className="hidden lg:flex items-center gap-4"
        >
          @correntedobem.vilaema
          <FaInstagram size={24} className="text-accent" />
        </a>

        <MobileMenu />
      </div>

      <nav className="hidden lg:flex sticky top-0 rounded-b-xl overflow-hidden w-fit z-20">
        <ScrollLink
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-112}
          className="bg-secondary px-4 py-3 flex items-center justify-center text-white font-medium cursor-pointer"
        >
          Início
        </ScrollLink>

        <ScrollLink
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-112}
          className="bg-secondary px-4 py-3 flex items-center justify-center text-white font-medium cursor-pointer"
        >
          Sobre
        </ScrollLink>

        <ScrollLink
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-112}
          className="bg-secondary px-4 py-3 flex items-center justify-center text-white font-medium cursor-pointer"
        >
          Projetos
        </ScrollLink>

        <ScrollLink
          activeClass="active"
          to="how-to-help"
          spy={true}
          smooth={true}
          offset={-112}
          className="bg-secondary px-4 py-3 flex items-center justify-center text-white font-medium cursor-pointer"
        >
          Como ajudar
        </ScrollLink>

        <ScrollLink
          activeClass="active"
          to="testimonials"
          spy={true}
          smooth={true}
          offset={-112}
          className="bg-secondary px-4 py-3 flex items-center justify-center text-white font-medium cursor-pointer"
        >
          Depoimentos
        </ScrollLink>

        <ScrollLink
          activeClass="active"
          to="events"
          spy={true}
          smooth={true}
          offset={-112}
          className="bg-secondary px-4 py-3 flex items-center justify-center text-white font-medium cursor-pointer"
        >
          Eventos
        </ScrollLink>

        <ScrollLink
          activeClass="active"
          to="contacts"
          spy={true}
          smooth={true}
          offset={-112}
          className="bg-primary px-6 py-3 flex items-center justify-center gap-2 text-base font-semibold text-foreground cursor-pointer"
        >
          <Phone size={20} fill="#021D12" strokeWidth={1} className="text-foreground" />
          Contato
        </ScrollLink>
      </nav>
    </header>
  );
}
