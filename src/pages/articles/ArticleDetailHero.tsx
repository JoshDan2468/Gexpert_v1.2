import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, User2 } from "@/lib/icons";
import type { ArticleItem } from "@/pages/articles/articleData";

type ArticleDetailHeroProps = {
  article: ArticleItem;
};

const ArticleDetailHero = ({ article }: ArticleDetailHeroProps) => (
  <section className='relative overflow-hidden pt-24 sm:pt-28'>
    <div className='absolute inset-0'>
      <img src={article.image} alt={article.title} className='h-full w-full object-cover' />
      <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(5,15,9,0.78)_0%,rgba(5,15,9,0.58)_42%,rgba(5,15,9,0.82)_100%)]' />
    </div>

    <div className='relative z-10 container mx-auto px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8'>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className='max-w-4xl'
      >
        <Link
          to='/articles'
          className='inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/88 backdrop-blur-sm transition-colors hover:bg-white/14'
        >
          <ArrowLeft className='h-3.5 w-3.5' />
          Back to News
        </Link>

        <div className='mt-6 flex flex-wrap items-center gap-3 text-[11px] text-white/78'>
          <span className='rounded-full bg-[#ff5d47] px-3 py-1 font-semibold uppercase tracking-[0.08em] text-white'>
            {article.category}
          </span>
          <span className='inline-flex items-center gap-1.5'>
            <CalendarDays className='h-3.5 w-3.5' />
            {article.date}
          </span>
          <span className='inline-flex items-center gap-1.5'>
            <User2 className='h-3.5 w-3.5' />
            By {article.author}
          </span>
        </div>

        <h1 className='mt-5 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl'>
          {article.title}
        </h1>
        <p className='mt-5 max-w-2xl text-[0.98rem] leading-7 text-white/78 sm:text-base sm:leading-8'>
          {article.excerpt}
        </p>
      </motion.div>
    </div>
  </section>
);

export default ArticleDetailHero;
