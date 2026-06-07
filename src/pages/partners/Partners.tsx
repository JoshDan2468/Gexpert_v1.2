import { useDeferredValue, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Search, X } from "@/lib/icons";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/pages/home/CTAFooter";
import heroImage from "@/assets/home_assets/image12.jpg";

type LogoItem = {
  name: string;
  logo?: string;
  to: string;
};

const partnerLogoModules = import.meta.glob(
  "@/assets/partners/*.{png,jpg,jpeg,webp,svg}",
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

const prettifyPartnerName = (filePath: string) =>
  filePath
    .split("/")
    .pop()
    ?.replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase()) ?? "Partner";

const logoByKey = Object.fromEntries(
  Object.entries(partnerLogoModules).map(([path, logo]) => [
    path
      .split("/")
      .pop()
      ?.replace(/\.[^.]+$/, "")
      .toLowerCase() ?? "",
    logo,
  ]),
);

const createLogoItem = (name: string, logoKey?: string): LogoItem => ({
  name,
  logo: logoKey ? logoByKey[logoKey.toLowerCase()] : undefined,
  to: "/contact",
});

const globalClients: LogoItem[] = [
  createLogoItem("CandidOil", "candidoil"),
  createLogoItem("AGPC", "agpc"),
  createLogoItem("Russelsmith", "smith"),
  createLogoItem("IUM", "ium"),
  createLogoItem("Dovaheights Energy Limited", "dova"),
  createLogoItem("Raeburn Oak", "oak"),
  createLogoItem("Daptem Engineering", "daptem"),
  createLogoItem("Acetop Energy", "acetop"),
  createLogoItem("Fadfae Engineering Services Limited", "fad"),
  createLogoItem("Amparo Engineering", "amparo"),
  createLogoItem("Mediccy Health & Wellness", "medi"),
  createLogoItem("MDJ Global Links Limited"),
  createLogoItem("Darhatshi Engineering Services Limited"),
  createLogoItem("Tulcan Energy"),
  createLogoItem("Sanmish"),
  createLogoItem("SATH"),
  createLogoItem("ModusLights Technologies"),
  createLogoItem("Doowe"),
];

const partners: LogoItem[] = [
  createLogoItem("Penguin Solutions", "penguin solution"),
  createLogoItem("Pipecare", "pipecare"),
  createLogoItem("Quality Esnad"),
  createLogoItem("Stratus"),
  createLogoItem("Exertherm", "exertherm"),
  createLogoItem("Varixx", "varixx"),
  createLogoItem("BEASY", "beasy"),
  createLogoItem("ICE International Consultant Engineers", "ice"),
  createLogoItem("Enppi", "enppi"),
  createLogoItem("Evident", "evident"),
  createLogoItem("Antea", "antea"),
  createLogoItem("APEX-FI"),
  createLogoItem("MF Satellite", "mf"),
  createLogoItem("Cryotos", "cryotos"),
  createLogoItem("Spectraflow Analytics Switzerland", "spectraflow"),
  createLogoItem("Athena Group", "athena"),
  createLogoItem("Kingii", "kingii"),
  createLogoItem("KEM", "kem"),
  createLogoItem("BLT", "blt"),
  createLogoItem("Cenosco", "cenosco"),
  createLogoItem("NHN Solar", "solar"),
];

const allLogos = [...globalClients, ...partners];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const LogoCard = ({ item }: { item: LogoItem }) => (
  <motion.div variants={logoVariants}>
    <Link
      to={item.to}
      className='group flex h-32 items-center justify-center rounded-2xl border border-[#0b3b12]/8 bg-white px-5 text-center shadow-[0_16px_34px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0b3b12]/18 hover:shadow-[0_24px_48px_rgba(15,23,42,0.1)] sm:h-36 lg:h-40'
      aria-label={`Contact us about ${item.name}`}
    >
      <div className='flex h-full w-full flex-col items-center justify-center'>
        {item.logo ? (
          <>
            <img
              src={item.logo}
              alt={`${item.name} logo`}
              loading='lazy'
              className='max-h-16 w-auto max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-20 sm:max-w-[210px]'
            />
            <span className='mt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#607064] opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              {item.name}
            </span>
          </>
        ) : (
          <span className='max-w-[190px] text-balance text-base font-black uppercase tracking-[0.08em] text-[#18371d] transition-transform duration-300 group-hover:scale-105'>
            {item.name}
          </span>
        )}
      </div>
    </Link>
  </motion.div>
);

