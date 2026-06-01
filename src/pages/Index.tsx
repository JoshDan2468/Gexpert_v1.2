import Navbar from "@/components/Navbar";
import HeroSection from "@/pages/home/HeroSection";
import AboutSection from "@/pages/home/AboutSection";
import ServicesSection from "@/pages/home/ServicesSection";
import StatsSection from "@/pages/about/StatsSection";
import IndustriesSection from "@/pages/home/IndustriesSection";
import CTAFooter from "@/pages/home/CTAFooter";

const Index = () => {
  return (
    <main className='overflow-x-hidden'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <IndustriesSection />
      <CTAFooter />
    </main>
  );
};

export default Index;
