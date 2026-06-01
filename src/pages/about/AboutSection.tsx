// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import aboutBg from "@/assets/home_assets/survay.jpg";
// import gexpertLogo from "@/assets/gexpet logo.jpeg";

// const locations = [
//   "Lagos, Nigeria",
//   "Maputo, Mozambique",
//   "Freetown, Sierra Leone",
//   "Accra, Ghana",
//   "Windhoek, Namibia",
//   "Houston, Texas, USA",
//   "Oklahoma City, Oklahoma, USA",
// ];

// const AboutSection = () => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id='about' className='section-padding bg-secondary' ref={ref}>
//       <div className='container mx-auto'>
//         <div className='grid lg:grid-cols-2 gap-16 items-center'>
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
//             className='max-w-2xl'
//           >
//             <h2 className='mb-4 text-3xl font-display font-bold leading-[4.1] text-foreground md:text-5xl'>
//               Global Experts <span className='text-[#a9f3b1]'>Consultoria</span>
//             </h2>
//             <p className='mb-4 leading-7 text-muted-foreground'>
//               Global Experts Consultoria is an international based energy,
//               engineering, business and management consulting firm that focuses
//               on supporting its clients to achieve improved performance through
//               providing pragmatic solution(s).
//             </p>
//             <p className='mb-4 leading-7 text-muted-foreground'>
//               The firm is led by strong willed experienced managers who have
//               worked in major international and local business and management
//               consulting firms with experience in managing multi-disciplinary
//               teams on major designs, improvements and transformational
//               assignments.
//             </p>
//             <p className='mb-6 leading-7 text-muted-foreground'>
//               Global Experts Consultoria helps its clients build the needed
//               competence and capabilities to deliver on their commitments. The
//               firm has affiliations with internationally renowned professional
//               service providers in order to deliver a full range of high-quality
//               consulting services to its clients (both in the public and private
//               sector).
//             </p>

//             <div>
//               <h4 className='mb-3 font-display text-sm font-semibold uppercase tracking-wider text-foreground'>
//                 Global Presence
//               </h4>
//               <div className='flex flex-wrap gap-2'>
//                 {locations.map((loc, i) => (
//                   <motion.span
//                     key={loc}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={inView ? { opacity: 1, scale: 1 } : {}}
//                     transition={{
//                       duration: 0.75,
//                       delay: 0.9 + i * 0.12,
//                       ease: [0.22, 1, 0.36, 1],
//                     }}
//                     className='px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/10'
//                   >
//                     {loc}
//                   </motion.span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{
//               duration: 1.35,
//               delay: 0.18,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className='relative'
//           >
//             <div className='rounded-2xl overflow-hidden shadow-2xl'>
//               <img
//                 src={aboutBg}
//                 alt='Offshore production structure showcasing industrial energy infrastructure'
//                 className='h-[500px] w-full object-cover'
//                 loading='lazy'
//               />
//             </div>
//             <div className='absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-xl'>
//               <img
//                 src={gexpertLogo}
//                 alt='Global Experts Consultoria logo'
//                 className='h-14 w-auto object-contain sm:h-16'
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
