import { motion } from "framer-motion";

const introCards = [
  {
    title: "Global Presence",
    copy: "Connected project support across Africa and partner networks for specialist technical delivery.",
  },
  {
    title: "Service Approach",
    copy: "Value-added support shaped around engineering, procurement, management, and research needs.",
  },
  {
    title: "Technical Expertise",
    copy: "Experience across asset types, field environments, operational profiles, and delivery stages.",
  },
  {
    title: "Commitment",
    copy: "Transparent project culture focused on quality, compliance, safety, and dependable outcomes.",
  },
] as const;

const ServicesIntroSection = () => (
  <section className='px-6 py-16 sm:px-10 lg:px-16 lg:py-24'>
    <div className='mx-auto max-w-7xl'>
      <div className='grid gap-8 lg:grid-cols-[0.28fr_0.72fr] lg:gap-12'>
        <h2 className='text-left text-3xl font-black text-[#012402] sm:text-4xl'>
          Our Services
        </h2>
        <p className='max-w-5xl text-left text-base font-medium leading-8 text-[#53605a]'>
          Backed by decades of hands-on consulting, engineering, and project
          delivery experience, Global Experts Consultoria provides end-to-end
          support across the service lifecycle. From technical planning,
          procurement, asset management, audits, and advisory services to
          research and local insight, our teams help clients manage risk,
          optimize performance, and maintain high standards of quality and
          compliance.
        </p>
      </div>

      <div className='mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
        {introCards.map((card, index) => (
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
            className='rounded-lg bg-white p-7 shadow-[0_16px_34px_rgba(15,23,42,0.04)]'
          >
            <h3 className='text-left text-lg font-black text-[#012402]'>
              {card.title}
            </h3>
            <p className='mt-5 text-left text-sm font-medium leading-7 text-[#58645f]'>
              {card.copy}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesIntroSection;
