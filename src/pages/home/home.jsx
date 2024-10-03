import { motion } from "framer-motion";
import Hero from "../../components/hero";
import WorkSection from "../../components/workSection";
function Home() {
  return (
    <section className="bg-black w-full -mt-2 min-h-[80vh] relative">
      <Hero />
      <WorkSection />
    </section>
  );
}

export default Home;

// Work section
