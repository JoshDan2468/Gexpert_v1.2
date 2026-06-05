import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { PolicyDetailItem } from "@/pages/guiding-policies/policyData";
import heroImage from "@/assets/home_assets/port.jpg";

type PolicyHeroProps = {
  policy: PolicyDetailItem;
};

const PolicyHero = ({ policy }: PolicyHeroProps) => (
  <section className='grid min-h-[520px] bg-white pt-20 lg:grid-cols-[45%_55%] xl:min-h-[560px]'>
    <motion.div
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className='relative min-h-[300px] overflow-hidden lg:min-h-[480px]'
    >
      <img
        src={heroImage}
        alt='Industrial port and energy operations'
        className='h-full w-full object-cover'
      />
      <div className='absolute inset-0 bg-[#012402]/22' />
    </motion.div>

    <div className='flex items-center px-6 py-14 sm:px-10 lg:px-16'>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className='max-w-[720px] lg:pl-16 xl:pl-20'
      >
        <h1 className='text-4xl font-bold leading-tight text-[#012402] sm:text-5xl lg:text-[3.4rem]'>
          Global Experts Consultoria {policy.subtitle ?? "Guiding Policies"}
        </h1>
        <Link
          to='/contact'
          className='mt-8 inline-flex items-center justify-center rounded-md bg-[#012402] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_28px_rgba(1,36,2,0.18)] transition-colors hover:bg-[#024704]'
        >
          Contact Us
        </Link>
      </motion.div>
    </div>
  </section>
);

export default PolicyHero;
