import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Approach from "./components/Approach";
import Industries from "./components/Industries";
import Insights from "./components/Insights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Approach />
        <Industries />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
