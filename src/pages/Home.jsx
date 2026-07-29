import Hero from "../components/sections/Hero/Hero";
import TrustBar from "../components/sections/Hero/TrustBar";
import Services from "../components/sections/Services/Services";
import About from "../components/sections/About/About";
import Audiences from "../components/sections/Audiences/Audiences";
import Process from "../components/sections/Process/Process";
import FAQ from "../components/sections/FAQ/FAQ";
import Consultation from "../components/sections/Consultation/Consultation";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Audiences />
      <Process />
      <FAQ />
      <Consultation />
    </>
  );
}
