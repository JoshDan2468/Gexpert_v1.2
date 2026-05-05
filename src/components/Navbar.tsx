import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "@/lib/icons";
import { Link, useLocation } from "react-router-dom";
import gexpertLogo from "@/assets/gexpet logo.jpeg";

type NavLink = {
  label: string;
  to: string;
  children?: Array<{ label: string; to: string }>;
};

const serviceLinks = [
  {
    label: "Engineering Services",
    to: "/services/engineering-services",
  },
  {
    label: "Business Processes",
    to: "/services/business-processes",
  },
  {
    label: "Research & Development",
    to: "/services/research-development",
  },
  {
    label: "Research and Market Intelligence",
    to: "/services/research-market-intelligence",
  },
  {
    label: "Oil and Gas Management",
    to: "/services/oil-gas-management",
  },
  {
    label: "Project Management and Execution",
    to: "/services/project-management-execution",
  },
] as const;

const navLinks: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Our Services",
    to: "/services",
    children: [...serviceLinks],
  },
  {
    label: "Our Products",
    to: "/products",
  },
  {
    label: "Guiding Policies",
    to: "/guiding-policies/quality-policy",
  },
  { label: "Articles", to: "/articles" },
  { label: "Our Partners", to: "/partners" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isActiveLink = (link: NavLink) => {
    if (link.to === "/") {
      return pathname === "/";
    }

    return (
      pathname === link.to ||
      pathname.startsWith(`${link.to}/`) ||
      Boolean(link.children?.some((child) => pathname === child.to))
    );
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className='container mx-auto flex items-center justify-between h-20 px-4 sm:px-6'>
        <Link to='/' className='flex items-center gap-2 sm:gap-3'>
          <img
            src={gexpertLogo}
            alt='Global Experts Consultoria logo'
            className={`h-10 w-auto rounded-sm object-contain transition-colors sm:h-12 lg:h-14 ${
              scrolled ? "" : "bg-white/95"
            }`}
          />
          <div className='flex flex-col gap-1 leading-tight'>
            <span
              className={`text-[10px] font-bold uppercase tracking-[0.1em] transition-colors sm:text-[11px] lg:text-xs ${
                scrolled ? "text-[#012402]" : "text-white"
              }`}
            >
              Global Expert
            </span>
            <span
              className={`text-[8px] font-semibold uppercase tracking-[0.14em] transition-colors sm:text-[9px] lg:text-[11px] ${
                scrolled ? "text-[#012402]/75" : "text-white/75"
              }`}
            >
              Consultoria
            </span>
          </div>
        </Link>

        {/* Desktop */}
        <div className='hidden lg:flex items-center gap-0.5'>
          {navLinks.map((link) => {
            const isActive = isActiveLink(link);

            return (
              <div
                key={link.label}
                className='relative'
                onMouseEnter={() =>
                  link.children && setActiveDropdown(link.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.to}
                  className={`px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors flex items-center gap-1 relative group ${
                    scrolled
                      ? "text-[#012402] hover:text-[#024704]"
                      : "text-white hover:text-white"
                  }`}
                >
                  {link.label}
                  {link.children && <ChevronDown className='w-3 h-3' />}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-1 origin-left transition-transform ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    } ${scrolled ? "bg-[#012402]" : "bg-[#a9f3b1]"}`}
                  />
                </Link>

                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className='absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-xl border border-[#012402]/10 overflow-hidden'
                    >
                      {link.children.map((child) => {
                        const isChildActive = pathname === child.to;

                        return (
                          <Link
                            key={child.label}
                            to={child.to}
                            onClick={() => setActiveDropdown(null)}
                            className={`block px-5 py-3 text-sm transition-colors ${
                              isChildActive
                                ? "bg-[#012402] text-[#a9f3b1]"
                                : "text-[#012402] hover:bg-[#012402] hover:text-white"
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          <Link
            to='/contact'
            className={`ml-3 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] rounded-full transition-all ${
              scrolled
                ? "bg-[#012402] text-white hover:bg-[#024704]"
                : "bg-white text-[#012402] hover:bg-white/90"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type='button'
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={
            mobileOpen ? "Close navigation menu" : "Open navigation menu"
          }
          className={`lg:hidden rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[#012402]/50 ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
        >
          {mobileOpen ? (
            <X className='w-6 h-6' />
          ) : (
            <Menu className='w-6 h-6' />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className='lg:hidden bg-white overflow-hidden border-t border-gray-200'
          >
            <div className='px-6 pb-6 space-y-1'>
              {navLinks.map((link) => {
                const isActive = isActiveLink(link);

                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-3 text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors ${
                      isActive
                        ? "text-[#012402]"
                        : "text-[#012402]/70 hover:text-[#012402]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                to='/contact'
                onClick={() => setMobileOpen(false)}
                className='block mt-4 text-center px-5 py-3 bg-[#012402] text-[12px] text-white font-semibold uppercase tracking-[0.08em] rounded-full hover:bg-[#012402] transition-all'
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
