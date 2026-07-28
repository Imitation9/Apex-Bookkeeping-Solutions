import Hero from "../components/sections/Hero/Hero";
import TrustBar from "../components/sections/Hero/TrustBar";
import Services from "../components/sections/Services/Services";
import About from "../components/sections/About/About";
import Audiences from "../components/sections/Audiences/Audiences";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Audiences />
    </>
  );
}
