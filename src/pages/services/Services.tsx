import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/pages/home/CTAFooter";
import {
  ArrowRight,
  Check,
  ClipboardList,
  Factory,
  Handshake,
  ShieldCheck,
  Settings2,
  Target,
  Wrench,
} from "@/lib/icons";
import meetingImage from "@/assets/about/teamwork.png";
import offshoreImage from "@/assets/home_assets/oil_fac.jpg";
import procurementImage from "@/assets/home_assets/port.jpg";
import subseaImage from "@/assets/services/asset.jpg";
import ownerImage from "@/assets/services/pipe2.jpg";
import implementationImage from "@/assets/services/engin.jpg";
import heroImage from "@/assets/services/pipe.jpg";

const featureCards = [
  {
    icon: Wrench,
    title: "Engineering & Consultancy",
    copy: "We support offshore construction, conversion, field development, and engineering delivery from concept to detailed design.",
    bullets: [
      "Offshore project management",
      "Pre-FEED, FEED, and detailed design",
      "Greenfield and brownfield development",
    ],
    link: "/services/engineering-services",
    cta: "View Engineering Services",
  },
  {
    icon: ShieldCheck,
    title: "Asset Integrity & O&M",
    copy: "We help clients improve asset performance, meet regulations, and maximize value from asset-based investments.",
    bullets: [
      "Asset management consulting",
      "Operations and maintenance support",
      "Performance improvement",
    ],
    link: "/services/oil-gas-management",
    cta: "Explore Asset Integrity",
  },
  {
    icon: Factory,
    title: "Procurement & Installation",
    copy: "Our procurement, construction, and installation capabilities help clients transform project management and field services.",
    bullets: [
      "Procurement management",
      "Construction capability",
      "Installation consulting",
    ],
    link: "/services/project-management-execution",
    cta: "Explore Project Delivery",
  },
] as const;

const serviceCards = [
  {
    eyebrow: "Engineering Services & Consultancy",
    title: "Offshore and field development support from concept to execution.",
    copy: "We provide teams that work with clients throughout construction or conversion of offshore assets. Our project management team monitors contract requirements, specifications, expectations, class rules, and flag requirements while field development work connects reservoir, subsea, and topside facilities.",
    image: offshoreImage,
    imageAlt: "Offshore asset and marine engineering support",
    link: "/services/engineering-services",
    cta: "View Engineering Services",
  },
  {
    eyebrow: "OEM Representatives & Support Services",
    title: "Connecting global OEM capability with local project execution.",
    copy: "GExperts promotes globally competent OEMs and assists clients in developing robust in-country capabilities that can compete internationally and operate safely, economically, and efficiently.",
    image: implementationImage,
    imageAlt: "Technical support and equipment service coordination",
    link: "/services/business-processes",
    cta: "Discover Support Services",
  },
  {
    eyebrow: "Procurement, Construction & Installation",
    title: "Practical delivery capability for project management and field services.",
    copy: "Our procurement management, construction, and installation capability supports clients who need stronger control across planning, sourcing, construction readiness, installation, and service delivery.",
    image: procurementImage,
    imageAlt: "Industrial port and procurement logistics",
    link: "/services/project-management-execution",
    cta: "View Project Execution",
  },
  {
    eyebrow: "Owner's Engineering",
    title: "Independent engineering support for decisions before execution.",
    copy: "We help clients specify requirements, evaluate site conditions and technology options, manage pre-FEED and FEED processes, reduce risk, and add experienced engineering judgment to contracting, scheduling, and execution strategy.",
    image: ownerImage,
    imageAlt: "Pipeline and owner's engineering review",
    link: "/services/engineering-services",
    cta: "Explore Owner's Engineering",
  },
  {
    eyebrow: "Subsea Structures Engineering & Consultancy",
    title: "Subsea planning, installation studies, inspection, and repair support.",
    copy: "Our subsea support covers installation studies, vessel mobilization, pipeline route design, installation risk, subsea inspections, construction, protection cables, maintenance, and repairs for deepwater projects.",
    image: subseaImage,
    imageAlt: "Subsea and offshore asset integrity support",
    link: "/services/oil-gas-management",
    cta: "Explore Subsea Support",
  },
] as const;

const additionalServices = [
  {
    icon: Target,
    title: "Technical Due Diligence & Advisory",
    copy: "We help clients make better business decisions through technical due diligence and practical advisory support.",
  },
  {
    icon: Handshake,
    title: "Client Reps & Secondments",
    copy: "We provide representation and secondment support for projects that need experienced technical oversight.",
  },
  {
    icon: Settings2,
    title: "Local Content Consultancy",
    copy: "We guide organizations on local content capability, in-country capacity, and sustainable community value.",
  },
  {
    icon: ClipboardList,
    title: "Other Services",
    copy: "We adapt advisory, project, research, and operational support around the needs of each client environment.",
  },
] as const;

