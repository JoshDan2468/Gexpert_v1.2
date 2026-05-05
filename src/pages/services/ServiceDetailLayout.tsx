import type { ElementType } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, CheckCircle2, Target } from "@/lib/icons";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/pages/home/CTAFooter";

export type ServiceFeatureCard = {
  icon: ElementType;
  title: string;
  copy: string;
  bullets: string[];
};

export type ServiceSectionGroup = {
  title: string;
  description?: string;
  items: string[];
};

export type ServiceDetailLayoutProps = {
  eyebrow: string;
  title: string;
  summary: string;
  intro: string;
  heroImage: string;
  heroImageAlt: string;
  imageSectionTitle: string;
  imageSectionCopy: string;
  imageSectionImage?: string;
  imageSectionImageAlt?: string;
  featureCards: ServiceFeatureCard[];
  capabilities: string[];
  outcomes: string[];
  process?: string[];
  sections?: ServiceSectionGroup[];
  ctaLink?: string;
  ctaLabel?: string;
};

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 as const },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const ServiceList = ({
  items,
  dark = false,
}: {
  items: string[];
  dark?: boolean;
}) => (
  <div className='space-y-4'>
    {items.map((item) => (
      <div
        key={item}
        className={`flex items-start gap-3 ${
          dark ? "rounded-lg border border-white/10 bg-white/6 px-4 py-4" : ""
        }`}
      >
        {dark ? (
          <Target className='mt-1 h-5 w-5 shrink-0 text-[#a9f3b1]' />
        ) : (
          <CheckCircle2 className='mt-1 h-5 w-5 shrink-0 text-[#0b3b12]' />
        )}
        <p
          className={`text-sm leading-7 ${
            dark ? "text-white/86" : "text-[#526654]"
          }`}
        >
          {item}
        </p>
      </div>
    ))}
  </div>
);

