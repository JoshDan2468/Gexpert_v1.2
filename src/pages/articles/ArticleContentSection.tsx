import { motion } from "framer-motion";
import type { ArticleItem } from "@/pages/articles/articleData";

type ArticleContentSectionProps = {
  article: ArticleItem;
};

const ArticleContentSection = ({ article }: ArticleContentSectionProps) => (
  <section className='px-4 pb-16 pt-10 sm:px-6 sm:pb-20 lg:px-8'>
    <div className='container mx-auto max-w-4xl'>
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className='rounded-[1.8rem] bg-white px-6 py-8 shadow-[0_24px_50px_rgba(15,23,42,0.08)] ring-1 ring-[#0c4010]/6 sm:px-8 sm:py-10'
      >
        <div className='space-y-5 text-[1rem] leading-8 text-[#334638]'>
          {article.body.map((paragraph, index) => (
            <motion.p
              key={paragraph}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                delay: index * 0.08,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.article>
    </div>
  </section>
);

export default ArticleContentSection;
