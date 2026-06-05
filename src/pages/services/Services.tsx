import Navbar from "@/components/Navbar";
import CTAFooter from "@/pages/home/CTAFooter";
import ServicesAreasSection from "./ServicesAreasSection";
import ServicesContactBand from "./ServicesContactBand";
import ServicesDetailBand from "./ServicesDetailBand";
import ServicesHero from "./ServicesHero";
import ServicesIntroSection from "./ServicesIntroSection";

const Services = () => (
  <main className='overflow-x-hidden bg-[#eef2f4] text-[#1b2a1d]'>
    <Navbar />
    <ServicesHero />
    <ServicesIntroSection />
    <ServicesDetailBand />
    <ServicesAreasSection />
    <ServicesContactBand />
    <CTAFooter showCta={false} />
  </main>
);

export default Services;