const MarqueeLogoCard = ({ item }: { item: LogoItem }) => (
  <Link
    to={item.to}
    className='group flex h-28 w-56 shrink-0 items-center justify-center rounded-2xl border border-[#0b3b12]/8 bg-white px-5 text-center shadow-[0_16px_34px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0b3b12]/18 hover:shadow-[0_24px_48px_rgba(15,23,42,0.1)] sm:h-32 sm:w-64'
    aria-label={`Contact us about ${item.name}`}
  >
    {item.logo ? (
      <img
        src={item.logo}
        alt={`${item.name} logo`}
        loading='lazy'
        className='max-h-16 w-auto max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-20 sm:max-w-[210px]'
      />
    ) : (
      <span className='max-w-[190px] text-balance text-sm font-black uppercase tracking-[0.08em] text-[#18371d] transition-transform duration-300 group-hover:scale-105'>
        {item.name}
      </span>
    )}
  </Link>
);

const PartnerLogoMarquee = ({ items }: { items: LogoItem[] }) => {
  const marqueeItems = [...items, ...items];

  return (
    <div className='relative -mx-4 mt-8 overflow-hidden py-4 sm:-mx-6 lg:-mx-8'>
      <div className='pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#f7f7f3] to-transparent sm:w-32' />
      <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#f7f7f3] to-transparent sm:w-32' />

      <motion.div
        className='flex w-max gap-5 pl-5'
        initial={{ x: "0%" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 46,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {marqueeItems.map((partner, index) => (
          <MarqueeLogoCard
            key={`${partner.name}-${index}`}
            item={partner}
          />
        ))}
      </motion.div>
    </div>
  );
};

const Partners = () => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const { filteredPartners, filteredClients } = useMemo(() => {
    const normalizedQuery = deferredQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return {
        filteredPartners: partners,
        filteredClients: globalClients,
      };
    }

    return {
      filteredPartners: partners.filter((partner) =>
        partner.name.toLowerCase().includes(normalizedQuery),
      ),
      filteredClients: globalClients.filter((client) =>
        client.name.toLowerCase().includes(normalizedQuery),
      ),
    };
  }, [deferredQuery]);

  const totalFiltered = filteredPartners.length + filteredClients.length;

  return (
    <main className='overflow-x-hidden bg-[#f7f7f3]'>
      <Navbar />

      <section className='grid min-h-[430px] pt-20 lg:grid-cols-[0.8fr_1.2fr]'>
        <div className='flex items-center bg-[#012402] px-6 py-16 sm:px-10 lg:px-16'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className='max-w-xl'
          >
            <h1 className='text-left text-4xl font-black leading-[1.18] text-white sm:text-5xl lg:text-[3.4rem]'>
              Our Partners & Global Clients
            </h1>
            <div className='mt-7 flex flex-wrap gap-4'>
              <a
                href='#partners'
                className='inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-bold text-[#012402] transition-colors hover:bg-[#a9f3b1]'
              >
                View Network
              </a>
              <Link
                to='/contact'
                className='inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-bold text-[#012402] transition-colors hover:bg-[#a9f3b1]'
              >
                Become a Partner
              </Link>
            </div>
          </motion.div>
        </div>
        <div className='relative min-h-[300px] overflow-hidden lg:min-h-[430px]'>
          <img
            src={heroImage}
            alt='Professional partner collaboration meeting'
            className='absolute inset-0 h-full w-full object-cover'
            loading='eager'
            decoding='async'
            data-lcp='true'
          />
          <div className='absolute inset-0 bg-white/5' />
        </div>
      </section>

      <section
        id='partners'
        className='px-4 pb-12 pt-10 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8'
      >
        <div className='container mx-auto max-w-6xl'>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className='mb-10 rounded-[1.5rem] bg-white p-4 shadow-[0_16px_36px_rgba(15,23,42,0.05)] ring-1 ring-[#0c4010]/6 sm:p-5'
          >
            <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
              <div>
                <p className='text-left text-sm font-semibold text-[#152118]'>
                  Browse logos
                </p>
                <p className='mt-1 text-sm text-[#617064]'>
                  Showing {totalFiltered} of {allLogos.length} organizations
                </p>
              </div>

              <div className='relative w-full md:max-w-sm'>
                <Search className='pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7a877c]' />
                <input
                  type='text'
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder='Search partners or clients'
                  className='h-11 w-full rounded-full border border-[#d8e2d9] bg-[#f8fbf8] px-11 pr-11 text-sm text-[#203025] outline-none transition-colors duration-200 placeholder:text-[#7a877c] focus:border-[#0b3b12]/30'
                />
                {query && (
                  <button
                    type='button'
                    onClick={() => setQuery("")}
                    className='absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-[#5b6a5f] transition-colors duration-200 hover:bg-[#edf4ee] hover:text-[#132015]'
                    aria-label='Clear logo search'
                  >
                    <X className='h-3.5 w-3.5' />
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className='inline-flex items-center rounded-full border border-[#0d62b3]/12 bg-white px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-[#0d62b3] shadow-sm'>
              Our Global Clients
            </span>
            <h2 className='mt-4 text-left text-2xl font-bold text-[#122015] sm:text-3xl'>
              Client Organizations From Your Reference
            </h2>
            <p className='mt-3 max-w-2xl text-sm leading-7 text-[#617064] sm:text-base'>
              These are the client organizations shown in the first image,
              separated from our business partner network.
            </p>

            {filteredClients.length > 0 ? (
              <div className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {filteredClients.map((client) => (
                  <LogoCard key={client.name} item={client} />
                ))}
              </div>
            ) : (
              <div className='mt-8 rounded-[1.5rem] bg-white px-6 py-10 text-center shadow-[0_16px_36px_rgba(15,23,42,0.05)] ring-1 ring-[#0c4010]/6'>
                <p className='text-lg font-semibold text-[#152118]'>
                  No global client matched "{query}"
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <section className='px-4 pb-14 pt-4 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20'>
        <div className='container mx-auto max-w-6xl'>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className='inline-flex items-center rounded-full border border-[#0d62b3]/12 bg-white px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-[#0d62b3] shadow-sm'>
              Our Business Partners
            </span>
            <h2 className='mt-4 text-left text-2xl font-bold text-[#122015] sm:text-3xl'>
              Strategic Partner Network
            </h2>
            <p className='mt-3 max-w-2xl text-sm leading-7 text-[#617064] sm:text-base'>
              These are the partner organizations shown in the second image,
              supporting our technical capability, delivery capacity, and
              product ecosystem.
            </p>

            {filteredPartners.length > 0 ? (
              <PartnerLogoMarquee items={filteredPartners} />
            ) : (
              <div className='mt-8 rounded-[1.5rem] bg-white px-6 py-10 text-center shadow-[0_16px_36px_rgba(15,23,42,0.05)] ring-1 ring-[#0c4010]/6'>
                <p className='text-lg font-semibold text-[#152118]'>
                  No business partner matched "{query}"
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <section className='px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24'>
        <div className='container mx-auto max-w-5xl'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className='rounded-[1.8rem] bg-white p-6 text-center shadow-[0_22px_46px_rgba(15,23,42,0.05)] ring-1 ring-[#0c4010]/6 sm:p-8'
          >
            <span className='inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#eef6ef] text-[#0b3b12]'>
              <Mail className='h-5 w-5' />
            </span>
            <h2 className='mt-4 text-2xl font-bold text-[#122015] sm:text-3xl'>
              Looking to partner with Global Experts Consultoria?
            </h2>
            <p className='mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#617064] sm:text-base'>
              We welcome conversations with organizations that value quality,
              technical depth, and long-term collaboration.
            </p>

            <div className='mt-6 flex flex-wrap justify-center gap-3'>
              <Link
                to='/contact'
                className='inline-flex items-center gap-2 rounded-full bg-[#012402] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-transform duration-300 hover:-translate-y-0.5'
              >
                Start a Conversation
                <ArrowRight className='h-3.5 w-3.5' />
              </Link>
              <Link
                to='/about'
                className='inline-flex rounded-full border border-[#0b3b12]/12 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#223126] transition-colors duration-300 hover:bg-[#eef6ef]'
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CTAFooter />
    </main>
  );
};

export default Partners;