const ServiceDetailLayout = ({
  eyebrow,
  title,
  summary,
  intro,
  heroImage,
  heroImageAlt,
  imageSectionTitle,
  imageSectionCopy,
  imageSectionImage,
  imageSectionImageAlt,
  featureCards,
  capabilities,
  outcomes,
  process = [],
  sections = [],
  ctaLink = "/contact",
  ctaLabel = "Request Consultation",
}: ServiceDetailLayoutProps) => {
  const imageCard = imageSectionImage ?? heroImage;
  const imageCardAlt = imageSectionImageAlt ?? heroImageAlt;

  return (
    <main className='overflow-x-hidden bg-white text-[#19211f]'>
      <Navbar />

      <section className='relative isolate overflow-hidden bg-[#001c18] px-5 pb-24 pt-32 sm:px-8 sm:pb-28 sm:pt-40 lg:px-10 lg:pb-32 lg:pt-44'>
        <div className='absolute inset-0'>
          <img
            src={heroImage}
            alt=''
            aria-hidden='true'
            className='h-full w-full object-cover opacity-35'
            loading='eager'
            decoding='async'
            data-lcp='true'
          />
          <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(0,28,24,0.96)_0%,rgba(0,28,24,0.86)_46%,rgba(0,28,24,0.72)_100%)]' />
        </div>

        <div className='container relative z-10 mx-auto max-w-6xl'>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className='max-w-4xl'
          >
            <p className='text-left text-xs font-black uppercase tracking-[0.18em] text-white/48'>
              {eyebrow}
            </p>
            <h1 className='mt-5 text-left text-[2.55rem] font-black leading-[1.03] text-white sm:text-6xl lg:text-[4.6rem]'>
              {title}
            </h1>
            <p className='mt-8 max-w-3xl text-left text-base font-bold leading-8 text-white/78'>
              {summary}
            </p>
          </motion.div>
        </div>
      </section>

      <section className='border-t-2 border-[#001c18] bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24'>
        <div className='container mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20'>
          <motion.div {...fadeInUp}>
            <h2 className='text-left text-4xl font-black leading-[1.05] text-[#242424] sm:text-5xl'>
              {imageSectionTitle}
            </h2>
            <p className='mt-9 text-left text-base leading-8 text-[#69736f]'>
              {imageSectionCopy}
            </p>
            <p className='mt-5 max-w-xl text-left text-base leading-8 text-[#69736f]'>
              {intro}
            </p>
            <Link
              to={ctaLink}
              className='mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#315cf4] px-7 py-3 text-xs font-black text-white shadow-[0_14px_30px_rgba(49,92,244,0.22)] transition-transform hover:-translate-y-0.5'
            >
              {ctaLabel}
              <ArrowRight className='h-3.5 w-3.5' />
            </Link>
          </motion.div>

          <motion.div {...fadeInUp} className='overflow-hidden'>
            <img
              src={imageCard}
              alt={imageCardAlt}
              loading='lazy'
              className='h-[280px] w-full object-cover sm:h-[360px] lg:h-[380px]'
            />
          </motion.div>
        </div>
      </section>

      {featureCards.length > 0 ? (
        <section className='bg-[#dff8f6] px-5 py-16 sm:px-8 lg:px-10 lg:py-20'>
          <div className='container mx-auto grid max-w-6xl gap-12 md:grid-cols-3 md:gap-14'>
            {featureCards.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className='text-left'
                >
                  <Icon className='h-7 w-7 text-[#102320]' />
                  <h3 className='mt-8 text-left text-xl font-black text-[#27302e]'>
                    {feature.title}
                  </h3>
                  <p className='mt-4 text-left text-sm font-semibold leading-7 text-[#40514d]'>
                    {feature.copy}
                  </p>
                  <ul className='mt-6 space-y-3'>
                    {feature.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className='flex items-start gap-3 text-sm leading-6 text-[#263733]'
                      >
                        <Check className='mt-1 h-3.5 w-3.5 flex-shrink-0 text-[#315cf4]' />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </section>
      ) : null}

      <section className='bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28'>
        <div className='container mx-auto max-w-6xl space-y-12'>
          <motion.article
            {...fadeInUp}
            className='overflow-hidden rounded-lg border border-[#dde5e1] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.05)]'
          >
            <div className='grid lg:grid-cols-[0.9fr_1.1fr]'>
              <div className='flex min-h-[300px] items-center px-8 py-10 sm:px-12 lg:min-h-[320px]'>
                <div className='max-w-lg'>
                  <p className='text-left text-lg font-black text-[#242b29]'>
                    Core Capabilities
                  </p>
                  <h3 className='mt-6 text-left text-2xl font-black leading-tight text-[#242b29] sm:text-3xl'>
                    What this service covers
                  </h3>
                  <p className='mt-5 text-left text-sm font-semibold leading-7 text-[#4f5f5a]'>
                    The scope below keeps the original page information intact
                    while presenting it in the same service-page structure.
                  </p>
                </div>
              </div>
              <div className='bg-[#f7fbf9] px-8 py-10 sm:px-12'>
                <ServiceList items={capabilities} />
              </div>
            </div>
          </motion.article>

          <motion.article
            {...fadeInUp}
            className='overflow-hidden rounded-lg border border-[#dde5e1] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.05)]'
          >
            <div className='grid lg:grid-cols-[0.9fr_1.1fr]'>
              <div className='flex min-h-[300px] items-center px-8 py-10 sm:px-12 lg:min-h-[320px]'>
                <div className='max-w-lg'>
                  <p className='text-left text-lg font-black text-[#242b29]'>
                    Delivery Outcomes
                  </p>
                  <h3 className='mt-6 text-left text-2xl font-black leading-tight text-[#242b29] sm:text-3xl'>
                    What clients can expect
                  </h3>
                  <p className='mt-5 text-left text-sm font-semibold leading-7 text-[#4f5f5a]'>
                    These outcomes are drawn from the existing service page
                    content and grouped for clearer reading.
                  </p>
                </div>
              </div>
              <div className='bg-[#0c2314] px-8 py-10 text-white sm:px-12'>
                <ServiceList items={outcomes} dark />
              </div>
            </div>
          </motion.article>

          {process.length > 0 ? (
            <motion.article
              {...fadeInUp}
              className='overflow-hidden rounded-lg border border-[#dde5e1] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.05)]'
            >
              <div className='grid lg:grid-cols-[0.9fr_1.1fr]'>
                <div className='flex min-h-[280px] items-center px-8 py-10 sm:px-12'>
                  <div className='max-w-lg'>
                    <p className='text-left text-lg font-black text-[#242b29]'>
                      Delivery Process
                    </p>
                    <h3 className='mt-6 text-left text-2xl font-black leading-tight text-[#242b29] sm:text-3xl'>
                      How the work is organized
                    </h3>
                  </div>
                </div>
                <div className='grid gap-4 bg-[#f7fbf9] px-8 py-10 sm:px-12 lg:grid-cols-2'>
                  {process.map((step, index) => (
                    <div key={step} className='flex gap-4 rounded-lg bg-white p-5'>
                      <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0b3b12] text-sm font-bold text-white'>
                        {index + 1}
                      </div>
                      <p className='pt-1 text-sm leading-7 text-[#526654]'>
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ) : null}

          {sections.map((group) => (
            <motion.article
              key={group.title}
              {...fadeInUp}
              className='overflow-hidden rounded-lg border border-[#dde5e1] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.05)]'
            >
              <div className='grid lg:grid-cols-[0.9fr_1.1fr]'>
                <div className='flex min-h-[260px] items-center px-8 py-10 sm:px-12'>
                  <div className='max-w-lg'>
                    <p className='text-left text-lg font-black text-[#242b29]'>
                      {group.title}
                    </p>
                    {group.description ? (
                      <p className='mt-5 text-left text-sm font-semibold leading-7 text-[#4f5f5a]'>
                        {group.description}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className='bg-[#f7fbf9] px-8 py-10 sm:px-12'>
                  <ServiceList items={group.items} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <CTAFooter />
    </main>
  );
};

export default ServiceDetailLayout;
