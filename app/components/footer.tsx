"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { Element } from "react-scroll";

export function Footer() {
  return (
    <footer className="w-full mt-16">
      <Element name="contacts" className="w-full">
        <div className="w-full bg-accent/75">
          <div className="w-full px-6 py-16 flex flex-col items-center gap-12 sm:px-16 lg:flex-row lg:items-start lg:container lg:mx-auto lg:justify-between">
            <Link href="/" className="relative size-[250px]">
              <Image
                src="/assets/images/logo-branco.png"
                alt="Corrente do Bem - Vila Ema"
                fill
                className="object-contain object-center"
              />
            </Link>

            <div className="w-full flex flex-col items-center gap-12 lg:w-fit lg:items-end">
              <div className="w-full flex flex-col items-center gap-4 lg:items-end">
                <h2 className="text-3xl font-semibold text-white lg:text-end lg:text-4xl">Converse Com a Gente</h2>

                <ul className="flex flex-col items-center gap-2 lg:items-end">
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-white text-base font-medium flex items-center gap-2"
                    >
                      contato@correntedobemvilaema.com
                      <Mail className="text-accent size-6" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/correntedobem.vilaema/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-white text-base font-medium flex items-center gap-2"
                    >
                      @correntedobem.vilaema
                      <FaInstagram className="text-accent size-6" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-white text-base font-medium flex items-center gap-2"
                    >
                      (11) 98798-3237
                      <FaWhatsapp className="text-accent size-6" />
                    </a>
                  </li>
                </ul>
              </div>

              <Button variant="accent">Entre em Contato</Button>
            </div>
          </div>
        </div>

        <div className="w-full bg-accent">
          <div className="w-full px-6 py-5 flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:px-16 lg:container lg:mx-auto">
            <span className="text-base font-medium text-background">Todos os direitos reservados © 2024</span>

            <span className="text-base font-medium text-background flex items-center gap-2">
              Desenvolvido por
              <a href="https://www.mkdevsolutions.com/" target="_blank" rel="noreferrer noopener">
                <Image
                  src="/assets/images/mk-dev.svg"
                  alt="MKDev"
                  width={70}
                  height={28}
                  className="object-contain object-center"
                />
              </a>
            </span>
          </div>
        </div>
      </Element>
    </footer>
  );
}
