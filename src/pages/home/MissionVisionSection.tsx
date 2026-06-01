import { motion } from "framer-motion";
import visionImage from "@/assets/home_assets/build.jpg";
import missionImage from "@/assets/about/mission1.png";

const items = [
  {
    label: "Our Mission",
    // eyebrow: "What drives us",
    text: "To provide solutions at highly cost effective, best value and excellent quality that meets clients expectations, coupled with local and international standards and best practices. Clients' satisfaction will be vital.",
    image: missionImage,
    alt: "Mission-focused operational delivery",
    textPanelClass: "bg-[#7f0d07]",
    imageFirstDesktop: false,
  },
  {
    label: "Our Vision",
    // eyebrow: "Where we are going",
    text: "To become a leading and referenced consultancy services company in Africa and globally.",
    image: visionImage,
    alt: "Global expansion and long-term vision",
    textPanelClass: "bg-[#f26a10]",
    imageFirstDesktop: true,
  },
];

const MissionVisionSection = () => {
  return (
    <section className=' pt-10 bg-secondary'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className='mx-auto mb-8 max-w-xl text-center sm:mb-10'
        >
          <h2 className='text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[2.45rem]'>
            The mission and vision behind our work
          </h2>
        </motion.div>

        <div className='mx-auto max-w-6xl overflow-hidden shadow-2xl shadow-foreground/20'>
          {items.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.85,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className='grid lg:grid-cols-2'
            >
              <div
                className={`flex min-h-[220px] items-center px-6 py-8 text-white sm:min-h-[280px] sm:px-8 lg:min-h-[320px] lg:px-10 ${item.textPanelClass} ${item.imageFirstDesktop ? "lg:order-2" : ""}`}
              >
                <div className='max-w-md'>
                  {/* <p className='text-left text-sm font-semibold uppercase tracking-[0.22em] text-white/80'>
                    {item.eyebrow}
                  </p> */}
                  <h3 className='mt-3 text-left text-4xl font-black uppercase tracking-tight text-white sm:text-5xl'>
                    {item.label}
                  </h3>
                  <p className='mt-5 text-left text-sm leading-7 text-white/85 sm:text-base sm:leading-8'>
                    {item.text}
                  </p>
                </div>
              </div>

              <div
                className={`flex min-h-[240px] items-center justify-center bg-white px-6 py-8 sm:min-h-[280px] sm:px-8 lg:min-h-[320px] lg:px-10 ${item.imageFirstDesktop ? "lg:order-1" : ""}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading='lazy'
                  className='max-h-[220px] w-full max-w-[280px] object-contain mix-blend-multiply sm:max-h-[260px] sm:max-w-[340px] lg:max-h-[280px] lg:max-w-[360px]'
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
