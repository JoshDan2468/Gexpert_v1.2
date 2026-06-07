import Navbar from "@/components/Navbar";
import CTAFooter from "@/pages/home/CTAFooter";
import ArticlesHero from "@/pages/articles/ArticlesHero";
import ArticlesListSection from "@/pages/articles/ArticlesListSection";

const Articles = () => (
  <main className='overflow-x-hidden bg-[#f7f7f4]'>
    <Navbar />
    <ArticlesHero />
    <ArticlesListSection />
    <CTAFooter />
  </main>
);

export default Articles;
