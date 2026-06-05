import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
  MessageCircle,
} from "@/lib/icons";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/home_assets/image11.jpg";

/**
 * Contact Page Component
 *
 * Features:
 * - Hero section with animated background
 * - Office locations with country flags
 * - Contact form
 * - Interactive map
 * - Social media links
 */

const smoothEase = [0.22, 1, 0.36, 1] as const;

// Office locations data with flag images and contact details
const officeLocations = [
  {
    country: "Nigeria",
    flagAlt:
      "Flag of Nigeria waving with highly detailed textile texture pattern",
    flagSrc: "https://flagcdn.com/w160/ng.png", // Nigeria flag
    address: "Head Office\nGExperts Consultoria Limited,\nLagos, Nigeria.",
    whatsapp: "(+234)-80683446254",
    status: null,
  },
  {
    country: "Ghana",
    flagAlt: "Image of the flag of Ghana. Series Africa",
    flagSrc: "https://flagcdn.com/w160/gh.png", // Ghana flag
    address: "Ghana Office\nGExperts Consultoria Limited,\nAccra, Ghana.",
    whatsapp: "(+234)-8068336254",
    status: null,
  },
  {
    country: "Sierra Leone",
    flagAlt: "Flag of Sierra Leone",
    flagSrc: "https://flagcdn.com/w160/sl.png", // Sierra Leone flag
    address:
      "Sierra Leone Office\nGlobal Experts Consultoria Limited,\nFreetown, Sierra Leone.",
    whatsapp: "(+234)-80683446254",
    status: null,
  },
  {
    country: "Uganda",
    flagAlt: "3d render Uganda Flag (Close-up)",
    flagSrc: "https://flagcdn.com/w160/ug.png", // Uganda flag
    address: "Uganda Office\nGExperts Consultoria Limited,\nKampala, Uganda.",
    whatsapp: "(+234)-80683446254",
    status: "(Registration in Progress)",
  },
  {
    country: "Mozambique",
    flagAlt: "Mozambique flag",
    flagSrc: "https://flagcdn.com/w160/mz.png", // Mozambique flag
    address:
      "Mozambique Office\nGlobal Experts Consultoria Limitada,\nMaputo, Mozambique.",
    whatsapp: "(+234)-80683446254",
    status: null,
  },
  {
    country: "Namibia",
    flagAlt: "Namibia flag",
    flagSrc: "https://flagcdn.com/w160/na.png", // Namibia flag
    address:
      "Namibia Office\nGExpats-Felikanah Consultating Services (PTY) Limited & BIDQ Consultating Services (PTY) Limited\nWindhoek, Namibia.",
    whatsapp: "(+234)-80683446254",
    status: null,
  },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: smoothEase,
    },
  },
};

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const location = useLocation();
  const contactParams = new URLSearchParams(location.search);
  const productInterest = contactParams.get("product");
  const partnerInterest = contactParams.get("partner");
  const hasProductPartnerInterest = Boolean(productInterest || partnerInterest);
  const inquirySubject =
    productInterest && partnerInterest
      ? `Partner inquiry: ${partnerInterest} for ${productInterest}`
      : productInterest
        ? `Product inquiry: ${productInterest}`
        : "";
  const inquiryMessage =
    productInterest && partnerInterest
      ? `I would like to speak with your team about ${partnerInterest} for ${productInterest}.`
      : productInterest
        ? `I would like to speak with your team about ${productInterest}.`
        : "";

  return (
    <main className='overflow-x-hidden bg-white'>
      <Navbar />

      {/* Hero Section */}
      <section
        className='relative isolate overflow-hidden px-4 pb-10 pt-28 sm:px-6 sm:pb-12 sm:pt-32 lg:px-8'
        ref={ref}
      >
        <div className='absolute inset-0'>
          <motion.img
            src={heroImage}
            alt=''
            aria-hidden='true'
            className='h-full w-full object-cover'
            width={712}
            height={1024}
            fetchpriority='high'
            animate={
              inView
                ? {
                    scale: [1, 1.03, 1.01, 1],
                    x: [0, 10, -8, 0],
                    y: [0, -8, 10, 0],
                  }
                : {}
            }
            transition={{
              duration: 22,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(1,38,31,0.7)_0%,rgba(1,38,31,0.82)_100%)]' />
        </div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={inView ? "show" : "hidden"}
          className='relative z-10 container mx-auto text-center text-white'
        >
          <motion.h1
            variants={itemVariants}
            className='text-[2.2rem] font-bold sm:text-[2.55rem]'
          >
            Office Locations
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className='mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.28em] text-[#dcb861]'
          >
            Get in touch with us
          </motion.p>
        </motion.div>
      </section>

      {/* Office Locations Section */}
      <section className='bg-gray-50 px-4 py-16 sm:px-6 lg:px-8'>
        <div className='container mx-auto max-w-7xl'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl font-bold text-[#27312c] sm:text-4xl'>
              Our Global Presence
            </h2>
            <p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>
              Connect with us across multiple countries in Africa. We're here to
              serve your engineering and consulting needs.
            </p>
          </motion.div>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {officeLocations.map((office, index) => (
              <motion.div
                key={office.country}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  ease: smoothEase,
                  delay: index * 0.1,
                }}
                className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'
              >
                {/* Flag Image */}
                <div className='h-32 bg-gradient-to-r from-[#012402] to-[#033b35] flex items-center justify-center relative overflow-hidden'>
                  <img
                    src={office.flagSrc}
                    alt={office.flagAlt}
                    className='w-16 h-10 object-cover rounded shadow-lg'
                    loading='lazy'
                  />
                  <div className='absolute inset-0 bg-black/20' />
                </div>

                {/* Office Details */}
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-[#27312c] mb-3'>
                    {office.country} Office
                  </h3>

                  <div className='space-y-4'>
                    {/* Address */}
                    <div className='flex items-start gap-3'>
                      <MapPin className='h-5 w-5 text-[#d9bf73] mt-0.5 flex-shrink-0' />
                      <div className='text-sm text-gray-600 leading-relaxed'>
                        {office.address.split("\n").map((line, i) => (
                          <div key={i}>{line}</div>
                        ))}
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className='flex items-center gap-3'>
                      <MessageCircle className='h-5 w-5 text-[#d9bf73] flex-shrink-0' />
                      <div>
                        <p className='text-sm font-medium text-[#27312c]'>
                          WhatsApp
                        </p>
                        <a
                          href={`https://wa.me/${office.whatsapp.replace(/[^0-9]/g, "")}`}
                          className='text-sm text-[#d9bf73] hover:text-[#c79439] transition-colors'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          {office.whatsapp}
                        </a>
                      </div>
                    </div>

                    {/* Status if applicable */}
                    {office.status && (
                      <div className='mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded-md'>
                        <p className='text-xs text-yellow-800 font-medium'>
                          {office.status}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Social Media Links */}
                  <div className='mt-6 pt-4 border-t border-gray-200'>
                    <p className='text-sm font-medium text-[#27312c] mb-3'>
                      Social Media
                    </p>
                    <div className='flex gap-3'>
                      {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={social.label}
                            href={social.href}
                            aria-label={social.label}
                            className='w-8 h-8 bg-gray-100 hover:bg-[#d9bf73] rounded-full flex items-center justify-center transition-colors duration-200 group'
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <Icon className='h-4 w-4 text-gray-600 group-hover:text-white transition-colors' />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className='bg-white px-4 py-16 sm:px-6 lg:px-8'>
        <div className='container mx-auto max-w-4xl'>
          <div className='grid gap-12 lg:grid-cols-2 lg:gap-16'>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: smoothEase }}
              className='bg-[#033b35] p-8 rounded-lg text-white'
            >
              <h2 className='text-2xl font-bold mb-6'>Get In Touch</h2>
              <p className='text-gray-300 mb-8'>
                Have questions about our services? We'd love to hear from you.
                Send us a message and we'll respond as soon as possible.
              </p>

              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <Mail className='h-6 w-6 text-[#d9bf73] mt-1' />
                  <div>
                    <p className='font-medium'>Email</p>
                    <a
                      href='mailto:info@gexpertconsultoria.com'
                      className='text-gray-300 hover:text-[#d9bf73] transition-colors'
                    >
                      info@gexpertconsultoria.com
                    </a>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <Phone className='h-6 w-6 text-[#d9bf73] mt-1' />
                  <div>
                    <p className='font-medium'>Phone</p>
                    <a
                      href='tel:+23480683446254'
                      className='text-gray-300 hover:text-[#d9bf73] transition-colors'
                    >
                      +234 806 834 46254
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: smoothEase }}
              className='bg-gray-50 p-8 rounded-lg'
            >
              <h3 className='text-2xl font-bold text-[#27312c] mb-6'>
                Send us a Message
              </h3>

              <form className='space-y-6'>
                {hasProductPartnerInterest && (
                  <div className='rounded-lg border border-[#d9bf73]/40 bg-[#fff8e6] px-4 py-3 text-sm leading-6 text-[#27312c]'>
                    {partnerInterest && productInterest
                      ? `Inquiry source: ${partnerInterest} partner request for ${productInterest}.`
                      : `Inquiry source: ${productInterest ?? partnerInterest}.`}
                  </div>
                )}
                <div className='grid gap-4 sm:grid-cols-2'>
                  <div>
                    <input
                      type='text'
                      placeholder='First Name'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d9bf73] focus:border-transparent outline-none transition-all'
                      required
                    />
                  </div>
                  <div>
                    <input
                      type='text'
                      placeholder='Last Name'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d9bf73] focus:border-transparent outline-none transition-all'
                      required
                    />
                  </div>
                </div>

                <div>
                  <input
                    type='email'
                    placeholder='Email Address'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d9bf73] focus:border-transparent outline-none transition-all'
                    required
                  />
                </div>

                <div>
                  <input
                    type='text'
                    placeholder='Subject'
                    defaultValue={inquirySubject}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d9bf73] focus:border-transparent outline-none transition-all'
                    required
                  />
                </div>

                <div>
                  <textarea
                    placeholder='Your Message'
                    rows={5}
                    defaultValue={inquiryMessage}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d9bf73] focus:border-transparent outline-none transition-all resize-none'
                    required
                  />
                </div>

                <button
                  type='submit'
                  className='w-full bg-[#d9a441] hover:bg-[#c79439] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 focus:ring-2 focus:ring-[#d9bf73] focus:ring-offset-2'
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: smoothEase }}
        className='bg-gray-100 px-4 py-16 sm:px-6 lg:px-8'
      >
        <div className='container mx-auto max-w-6xl'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold text-[#27312c] mb-4'>
              Find Us Globally
            </h2>
            <p className='text-lg text-gray-600'>
              Our offices span across multiple African countries
            </p>
          </div>

          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <div className='h-96 w-full'>
              <iframe
                title='Global Expert locations map'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424286.2740345001!2d-118.7413804844!3d34.0206088917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzQuMDIwNjA4ODkxNywgLTExOC43NDEzODA0ODQwMDAwMDAx!5e0!3m2!1sen!2s!4v1234567890!5m2!1sen!2s'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='h-full w-full border-0'
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Social Media Section */}
      <section className='bg-white px-4 py-16 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className='text-center'
        >
          <h2 className='text-2xl font-bold text-[#27312c] mb-4'>Follow Us</h2>
          <p className='text-gray-600 mb-8 max-w-md mx-auto'>
            Stay connected with our latest updates and industry insights
          </p>

          <div className='flex justify-center gap-6'>
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className='w-12 h-12 bg-gray-100 hover:bg-[#d9bf73] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Icon className='h-6 w-6 text-gray-600 group-hover:text-white transition-colors' />
                </a>
              );
            })}
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Contact;
