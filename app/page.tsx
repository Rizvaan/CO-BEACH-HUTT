import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Huts from "@/components/Huts";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Huts />
      <Services />
      <About />
      <Contact />
      <WhatsAppButton />
    </div>
  );
}
