import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, CalendarDays, User2 } from "@/lib/icons";
import { articles } from "@/pages/articles/articleData";

const ArticlesListSection = () => (
  <section
    id='latest-articles'
    className='pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24'
  >
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3'>
        {articles.map((article, index) => (
          <motion.div
            key={`${article.title}-${index}`}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{
              duration: 0.75,
              delay: index * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className='group'
          >
            <Link
              to={`/articles/${article.slug}`}
              className='block overflow-hidden rounded-[1.35rem] bg-white shadow-[0_20px_45px_rgba(15,23,42,0.07)] ring-1 ring-[#0c4010]/6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(15,23,42,0.12)]'
            >
              <div className='relative overflow-hidden'>
                <motion.img
                  src={article.image}
                  alt={article.title}
                  className='h-40 w-full object-cover sm:h-36 md:h-40 lg:h-44'
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              <div className='px-5 pb-6 pt-5 sm:px-6'>
                <div className='flex flex-wrap items-center gap-2 text-[11px] text-[#5d6d60]'>
                  <span className='inline-flex items-center rounded-full bg-[#ff5d47] px-3 py-1 font-semibold uppercase tracking-[0.08em] text-white'>
                    {article.date}
                  </span>
                  <span className='inline-flex items-center gap-1.5'>
                    <CalendarDays className='h-3.5 w-3.5' />
                    {article.category}
                  </span>
                  <span className='inline-flex items-center gap-1.5'>
                    <User2 className='h-3.5 w-3.5' />
                    By {article.author}
                  </span>
                </div>

                <h2 className='mt-4 text-[1.05rem] font-bold leading-6 text-[#142117] transition-colors duration-300 group-hover:text-[#0c4010]'>
                  {article.title}
                </h2>

                <p className='mt-3 text-sm leading-6 text-[#68776a]'>
                  {article.excerpt}
                </p>

                <span className='mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#26352a] transition-colors duration-300 group-hover:text-[#0c4010]'>
                  Read More
                  <ArrowUpRight className='h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ArticlesListSection;
