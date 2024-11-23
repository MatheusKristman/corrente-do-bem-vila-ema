import { Header } from "@/components/global/header";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { HowToHelp } from "./components/how-to-help";
import { Events } from "./components/events";
import { Testimonials } from "./components/testimonials";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <HowToHelp />
      <Testimonials />
      <Events />
      <Footer />
    </>
  );
}
