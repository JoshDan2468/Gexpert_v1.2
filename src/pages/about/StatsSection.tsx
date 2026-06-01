import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  BriefcaseBusiness,
  Factory,
  Layers3,
  MapPin,
  type LucideIcon,
} from "@/lib/icons";
import statsBackground from "@/assets/home_assets/port.jpg";

// The statistics shown below the hero section.
export const stats = [
  {
    value: 7,
    suffix: "+",
    label: "Global Offices",
    icon: MapPin,
  },
  {
    value: 6,
    suffix: "+",
    label: "Services Offered",
    icon: BriefcaseBusiness,
  },
  {
    value: 10,
    suffix: "+",
    label: "Key Industries",
    icon: Factory,
  },
  {
    value: 3,
    suffix: "",
    label: "Continents",
    icon: Layers3,
  },
];

// A simple easing function used for the animated counter.
const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);

type AnimatedCounterProps = {
  target: number;
  suffix: string;
  inView: boolean;
  delay?: number;
};

// This counter smoothly counts from zero to the target value when it comes into view.
export const AnimatedCounter = ({
  target,
  suffix,
  inView,
  delay = 0,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) {
      return;
    }

    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let frameId = 0;
    let timeoutId = 0;
    const duration = 1800;

    const startCounter = () => {
      const startedAt = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const easedProgress = easeOutCubic(progress);

        setCount(Math.round(target * easedProgress));

        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
          return;
        }

        setCount(target);
      };

      frameId = requestAnimationFrame(tick);
    };

    timeoutId = window.setTimeout(startCounter, delay);

    return () => {
      window.clearTimeout(timeoutId);
      cancelAnimationFrame(frameId);
    };
  }, [delay, inView, prefersReducedMotion, target]);

  return (
    <motion.span
      initial={{ scale: 0.86, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.86, opacity: 0 }}
      transition={{
        duration: 0.65,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {count}
      {suffix}
    </motion.span>
  );
};

type StatItem = {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
};

const cardVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: index * 0.16,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const StatsSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      className='relative min-h-[200px] overflow-hidden bg-[#012402] py-10 sm:py-12 lg:min-h-[180px]'
      ref={ref}
    >
      <motion.img
        src={statsBackground}
        alt=''
        aria-hidden='true'
        className='absolute inset-0 h-full w-full object-cover'
        initial={{ scale: 1.08 }}
        animate={inView ? { scale: 1.01 } : { scale: 1.08 }}
        transition={{ duration: 5, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(1,36,2,0.42)_0%,rgba(1,36,2,0.68)_45%,rgba(0,0,0,0.95)_100%)]' />
      <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(4,91,148,0.24)_0%,rgba(1,36,2,0.08)_45%,rgba(230,178,69,0.18)_100%)]' />

      <div className='container relative z-10 mx-auto flex min-h-[180px] flex-col px-6 sm:min-h-[220px]'>
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className='ml-auto max-w-md rounded-[1.25rem] bg-white/92 px-4 py-4 text-left shadow-[0_24px_70px_rgba(0,0,0,0.26)] backdrop-blur-sm sm:px-6 sm:py-7 lg:mr-10'
        >
          <p className='text-left text-2xl font-bold text-[#0d62b3]'>
            Our Reach
          </p>
          <p className='mt-3 text-left text-base leading-7 text-[#27372a]'>
            Global Experts Consultoria supports clients across multiple African
            markets with practical expertise, strong delivery discipline, and
            broad sector experience.
          </p>
        </motion.div>

        <div className='mt-auto grid gap-y-3 pt-5 sm:grid-cols-2 lg:grid-cols-4 lg:pt-8'>
          {stats.map((stat: StatItem, index) => {
            const counterDelay = index * 160;
            const StatIcon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                custom={index}
                variants={cardVariants}
                initial='hidden'
                animate={inView ? "visible" : "hidden"}
                className='relative flex min-h-[75px] flex-col items-center justify-center px-6 text-center lg:border-l lg:border-white/45 lg:first:border-l-0'
              >
                <div className='mb-3 flex items-center justify-center gap-3 font-display text-4xl font-bold leading-none text-white drop-shadow-sm md:text-5xl'>
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    inView={inView}
                    delay={counterDelay}
                  />
                  <StatIcon className='h-6 w-6 text-[#f1d36b] md:h-7 md:w-7' />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{
                    duration: 0.65,
                    delay: 0.24 + index * 0.16,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className='text-xs font-semibold uppercase tracking-[0.12em] text-white'
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
