import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  BriefcaseBusiness,
  CheckCircle2,
  Globe2,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import statsBackground from "@/assets/home_assets/port.jpg";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Projects Completed",
    icon: CheckCircle2,
  },
  {
    value: 150,
    suffix: "+",
    label: "Global Clients",
    icon: BriefcaseBusiness,
  },
  {
    value: 35,
    suffix: "+",
    label: "Countries Served",
    icon: MapPin,
  },
  {
    value: 25,
    suffix: "+",
    label: "Years of Excellence",
    icon: Globe2,
  },
];

const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);

type CounterProps = {
  target: number;
  suffix: string;
  inView: boolean;
  delay: number;
};

const AnimatedCounter = ({ target, suffix, inView, delay }: CounterProps) => {
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
    const duration = 1900;

    const startCounter = () => {
      const startedAt = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        setCount(Math.round(target * easeOutCubic(progress)));

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
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: delay / 1000 }}
    >
      {count}
      {suffix}
    </motion.span>
  );
};

type Stat = {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
};

const statVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + index * 0.14,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const FloatingStats = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-120px" });

  return (
    <section
      ref={sectionRef}
      className='relative min-h-[420px] overflow-hidden bg-[#012402] py-12 sm:py-14 lg:min-h-[500px]'
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
      <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(1,36,2,0.38)_0%,rgba(1,36,2,0.66)_45%,rgba(0,0,0,0.96)_100%)]' />
      <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(4,91,148,0.22)_0%,rgba(1,36,2,0.08)_46%,rgba(230,178,69,0.18)_100%)]' />

      <div className='container relative z-10 mx-auto flex min-h-[340px] flex-col px-6 sm:min-h-[390px]'>
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className='ml-auto max-w-md rounded-[1.75rem] bg-white/92 px-7 py-7 text-left shadow-[0_24px_70px_rgba(0,0,0,0.26)] backdrop-blur-sm sm:px-9 lg:mr-10'
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

        <div className='mt-auto grid gap-y-6 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:pt-12'>
          {stats.map((stat: Stat, index) => {
            const counterDelay = index * 160;
            const StatIcon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                custom={index}
                variants={statVariants}
                initial='hidden'
                animate={inView ? "visible" : "hidden"}
                className='relative flex min-h-[104px] flex-col items-center justify-center px-6 text-center lg:border-l lg:border-white/45 lg:first:border-l-0'
              >
                <div className='mb-4 flex items-center justify-center gap-3 font-display text-5xl font-bold leading-none text-white drop-shadow-sm md:text-6xl'>
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    inView={inView}
                    delay={counterDelay}
                  />
                  <StatIcon className='h-9 w-9 text-[#f1d36b] md:h-10 md:w-10' />
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

export default FloatingStats;
