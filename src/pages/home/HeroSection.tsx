import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  AnimatedCounter,
  stats as heroStats,
} from "@/pages/about/StatsSection";
import { Check } from "@/lib/icons";
import heroImage1 from "@/assets/home_assets/image20.jpg";
import heroImage2 from "@/assets/home_assets/image19.jpg";

type HeroImage = {
  src: string;
  alt: string;
};

const defaultHeroImages: HeroImage[] = [
  {
    src: heroImage1,
    alt: "Engineering professionals reviewing infrastructure operations",
  },
  {
    src: heroImage2,
    alt: "Industrial facility supporting high-value asset operations",
  },
];

const defaultHeroFeatures = [
  "Engineering Services",
  "Project Management",
  "Asset Integrity",
];

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

type Props = {
  eyebrow?: string;
  title?: string;
  description?: string[];
  features?: string[];
  images?: HeroImage[];
};

const HeroSection = ({
  eyebrow,
  title,
  description,
  features,
  images,
}: Props) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const statsRef = useRef<HTMLDivElement | null>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  const heroImages = images && images.length ? images : defaultHeroImages;

  // The currently visible hero image.
  const currentImage = useMemo(
    () => heroImages[activeImageIndex],
    [activeImageIndex, heroImages],
  );

  useEffect(() => {
    // Preload all hero images so the transition is smooth.
    heroImages.forEach((image) => {
      const preloadImage = new Image();
      preloadImage.src = image.src;
    });

    // When reduced motion is requested, stop the automatic slideshow.
    if (prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveImageIndex(
        (currentIndex) => (currentIndex + 1) % heroImages.length,
      );
    }, 5600);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <section
      id='hero'
      className='relative isolate overflow-hidden bg-[#012402] pt-20 text-white'
    >
      <div className='relative lg:grid lg:min-h-[600px] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.19fr)]'>
        <motion.div
          initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -34 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className='relative z-20 flex min-h-[480px] flex-col bg-[#0d62b3]/78 text-center sm:min-h-[500px] md:min-h-[530px] lg:min-h-0 lg:bg-[#012402] lg:text-left'
        >
          <div className='flex flex-1 flex-col items-center justify-center px-5 py-7 sm:px-8 sm:py-9 md:px-12 lg:items-start lg:px-14 lg:py-10 xl:px-20'>
            <motion.p
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className='hidden text-left text-xs font-bold uppercase tracking-[0.28em] text-[#a9f3b1] sm:text-sm lg:block'
            >
              {eyebrow ?? "Global Experts Consultoria"}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              className='max-w-[19rem] text-center font-display text-[1.7rem] font-black leading-[1.18] tracking-normal text-white sm:max-w-xl sm:text-3xl md:max-w-2xl md:text-[2.35rem] lg:mt-3 lg:max-w-[14ch] lg:text-left lg:text-[2.65rem] lg:leading-[1.08] xl:text-[2.95rem]'
            >
              {title ??
                "Engineering and asset support for high-value operations."}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.26,
                ease: [0.22, 1, 0.36, 1],
              }}
              className='mt-4 max-w-[24rem] text-center sm:max-w-xl md:max-w-2xl lg:max-w-xl lg:text-left'
            >
              {(description ?? []).length > 0 ? (
                (description ?? []).map((p) => (
                  <p
                    key={p}
                    className='mb-3 text-sm font-semibold leading-6 text-white sm:text-base sm:leading-7 lg:text-white/90'
                  >
                    {p}
                  </p>
                ))
              ) : (
                <p className='text-sm font-semibold leading-6 text-white sm:text-base sm:leading-7 lg:text-white/90'>
                  We deliver practical engineering, project delivery, asset
                  integrity, and maintenance consultancy solutions with clarity,
                  discipline, and execution confidence.
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.36,
                ease: [0.22, 1, 0.36, 1],
              }}
              className='mt-8 grid w-full max-w-[28rem] grid-cols-1 gap-3 text-left sm:grid-cols-3'
            >
              {(features && features.length
                ? features
                : defaultHeroFeatures
              ).map((item) => (
                <div
                  key={item}
                  className='inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition duration-300 hover:bg-white/15'
                >
                  <Check className='h-4 w-4 text-[#a9f3b1]' />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{
              duration: 0.7,
              delay: 0.46,
              ease: [0.22, 1, 0.36, 1],
            }}
            className='w-full overflow-hidden bg-[#a7a7a7] shadow-[0_-1px_0_rgba(255,255,255,0.12)_inset]'
          >
            <div className='grid grid-cols-4 divide-x divide-primary/60'>
              {heroStats.map((stat, index) => {
                const Icon = stat.icon;
                const counterDelay = index * 160;

                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={
                      statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: index * 0.14,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className='flex min-h-[62px] flex-col items-center justify-center px-1 py-1.5 text-center text-primary sm:min-h-[68px] md:min-h-[74px] lg:min-h-[74px] lg:px-3'
                  >
                    <div className='flex items-center justify-center gap-1 font-display text-base font-black leading-none text-primary sm:gap-1.5 sm:text-2xl md:text-3xl lg:text-3xl'>
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix}
                        inView={statsInView}
                        delay={counterDelay}
                      />
                      <Icon className='h-3 w-3 shrink-0 text-primary sm:h-4 sm:w-4 lg:h-5 lg:w-5' />
                    </div>
                    <motion.span
                      initial={{ opacity: 0, y: 6 }}
                      animate={
                        statsInView
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 6 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: 0.18 + index * 0.14,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className='mt-1.5 text-[0.44rem] font-black uppercase tracking-[0.04em] text-primary min-[380px]:text-[0.5rem] sm:text-[0.58rem]'
                    >
                      {stat.label}
                    </motion.span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className='absolute inset-0 z-0 overflow-hidden lg:relative lg:inset-auto lg:z-auto lg:min-h-0'
        >
          {heroImages.map((image, index) => (
            <motion.img
              key={image.src}
              src={image.src}
              alt={image.alt}
              initial={false}
              animate={{
                opacity: index === activeImageIndex ? 1 : 0,
                scale:
                  index === activeImageIndex && !prefersReducedMotion
                    ? 1.035
                    : 1,
              }}
              transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
              className='absolute inset-0 h-full w-full object-cover'
              fetchPriority={index === 0 ? "high" : "auto"}
              loading={index === 0 ? "eager" : "lazy"}
              decoding='async'
              data-lcp={index === 0 ? "true" : undefined}
              width={1920}
              height={1080}
            />
          ))}
          <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(13,98,179,0.62)_0%,rgba(13,98,179,0.48)_48%,rgba(1,36,2,0.24)_100%)] lg:bg-[linear-gradient(90deg,rgba(1,36,2,0.28)_0%,rgba(1,36,2,0.02)_34%,rgba(1,36,2,0)_100%)]' />

          <div className='absolute bottom-6 right-6 z-10 flex gap-2'>
            {heroImages.map((image, index) => (
              <button
                key={image.src}
                type='button'
                aria-label={`Show hero image ${index + 1}`}
                onClick={() => setActiveImageIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  index === activeImageIndex
                    ? "w-9 bg-white"
                    : "w-2.5 bg-white/55 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <p className='sr-only'>{currentImage.alt}</p>
    </section>
  );
};

export default HeroSection;
