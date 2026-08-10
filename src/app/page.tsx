import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import Process from "@/components/Process";
import Stack from "@/components/Stack";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#050506] text-[#EDEDF2] min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-grow">
        <Hero />
        <TechMarquee />
        <Services />
        <SelectedWork />
        <Process />
        <Stack />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
