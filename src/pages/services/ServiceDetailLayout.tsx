import type { ElementType } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronRight } from "@/lib/icons";
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
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 as const },
  transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const },
};

const exploreCards = [
  {
    title: "Engineering Services",
    copy: "Technical design, field development, procurement support, and delivery assurance for complex industrial projects.",
    to: "/services/engineering-services",
  },
  {
    title: "Business Advisory",
    copy: "Practical advisory support for process improvement, performance, cost control, risk, and business setup needs.",
    to: "/services/business-processes",
  },
  {
    title: "Project Management",
    copy: "Structured planning, coordination, cost control, progress reporting, and project execution support.",
    to: "/services/project-management-execution",
  },
] as const;

const buildTopicList = (
  title: string,
  sections: ServiceSectionGroup[],
  process: string[],
) => {
  const topics = sections.length
    ? sections.map((section) => section.title)
    : [
        "Why choose Global Experts for this service?",
        "Summary of the process we follow",
        "Service scope and delivery approach",
      ];

  return [title, ...topics, ...(process.length ? ["Process and reporting"] : [])]
    .slice(0, 7);
};

const buildIncludedItems = (
  capabilities: string[],
  featureCards: ServiceFeatureCard[],
) => {
  const featureBullets = featureCards.flatMap((feature) => feature.bullets);
  return [...capabilities.slice(0, 4), ...featureBullets].slice(0, 8);
};

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
  ctaLabel = "Contact Us",
}: ServiceDetailLayoutProps) => {
  const imageCard = imageSectionImage ?? heroImage;
  const imageCardAlt = imageSectionImageAlt ?? heroImageAlt;
  const topicList = buildTopicList(title, sections, process);
  const includedItems = buildIncludedItems(capabilities, featureCards);
  const deepDiveItems = [
    ...outcomes,
    ...sections.flatMap((section) =>
      section.description ? [section.description, ...section.items] : section.items,
    ),
    ...process,
  ].slice(0, 8);
  const faqItems = [
    `What is ${title}?`,
    `What is included in ${title}?`,
    `How can Global Experts Consultoria support ${title}?`,
  ];

  return (
    <main className='overflow-x-hidden bg-white text-[#25302a]'>
      <Navbar />

      <section className='grid min-h-[430px] pt-20 lg:grid-cols-[0.95fr_1.2fr]'>
        <div className='relative min-h-[300px] overflow-hidden lg:min-h-[430px]'>
          <img
            src={heroImage}
            alt={heroImageAlt}
            className='absolute inset-0 h-full w-full object-cover'
            loading='eager'
            decoding='async'
            data-lcp='true'
          />
        </div>
        <div className='flex items-center bg-white px-6 py-14 sm:px-10 lg:px-16'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className='max-w-2xl'
          >
            <p className='text-left text-xs font-black uppercase tracking-[0.16em] text-[#0b5f12]'>
              {eyebrow}
            </p>
            <h1 className='mt-4 text-left text-4xl font-black leading-[1.12] text-[#075c11] sm:text-5xl'>
              {title}
            </h1>
            <p className='mt-5 max-w-2xl text-left text-sm font-medium leading-7 text-[#34473a]'>
              {summary}
            </p>
            <Link
              to={ctaLink}
              className='mt-7 inline-flex items-center justify-center rounded-md bg-[#012402] px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-[#024704]'
            >
              {ctaLabel}
            </Link>
          </motion.div>
        </div>
      </section>

      <div className='bg-[#075c11] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-white/82 sm:px-10 lg:px-16'>
        <div className='container mx-auto flex flex-wrap items-center gap-2'>
          <Link to='/' className='hover:text-white'>Home</Link>
          <ChevronRight className='h-3 w-3' />
          <Link to='/services' className='hover:text-white'>Services</Link>
          <ChevronRight className='h-3 w-3' />
          <span className='text-white'>{title}</span>
        </div>
      </div>

      <section className='px-6 py-16 sm:px-10 lg:px-16 lg:py-20'>
        <div className='container mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]'>
          <motion.div {...fadeInUp}>
            <p className='text-left text-sm leading-7 text-[#48584d]'>
              {intro}
            </p>
            <p className='mt-5 text-left text-sm leading-7 text-[#48584d]'>
              {imageSectionCopy}
            </p>

            <h2 className='mt-8 text-left text-sm font-black uppercase tracking-[0.08em] text-[#075c11]'>
              What is included in our services
            </h2>
            <div className='mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2'>
              {includedItems.map((item) => (
                <div key={item} className='flex items-start gap-2 text-sm leading-6 text-[#33443a]'>
                  <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#075c11]' />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <img
              src={imageCard}
              alt={imageCardAlt}
              loading='lazy'
              className='h-[280px] w-full object-cover sm:h-[340px] lg:h-[360px]'
            />
          </motion.div>
        </div>
      </section>

      <section className='bg-[#eef2f5] px-6 py-16 shadow-[0_8px_24px_rgba(15,23,42,0.08)] sm:px-10 lg:px-16 lg:py-20'>
        <div className='container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[240px_1fr]'>
          <motion.aside {...fadeInUp}>
            <h2 className='text-left text-2xl font-black uppercase leading-tight text-[#075c11]'>
              {title}
            </h2>
            <nav className='mt-6 divide-y divide-[#bfd0c4]'>
              {topicList.map((topic, index) => (
                <a
                  key={topic}
                  href={index === 0 ? "#service-details" : "#service-details"}
                  className={`block py-3 text-left text-sm font-bold leading-5 ${
                    index === 0 ? "text-[#075c11]" : "text-[#75817a]"
                  } transition-colors hover:text-[#075c11]`}
                >
                  {topic}
                </a>
              ))}
            </nav>
          </motion.aside>

          <motion.article id='service-details' {...fadeInUp}>
            <img
              src={imageCard}
              alt={imageCardAlt}
              loading='lazy'
              className='h-[260px] w-full object-cover sm:h-[340px]'
            />

            <div className='mt-8 space-y-5 text-sm leading-7 text-[#3d4f43]'>
              <p>
                <strong className='font-black uppercase text-[#075c11]'>
                  {imageSectionTitle}:
                </strong>{" "}
                {summary}
              </p>
              {deepDiveItems.map((item, index) => (
                <p key={`${item}-${index}`}>
                  <strong className='font-black uppercase text-[#075c11]'>
                    {index < featureCards.length
                      ? featureCards[index]?.title
                      : index % 2 === 0
                        ? "Delivery"
                        : "Support"}
                    :
                  </strong>{" "}
                  {item}
                </p>
              ))}
            </div>

            <Link
              to={ctaLink}
              className='mt-7 inline-flex items-center justify-center rounded-md bg-[#012402] px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-[#024704]'
            >
              Connect with Our Experts
            </Link>
          </motion.article>
        </div>
      </section>

      <section className='bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-20'>
        <motion.div {...fadeInUp} className='container mx-auto max-w-3xl'>
          <h2 className='text-center text-2xl font-black text-[#075c11]'>
            Information Hub: Questions on {title}
          </h2>
          <div className='mt-10 divide-y divide-[#ccd7cf]'>
            {faqItems.map((question) => (
              <details key={question} className='group py-4'>
                <summary className='flex cursor-pointer list-none items-center gap-3 text-sm font-bold text-[#647168]'>
                  <ChevronDown className='h-4 w-4 -rotate-90 transition-transform group-open:rotate-0' />
                  {question}
                </summary>
                <p className='mt-3 pl-7 text-sm leading-7 text-[#526257]'>
                  {summary}
                </p>
              </details>
            ))}
          </div>
        </motion.div>
      </section>

      <section className='bg-white px-6 pb-16 pt-8 sm:px-10 lg:px-16 lg:pb-20'>
        <div className='container mx-auto max-w-6xl'>
          <motion.h2
            {...fadeInUp}
            className='text-center text-2xl font-black text-[#075c11]'
          >
            Explore the possibilities
          </motion.h2>
          <div className='mt-10 grid gap-6 md:grid-cols-3'>
            {exploreCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className='border border-[#b8c9bd] bg-white p-7'
              >
                <h3 className='text-left text-lg font-black text-[#075c11]'>
                  {card.title}
                </h3>
                <p className='mt-5 min-h-[116px] text-left text-sm leading-7 text-[#45584a]'>
                  {card.copy}
                </p>
                <Link
                  to={card.to}
                  className='mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#075c11] transition-colors hover:text-[#012402]'
                >
                  View more
                  <ArrowRight className='h-4 w-4' />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTAFooter showCta={false} />
    </main>
  );
};

export default ServiceDetailLayout;
