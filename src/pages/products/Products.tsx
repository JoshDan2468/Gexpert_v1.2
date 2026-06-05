import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/pages/home/CTAFooter";
import { productLinks } from "@/pages/products/productLinks";
import ProductsHero from "@/pages/products/ProductsHero";
import ProductsSections from "@/pages/products/sections/ProductsSections";

const Products = () => {
  const location = useLocation();

  useEffect(() => {
    const activeLink =
      productLinks.find((link) => link.detailPath === location.pathname) ??
      productLinks.find((link) => `#${link.sectionId}` === location.hash);

    if (!activeLink) {
      return;
    }

    const scrollToSection = () => {
      const section = document.getElementById(activeLink.sectionId);
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    window.setTimeout(scrollToSection, 120);
  }, [location.hash, location.pathname]);

  return (
    <main className='overflow-x-hidden bg-[#f5f5f2]'>
      <Navbar />
      <ProductsHero />
      <ProductsSections />
      <CTAFooter />
    </main>
  );
};

export default Products;
