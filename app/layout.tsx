import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Corrente do Bem - Vila Ema",
  description:
    "Site oficial da ONG Corrente do Bem Vila Ema, criado para promover ações sociais, divulgar eventos, incentivar doações e conectar voluntários. Junte-se a nós para fazer a diferença!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn("antialiased", poppins.className)}>{children}</body>
    </html>
  );
}
