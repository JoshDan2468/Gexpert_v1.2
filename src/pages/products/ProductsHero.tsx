import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/home_assets/image10.jpg";

const ProductsHero = () => (
  <section className='grid min-h-[430px] pt-20 lg:grid-cols-[0.8fr_1.2fr]'>
    <div className='flex items-center bg-[#012402] px-6 py-16 sm:px-10 lg:px-16'>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className='max-w-xl'
      >
        <h1 className='text-left text-4xl font-black leading-[1.18] text-white sm:text-5xl lg:text-[3.4rem]'>
          Trusted Products for Technical Operations
        </h1>
        <div className='mt-7 flex flex-wrap gap-4'>
          <Link
            to='/contact'
            className='inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-bold text-[#012402] transition-colors hover:bg-[#a9f3b1]'
          >
            Contact Us
          </Link>
          <a
            href='#digitalization-edge'
            className='inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-bold text-[#012402] transition-colors hover:bg-[#a9f3b1]'
          >
            View Products
          </a>
        </div>
      </motion.div>
    </div>
    <div className='relative min-h-[300px] overflow-hidden lg:min-h-[430px]'>
      <img
        src={heroImage}
        alt='Industrial products and technical equipment'
        className='absolute inset-0 h-full w-full object-cover'
        loading='eager'
        decoding='async'
        data-lcp='true'
      />
      <div className='absolute inset-0 bg-white/5' />
    </div>
  </section>
);

export default ProductsHero;
