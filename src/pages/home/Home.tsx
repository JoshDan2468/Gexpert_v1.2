import { lazy } from "react";
import DeferredSection from "@/components/DeferredSection";
import Navbar from "@/components/Navbar";
import HeroSection from "@/pages/home/HeroSection";

const MissionVisionSection = lazy(
  () => import("@/pages/home/MissionVisionSection"),
);
const ServicesSection = lazy(() => import("@/pages/home/ServicesSection"));
const CTAFooter = lazy(() => import("@/pages/home/CTAFooter"));

const Home = () => (
  <main className='overflow-x-hidden'>
    {/* Site navigation */}
    <Navbar />

    {/* Hero / first impression */}
    <HeroSection />

    {/* Mission and vision section */}
    <DeferredSection minHeight='640px'>
      <MissionVisionSection />
    </DeferredSection>

    {/* Service cards */}
    <DeferredSection minHeight='820px'>
      <ServicesSection />
    </DeferredSection>

    {/* Final call to action */}
    <DeferredSection minHeight='560px' rootMargin='220px'>
      <CTAFooter />
    </DeferredSection>
  </main>
);

export default Home;
