import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutHeroImage from "@/assets/about/about-hero-grid.jpg";

const aboutCopy = [
  "Global Experts Consultoria is an international based energy, engineering, business and management consulting firm that focuses on supporting its clients to achieve improved performance through providing pragmatic solutions.",
  "The firm is led by strong-willed, experienced managers with track records in major international and local consulting assignments across multi-disciplinary teams.",
  "We help clients build the competence and capability they need to deliver on commitments while offering a full range of high-quality consulting services to both public and private sector organizations.",
];

const AboutHero = () => (
  <section className='grid min-h-[350px] pt-20 lg:grid-cols-[1.2fr_1.1fr]'>
    <div className='relative z-10 flex min-h-[180px] items-center justify-center px-5 py-6 sm:min-h-[250px] sm:px-8 sm:py-8 lg:min-h-0 lg:justify-start lg:px-12 lg:py-10 xl:px-20'>
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className='w-full max-w-[25rem] px-0 py-0 text-center sm:max-w-[34rem] lg:max-w-2xl lg:rounded-lg lg:bg-slate-100 lg:px-7 lg:py-8 lg:text-left lg:shadow-[0_24px_70px_rgba(0,0,0,0.16)] xl:px-9'
      >
        <h1 className='font-display text-[1.35rem] font-black uppercase leading-none tracking-normal text-white sm:text-3xl lg:text-left lg:text-5xl lg:text-[#012402]'>
          About Us
        </h1>
        <div className='mt-4 space-y-3 text-center text-[0.62rem] font-bold leading-4 text-white sm:text-xs sm:leading-5 lg:mt-5 lg:space-y-4 lg:text-left lg:text-[0.95rem] lg:font-normal lg:leading-7 lg:text-[#012402] xl:text-base xl:leading-8'>
          {aboutCopy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </motion.article>
    </div>

    <div className='relative min-h-[0px] overflow-hidden lg:min-h-[430px]'>
      <img
        src={aboutHeroImage}
        alt='Industrial offshore service environment'
        className='absolute inset-0 h-full w-full object-cover'
        loading='eager'
        decoding='async'
        data-lcp='true'
      />
      <div className='absolute inset-0 bg-white/5' />
    </div>
  </section>
);

export default AboutHero;
