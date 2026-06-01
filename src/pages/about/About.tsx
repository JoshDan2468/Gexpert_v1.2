import Navbar from "@/components/Navbar";
import AdvantagesSection from "@/pages/about/AdvantagesSection";
import AboutHero from "@/pages/about/AboutHero";
import CoreValuesSection from "@/pages/about/CoreValuesSection";
import CTAFooter from "@/pages/home/CTAFooter";
import StatsSection from "@/pages/about/StatsSection";

const About = () => (
  <main className='overflow-x-hidden'>
    <Navbar />
    <AboutHero />
    <StatsSection />
    <CoreValuesSection />
    <AdvantagesSection />
    <CTAFooter />
  </main>
);

export default About;
