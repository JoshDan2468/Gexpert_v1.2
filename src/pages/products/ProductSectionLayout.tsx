import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { ProductPartner } from "@/pages/products/productPartners";

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageVariantsReverse = {
  hidden: { opacity: 0, x: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const textGroupVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export type ProductSectionLayoutProps = {
  id: string;
  title: string;
  short: string;
  summary: string;
  details: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  imageClassName?: string;
  partner?: ProductPartner;
  partners?: ProductPartner[];
};

const ProductSectionLayout = ({
  id,
  title,
  short,
  summary,
  details,
  image,
  imageAlt,
  reverse = false,
  imageClassName,
  partner,
  partners,
}: ProductSectionLayoutProps) => {
  const visiblePartners = partners ?? (partner ? [partner] : []);

  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      className='scroll-mt-28 bg-[#f5f5f2] px-4 py-3 sm:px-6 sm:py-4 lg:px-8'
    >
      <div
        className={`mx-auto grid max-w-6xl items-stretch overflow-hidden rounded-lg bg-white shadow-[0_12px_26px_rgba(15,23,42,0.05)] lg:grid-cols-[0.78fr_1.22fr] ${
          reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
        }`}
      >
        <motion.div
          variants={reverse ? imageVariantsReverse : imageVariants}
          className={`relative min-h-[150px] overflow-hidden bg-[#dfe7ee] sm:min-h-[180px] lg:min-h-full ${
            imageClassName ?? ""
          }`}
        >
          <motion.img
            src={image}
            alt={imageAlt}
            className='absolute inset-0 h-full w-full object-cover'
            loading='lazy'
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(1,36,2,0.12)_0%,rgba(1,36,2,0.02)_45%,rgba(1,36,2,0)_100%)]' />
        </motion.div>

        <motion.div
          variants={textGroupVariants}
          className='flex items-center bg-white px-5 py-4 sm:px-6 sm:py-5 lg:px-7 lg:py-5'
        >
          <div className='mx-auto w-full max-w-2xl overflow-hidden'>
            <motion.h2
              variants={textItemVariants}
              className='text-left text-lg font-black uppercase tracking-[0.04em] text-[#0d62b3] sm:text-xl'
            >
              {title}
            </motion.h2>
            <motion.p
              variants={textItemVariants}
              className='mt-1.5 text-left text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#012402]/65'
            >
              {short}
            </motion.p>
            <motion.div
              variants={textItemVariants}
              className='mt-2.5 h-px w-12 bg-[#0d62b3]/25'
            />
            <motion.p
              variants={textItemVariants}
              className='mt-3 max-w-xl text-left text-[0.82rem] leading-5 text-[#27372a]'
            >
              {summary}
            </motion.p>
            <motion.p
              variants={textItemVariants}
              className='mt-2.5 max-w-xl text-left text-[0.82rem] leading-5 text-[#27372a]'
            >
              {details}
            </motion.p>

            {visiblePartners.length > 0 && (
              <motion.div variants={textItemVariants} className='mt-3'>
                <div className='flex flex-wrap gap-2.5'>
                  {visiblePartners.map((item) => (
                    <Link
                      key={item.name}
                      to={`/contact?product=${encodeURIComponent(title)}&partner=${encodeURIComponent(item.name)}`}
                      aria-label={`Contact us about ${item.name} for ${title}`}
                      title={`Contact us about ${item.name}`}
                      className='group flex h-14 w-24 items-center justify-center rounded-md border border-[#0d62b3]/10 bg-[#f8faf7] px-2.5 shadow-[0_6px_14px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0d62b3]/25 hover:shadow-[0_10px_22px_rgba(15,23,42,0.08)]'
                    >
                      <img
                        src={item.logo}
                        alt={`${item.name} logo`}
                        loading='lazy'
                        className='max-h-10 max-w-full object-contain transition-transform duration-300 group-hover:scale-105'
                      />
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProductSectionLayout;
