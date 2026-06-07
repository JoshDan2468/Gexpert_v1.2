import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
  Youtube,
} from "@/lib/icons";
import gexpertLogo from "@/assets/gexpet logo.jpeg";
import ctaBackground from "@/assets/home_assets/technical.jpg";

const footerColumnVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 + index * 0.08,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const serviceFooterLinks = [
  { label: "Engineering Services", to: "/services/engineering-services" },
  { label: "Project Management", to: "/services/project-management-execution" },
  { label: "Oil and Gas Management", to: "/services/oil-gas-management" },
  { label: "Business Advisory", to: "/services/business-processes" },
] as const;

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "X", href: "#", icon: Twitter },
  { label: "YouTube", href: "#", icon: Youtube },
  { label: "WhatsApp", href: "#", icon: MessageCircle },
] as const;

const positiveSslSealUrl =
  "https://www.positivessl.com/images/seals/positivessl_trust_seal_md_167x42.png";

const getPositiveSslVerificationUrl = () => {
  if (typeof window === "undefined") {
    return "https://www.positivessl.com/the-positivessl-trustlogo";
  }

  const verificationUrl = new URL(
    "https://secure.trust-provider.com/ttb_searcher/trustlogo",
  );
  verificationUrl.searchParams.set("v_querytype", "W");
  verificationUrl.searchParams.set("v_shortname", "CL1");
  verificationUrl.searchParams.set(
    "v_search",
    `${window.location.protocol}//${window.location.host}${window.location.pathname}`,
  );
  verificationUrl.searchParams.set("x", "6");
  verificationUrl.searchParams.set("y", "5");

  return verificationUrl.toString();
};

type CTAFooterProps = {
  showCta?: boolean;
};

