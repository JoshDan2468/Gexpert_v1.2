import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "@/lib/icons";
import { Link, useLocation } from "react-router-dom";
import gexpertLogo from "@/assets/gexpet logo.jpeg";

type NavLink = {
  label: string;
  to: string;
  children?: NavLink[];
};

const serviceLinks: NavLink[] = [
  {
    label: "Asset Integrity and Management",
    to: "/services/engineering-services",
    children: [
      {
        label: "Engineering Services",
        to: "/services/engineering-services",
      },
      {
        label: "Oil and Gas Management",
        to: "/services/oil-gas-management",
      },
      {
        label: "Business Advisory",
        to: "/services/business-processes",
      },
    ],
  },
  {
    label: "Project Management and Services",
    to: "/services/project-management-execution",
    children: [
      {
        label: "SAAS Solutions",
        to: "/services/project-management-execution",
      },
      {
        label: "Thermel Monitoring",
        to: "/services/project-management-execution",
      },
      {
        label: "Values & Flowmeters",
        to: "/services/project-management-execution",
      },
    ],
  },
  {
    label: "Research & Development",
    to: "/services/research-development",
    children: [
      {
        label: "Engineering Research & Development",
        to: "/services/research-development",
      },
    ],
  },
  {
    label: "Local Insight",
    to: "/services/research-market-intelligence",
    children: [
      {
        label: "Research and Market Intelligence",
        to: "/services/research-market-intelligence",
      },
    ],
  },
];

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeServiceGroup, setActiveServiceGroup] = useState<string | null>(
    null,
  );
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  const isActiveLink = (link: NavLink) => {
    if (link.to === "/") {
      return pathname === "/";
    }

    const hasActiveChild = (items?: NavLink[]): boolean =>
      Boolean(
        items?.some(
          (child) =>
            pathname === child.to ||
            pathname.startsWith(`${child.to}/`) ||
            hasActiveChild(child.children),
        ),
      );

    return (
      pathname === link.to ||
      pathname.startsWith(`${link.to}/`) ||
      hasActiveChild(link.children)
    );
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
    setActiveServiceGroup(null);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className='fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white/95 shadow-lg backdrop-blur-md transition-all duration-300'
    >
      <div className='container mx-auto flex items-center justify-between h-20 px-4 sm:px-6'>
        <Link to='/' className='flex items-center gap-2 sm:gap-3'>
          <img
            src={gexpertLogo}
            alt='Global Experts Consultoria logo'
            className='h-10 w-auto rounded-sm object-contain transition-colors sm:h-12 lg:h-14'
          />
          <div className='flex flex-col gap-1 leading-tight'>
            <span className='text-[10px] font-bold uppercase tracking-[0.1em] text-[#012402] transition-colors sm:text-[11px] lg:text-xs'>
              Global Expert
            </span>
            <span className='text-[8px] font-semibold uppercase tracking-[0.14em] text-[#012402]/75 transition-colors sm:text-[9px] lg:text-[11px]'>
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
                onMouseLeave={closeDropdowns}
              >
                <Link
                  to={link.to}
                  className='group relative flex items-center gap-1 px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#012402] transition-colors hover:text-[#024704]'
                >
                  {link.label}
                  {link.children && <ChevronDown className='w-3 h-3' />}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-1 origin-left transition-transform ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    } bg-[#012402]`}
                  />
                </Link>

                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className='absolute top-full left-0 mt-1 w-80 rounded-lg border border-[#012402]/10 bg-white shadow-xl'
                    >
                      {link.children.map((child) => {
                        const isChildActive = isActiveLink(child);
                        const hasNestedChildren = Boolean(
                          child.children?.length,
                        );

                        return (
                          <div
                            key={child.label}
                            className='relative'
                            onMouseEnter={() =>
                              setActiveServiceGroup(child.label)
                            }
                          >
                            <Link
                              to={child.to}
                              onClick={closeDropdowns}
                              className={`flex items-center justify-between gap-3 px-5 py-3 text-sm transition-colors ${
                                isChildActive
                                  ? "bg-[#012402] text-[#a9f3b1]"
                                  : "text-[#012402] hover:bg-[#012402] hover:text-white"
                              }`}
                            >
                              <span>{child.label}</span>
                              {hasNestedChildren && (
                                <ChevronDown className='h-3.5 w-3.5 -rotate-90' />
                              )}
                            </Link>

                            <AnimatePresence>
                              {hasNestedChildren &&
                                activeServiceGroup === child.label && (
                                  <motion.div
                                    initial={{ opacity: 0, x: 8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 8 }}
                                    transition={{ duration: 0.18 }}
                                    className='absolute left-full top-0 ml-1 w-80 overflow-hidden rounded-lg border border-[#012402]/10 bg-white shadow-xl'
                                  >
                                    {child.children?.map((nestedChild) => {
                                      const isNestedChildActive =
                                        pathname === nestedChild.to;

                                      return (
                                        <Link
                                          key={nestedChild.label}
                                          to={nestedChild.to}
                                          onClick={closeDropdowns}
                                          className={`block px-5 py-3 text-sm transition-colors ${
                                            isNestedChildActive
                                              ? "bg-[#012402] text-[#a9f3b1]"
                                              : "text-[#012402] hover:bg-[#012402] hover:text-white"
                                          }`}
                                        >
                                          {nestedChild.label}
                                        </Link>
                                      );
                                    })}
                                  </motion.div>
                                )}
                            </AnimatePresence>
                          </div>
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
            className='ml-3 rounded-full bg-[#012402] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition-all hover:bg-[#024704]'
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
          className='rounded text-[#012402] transition-colors focus:outline-none focus:ring-2 focus:ring-[#012402]/50 lg:hidden'
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
                const hasChildren = Boolean(link.children?.length);

                if (!hasChildren) {
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
                }

                return (
                  <div key={link.label} className='space-y-1'>
                    <button
                      type='button'
                      onClick={() =>
                        setOpenGroups((prev) => ({
                          ...prev,
                          [link.label]: !prev[link.label],
                        }))
                      }
                      aria-expanded={openGroups[link.label] ? "true" : "false"}
                      className='flex w-full items-center justify-between py-3 text-left text-[12px] font-semibold uppercase tracking-[0.08em] text-[#012402]/90 transition-colors hover:text-[#012402]'
                    >
                      <span className={`${isActive ? "text-[#012402]" : ""}`}>
                        {link.label}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openGroups[link.label] ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openGroups[link.label] && (
                      <div className='space-y-1 border-l border-[#012402]/15 pl-4'>
                        {link.children!.map((child) => {
                          const childHasChildren = Boolean(
                            child.children?.length,
                          );
                          const childIsActive = isActiveLink(child);

                          return (
                            <div key={child.label} className='space-y-1'>
                              <div className='flex items-center justify-between gap-3'>
                                {childHasChildren ? (
                                  <button
                                    type='button'
                                    onClick={() =>
                                      setOpenGroups((prev) => ({
                                        ...prev,
                                        [child.label]: !prev[child.label],
                                      }))
                                    }
                                    aria-expanded={
                                      openGroups[child.label] ? "true" : "false"
                                    }
                                    className={`flex-1 text-left py-2 text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors ${
                                      childIsActive
                                        ? "text-[#012402]"
                                        : "text-[#012402]/80 hover:text-[#012402]"
                                    }`}
                                  >
                                    {child.label}
                                  </button>
                                ) : (
                                  <Link
                                    to={child.to}
                                    onClick={() => setMobileOpen(false)}
                                    className={`block py-2 text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors ${
                                      childIsActive
                                        ? "text-[#012402]"
                                        : "text-[#012402]/80 hover:text-[#012402]"
                                    }`}
                                  >
                                    {child.label}
                                  </Link>
                                )}

                                {childHasChildren && (
                                  <ChevronDown
                                    className={`w-4 h-4 transition-transform ${
                                      openGroups[child.label]
                                        ? "rotate-180"
                                        : ""
                                    }`}
                                  />
                                )}
                              </div>

                              {childHasChildren && openGroups[child.label] && (
                                <div className='space-y-1 border-l border-[#012402]/10 pl-4'>
                                  {child.children!.map((nestedChild) => (
                                    <Link
                                      key={nestedChild.label}
                                      to={nestedChild.to}
                                      onClick={() => setMobileOpen(false)}
                                      className='block py-2 text-sm text-[#012402]/70 transition-colors hover:text-[#012402]'
                                    >
                                      {nestedChild.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
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
