import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "@/lib/icons";
import gexpertLogo from "@/assets/gexpet logo.jpeg";

const footerLinks = [
  [
    { label: "EPCI Consultancy", to: "/services" },
    { label: "Project Management", to: "/services/project-management-execution" },
    { label: "Engineering Services", to: "/services/engineering-services" },
    { label: "Research & Development", to: "/services/research-development" },
  ],
  [
    { label: "About Us", to: "/about" },
    { label: "Articles", to: "/articles" },
    { label: "Guiding Policies", to: "/guiding-policies" },
    { label: "Contact Us", to: "/contact" },
  ],
] as const;

const socialLinks = [
  { label: "LinkedIn", Icon: Linkedin },
  { label: "Facebook", Icon: Facebook },
  { label: "Instagram", Icon: Instagram },
  { label: "X", Icon: Twitter },
  { label: "YouTube", Icon: Youtube },
] as const;

const PolicyFooter = () => (
  <footer className='bg-[#012402] px-4 py-10 text-white sm:px-6 lg:px-8'>
    <div className='mx-auto max-w-[1320px]'>
      <div className='grid gap-10 md:grid-cols-[260px_1fr_1fr] lg:grid-cols-[300px_1fr_1fr_260px]'>
        <Link to='/' className='inline-flex flex-col items-start'>
          <img
            src={gexpertLogo}
            alt='Global Experts Consultoria logo'
            className='h-16 w-auto rounded-md bg-white object-contain'
          />
          <span className='mt-4 text-2xl font-bold leading-tight'>
            Global Expert
          </span>
          <span className='text-sm font-semibold uppercase tracking-[0.14em] text-white/70'>
            Consultoria
          </span>
        </Link>

        {footerLinks.map((group, index) => (
          <nav key={index} className='space-y-2 text-sm font-semibold'>
            {group.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className='block text-white/86 transition-colors hover:text-white'
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ))}

        <div>
          <p className='text-sm font-semibold'>Social:</p>
          <div className='mt-2 flex flex-wrap gap-2'>
            {socialLinks.map(({ label, Icon }) => (
              <a
                key={label}
                href='#'
                aria-label={label}
                className='flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#012402] transition-transform hover:-translate-y-0.5'
              >
                <Icon className='h-4 w-4' />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className='mt-10 border-t border-white/25 pt-6 text-xs text-white/86'>
        Copyright (c) 2026 GExperts Consultoria Limited. All rights reserved |
        Privacy Policy | Terms | Guiding Policies
      </div>
    </div>
  </footer>
);

export default PolicyFooter;
