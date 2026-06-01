import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "@/lib/icons";
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

const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Our Partners", to: "/partners" },
  { label: "Articles", to: "/articles" },
  { label: "Guiding Policies", to: "/guiding-policies" },
  { label: "Contact Us", to: "/contact" },
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

const CTAFooter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
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

      <footer className='bg-[#012402] px-6 py-16'>
        <div className='container mx-auto'>
          <div className='mb-12 grid gap-10 sm:grid-cols-2 xl:grid-cols-4'>
            <motion.div
              custom={0}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.15 }}
              variants={footerColumnVariants}
            >
              <Link to='/' className='mb-4 flex items-center gap-2 sm:gap-3'>
                <img
                  src={gexpertLogo}
                  alt='Global Experts Consultoria logo'
                  className='h-10 w-auto rounded-sm bg-white object-contain sm:h-12 lg:h-14'
                />
                <div className='flex flex-col gap-1 leading-tight'>
                  <span className='text-[10px] font-bold uppercase tracking-[0.1em] text-white sm:text-[11px] lg:text-xs'>
                    Global Expert
                  </span>
                  <span className='text-[8px] font-semibold uppercase tracking-[0.14em] text-white/70 sm:text-[9px] lg:text-[11px]'>
                    Consultoria
                  </span>
                </div>
              </Link>
              <p className='text-sm leading-relaxed text-white/60'>
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
              <h4 className='mb-4 text-left font-semibold text-white'>
                Services
              </h4>
              <ul className='space-y-2 text-sm text-white/60'>
                {[
                  "EPCI Consultancy",
                  "Project Management",
                  "Engineering Services",
                  "Research & Development",
                  "Technical Advisory",
                  "Market Intelligence",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      to='/services'
                      className='transition-colors hover:text-white'
                    >
                      {service}
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
              <h4 className='mb-4 text-left font-semibold text-white'>
                Company
              </h4>
              <ul className='space-y-2 text-sm text-white/60'>
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className='transition-colors hover:text-white'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              custom={3}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.15 }}
              variants={footerColumnVariants}
            >
              <h4 className='mb-4 text-left font-semibold text-white'>
                Contact
              </h4>
              <ul className='space-y-3 text-sm text-white/60'>
                <li className='flex items-center gap-2'>
                  <Phone className='h-4 w-4 flex-shrink-0 text-white' />
                  +2348068970938
                </li>
                <li className='flex items-center gap-2'>
                  <Mail className='h-4 w-4 flex-shrink-0 text-white' />
                  info@globalexpertsconsultoria.com
                </li>
                <li className='flex items-center gap-2'>
                  <Mail className='h-4 w-4 flex-shrink-0 text-white' />
                  globalexpertsconsultoria@gmail.com
                </li>
                <li className='flex items-start gap-2'>
                  <MapPin className='mt-0.5 h-4 w-4 flex-shrink-0 text-white' />
                  31 Ademola Street, off Awolowo Road, Ikoyi, Lagos
                </li>
                <li className='flex items-center gap-2'>
                  <Clock className='h-4 w-4 flex-shrink-0 text-white' />
                  Mon - Fri: 8am - 5pm
                </li>
              </ul>
            </motion.div>
          </div>

          <div className='flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-sm text-white/50 md:flex-row md:text-left'>
            <div className='flex flex-col items-center gap-3 md:items-start'>
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
                  className='w-40'
                  loading='lazy'
                />
              </a>
              <p>(c) 2026 GExperts Consultoria Limited. All rights reserved.</p>
            </div>
            <div className='flex flex-wrap justify-center gap-4 md:justify-end md:gap-6'>
              <a href='#' className='transition-colors hover:text-white'>
                Privacy Policy
              </a>
              <a href='#' className='transition-colors hover:text-white'>
                Terms
              </a>
              <Link
                to='/guiding-policies'
                className='transition-colors hover:text-white'
              >
                Guiding Policies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTAFooter;