const CTAFooter = ({ showCta = true }: CTAFooterProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {showCta && (
        <section
          id='contact'
          className='relative overflow-hidden bg-[#012402] py-16 sm:py-20'
          ref={ref}
        >
          <div className='absolute inset-0'>
            <motion.img
              src={ctaBackground}
              alt=''
              aria-hidden='true'
              className='h-full w-full object-cover'
              initial={{ scale: 1.08 }}
              animate={inView ? { scale: 1.01 } : { scale: 1.08 }}
              transition={{ duration: 4.5, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className='absolute inset-0 bg-[linear-gradient(115deg,rgba(1,36,2,0.94)_0%,rgba(1,36,2,0.82)_42%,rgba(12,107,47,0.62)_100%)]' />
            <div className='absolute inset-0 bg-black/20' />
          </div>
          <div className='absolute inset-0 opacity-20'>
            <div className='absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8b84f] blur-3xl sm:h-[800px] sm:w-[800px]' />
          </div>
          <div className='container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className='mb-6 text-3xl font-bold leading-tight text-white drop-shadow-sm md:text-5xl'>
                Ready to Start Your
                <br />
                <span className='text-[#f1d36b]'>Next Project?</span>
              </h2>
              <p className='mx-auto mb-10 max-w-xl text-base leading-8 text-white/82 sm:text-lg'>
                Partner with Global Experts Consultoria and leverage our
                multi-discipline expertise to deliver exceptional results across
                industries.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.12,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className='flex flex-col items-center justify-center gap-4 sm:flex-row'
              >
                <motion.a
                  href='mailto:info@globalexpertsconsultoria.com'
                  whileHover={{ y: -2, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  className='inline-flex items-center justify-center gap-2 rounded-lg bg-[#f1d36b] px-8 py-4 text-center font-semibold text-[#012402] shadow-[0_18px_35px_rgba(0,0,0,0.22)] transition-all hover:bg-[#ffe28a]'
                >
                  Start a Conversation
                  <ArrowRight className='h-4 w-4' />
                </motion.a>
                <motion.a
                  href='tel:+2348068970938'
                  whileHover={{ y: -2, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  className='inline-flex items-center justify-center rounded-lg border border-white/55 bg-white/10 px-8 py-4 text-center font-semibold text-white shadow-[0_18px_35px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-all hover:border-[#f1d36b] hover:bg-[#f1d36b]/15 hover:text-[#fff4c4]'
                >
                  Call Us Now
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      <footer className='bg-[#012402] px-6 pb-7 pt-10 text-white sm:px-8 lg:px-10'>
        <div className='container mx-auto'>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-[1.15fr_0.9fr_0.85fr_1.3fr] lg:gap-12'>
            <motion.div
              custom={0}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.15 }}
              variants={footerColumnVariants}
            >
              <Link to='/' className='inline-flex flex-col items-start gap-5'>
                <img
                  src={gexpertLogo}
                  alt='Global Experts Consultoria logo'
                  className='h-16 w-16 rounded-md bg-white object-contain p-1.5 sm:h-20 sm:w-20'
                />
                <span className='text-2xl font-bold leading-tight text-white sm:text-3xl'>
                  Global Experts
                </span>
              </Link>
              <p className='mt-4 max-w-xs text-xs leading-6 text-white/72'>
                We are a global company with presence in Lagos-Nigeria,
                Maputo-Mozambique, Freetown-Sierra Leone, Accra-Ghana,
                Kampala-Uganda, Namibia and other Africa countries.
              </p>
            </motion.div>

            <motion.div
              custom={1}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.15 }}
              variants={footerColumnVariants}
            >
              <ul className='space-y-2.5 text-sm font-medium text-white sm:text-base'>
                {serviceFooterLinks.map((service) => (
                  <li key={service.label}>
                    <Link
                      to={service.to}
                      className='transition-colors hover:text-[#a9f3b1]'
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              custom={2}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.15 }}
              variants={footerColumnVariants}
            >
              <h4 className='mb-3 text-left text-sm font-medium text-white sm:text-base'>
                Social:
              </h4>
              <div className='flex flex-wrap gap-2'>
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className='inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#012402] transition-colors hover:bg-[#a9f3b1]'
                  >
                    <Icon className='h-3.5 w-3.5' />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              custom={3}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.15 }}
              variants={footerColumnVariants}
            >
              <ul className='space-y-2.5 text-xs leading-5 text-white/72'>
                <li className='flex items-center gap-2'>
                  <Phone className='h-4 w-4 flex-shrink-0 text-[#a9f3b1]' />
                  <a href='tel:+2348068970938' className='hover:text-white'>
                    +2348068970938
                  </a>
                </li>
                <li className='flex items-center gap-2'>
                  <Mail className='h-4 w-4 flex-shrink-0 text-[#a9f3b1]' />
                  <a
                    href='mailto:info@globalexpertsconsultoria.com'
                    className='break-all hover:text-white'
                  >
                    info@globalexpertsconsultoria.com
                  </a>
                </li>
                <li className='flex items-start gap-2'>
                  <MapPin className='mt-1 h-4 w-4 flex-shrink-0 text-[#a9f3b1]' />
                  <span>31 Ademola Street, off Awolowo Road, Ikoyi, Lagos</span>
                </li>
                <li className='flex items-center gap-2'>
                  <Clock className='h-4 w-4 flex-shrink-0 text-[#a9f3b1]' />
                  Mon - Fri: 8am - 5pm
                </li>
              </ul>
            </motion.div>
          </div>

          <div className='mt-10 border-t border-white/60 pt-6'>
            <div className='flex flex-col items-start justify-between gap-5 text-xs font-medium text-white md:flex-row md:items-center'>
              <a
                href={getPositiveSslVerificationUrl()}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Verify Positive SSL certificate'
                className='inline-flex'
              >
                <img
                  src={positiveSslSealUrl}
                  alt='Positive SSL Secure'
                  className='w-32 rounded-sm bg-white'
                  loading='lazy'
                />
              </a>
              <p className='max-w-4xl'>
                Copyright (c) 2026 GExperts Consultoria Limited. All rights
                reserved | Privacy Policy | Terms |{" "}
                <Link
                  to='/guiding-policies'
                  className='transition-colors hover:text-[#a9f3b1]'
                >
                  Guiding Policies
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTAFooter;