const Services = () => (
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
          className='max-w-3xl'
        >
          <p className='text-left text-xs font-black uppercase tracking-[0.18em] text-white/48'>
            Services
          </p>
          <h1 className='mt-5 text-left text-[2.55rem] font-black leading-[1.03] text-white sm:text-6xl lg:max-w-4xl lg:text-[4.6rem]'>
            Our Core Services
          </h1>
          <p className='mt-8 max-w-2xl text-left text-base font-bold leading-8 text-white/78'>
            Engineering, offshore project support, asset integrity, OEM
            representation, procurement, installation, and advisory services for
            clients operating in demanding technical environments.
          </p>
        </motion.div>
      </div>
    </section>

    <section className='border-t-2 border-[#001c18] bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24'>
      <div className='container mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20'>
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className='text-left text-4xl font-black leading-[1.05] text-[#242424] sm:text-5xl'>
            We support complex projects from technical planning to field delivery.
          </h2>
          <p className='mt-9 text-left text-base leading-8 text-[#69736f]'>
            Offshore, industrial, and infrastructure projects need more than
            generic consulting.
          </p>
          <p className='mt-5 max-w-md text-left text-base leading-8 text-[#69736f]'>
            That is why our work combines engineering judgment, project control,
            supplier support, asset performance thinking, and local execution
            capability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className='overflow-hidden'
        >
          <img
            src={meetingImage}
            alt='Consultants working with client teams'
            className='h-[280px] w-full object-cover sm:h-[360px] lg:h-[380px]'
            loading='lazy'
          />
        </motion.div>
      </div>
    </section>

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
              <Link
                to={feature.link}
                className='mt-8 inline-flex items-center gap-2 text-sm font-black text-[#356b63] transition-colors hover:text-[#315cf4]'
              >
                {feature.cta}
              </Link>
            </motion.article>
          );
        })}
      </div>
    </section>

    <section className='bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28'>
      <div className='container mx-auto max-w-6xl space-y-14'>
        {serviceCards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className='overflow-hidden rounded-lg border border-[#dde5e1] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.05)]'
          >
            <div className='grid lg:grid-cols-[1fr_1fr]'>
              <div className='flex min-h-[300px] items-center px-8 py-10 sm:px-12 lg:min-h-[320px]'>
                <div className='max-w-lg'>
                  <p className='text-left text-lg font-black text-[#242b29]'>
                    {card.eyebrow}
                  </p>
                  <h3 className='mt-6 text-left text-2xl font-black leading-tight text-[#242b29] sm:text-3xl'>
                    {card.title}
                  </h3>
                  <p className='mt-5 text-left text-sm font-semibold leading-7 text-[#4f5f5a]'>
                    {card.copy}
                  </p>
                  <Link
                    to={card.link}
                    className='mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#315cf4] px-7 py-3 text-xs font-black text-white shadow-[0_14px_30px_rgba(49,92,244,0.22)] transition-transform hover:-translate-y-0.5'
                  >
                    {card.cta}
                    <ArrowRight className='h-3.5 w-3.5' />
                  </Link>
                </div>
              </div>
              <div className='relative min-h-[260px] overflow-hidden bg-[#e9fbfb] lg:min-h-[320px]'>
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  loading='lazy'
                  className={`absolute inset-0 h-full w-full object-cover ${
                    index === 1 ? "object-right" : "object-center"
                  }`}
                />
                <div className='absolute inset-0 bg-[#dff8f6]/10' />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>

    <section className='bg-[#f7fbf9] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24'>
      <div className='container mx-auto max-w-6xl'>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className='max-w-3xl'
        >
          <p className='text-left text-xs font-black uppercase tracking-[0.18em] text-[#356b63]'>
            Advisory Support
          </p>
          <h2 className='mt-4 text-left text-4xl font-black leading-tight text-[#242424] sm:text-5xl'>
            Additional services that strengthen project decisions.
          </h2>
        </motion.div>

        <div className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
          {additionalServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className='rounded-lg border border-[#dde5e1] bg-white p-6 shadow-[0_16px_34px_rgba(15,23,42,0.05)]'
              >
                <Icon className='h-7 w-7 text-[#0b3b12]' />
                <h3 className='mt-6 text-left text-lg font-black text-[#242b29]'>
                  {service.title}
                </h3>
                <p className='mt-4 text-sm font-semibold leading-7 text-[#4f5f5a]'>
                  {service.copy}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>

    <CTAFooter />
  </main>
);

export default Services;
