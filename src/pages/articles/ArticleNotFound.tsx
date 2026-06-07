import { Link } from "react-router-dom";

const ArticleNotFound = () => (
  <section className='min-h-screen px-4 pb-16 pt-28 sm:px-6 lg:px-8'>
    <div className='container mx-auto max-w-3xl text-center'>
      <h1 className='text-4xl font-bold text-[#112015]'>Article not found</h1>
      <p className='mt-4 text-[#5f6e62]'>
        We could not find that article. Return to the articles page to continue
        browsing.
      </p>
      <Link
        to='/articles'
        className='mt-8 inline-flex rounded-full bg-[#012402] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white'
      >
        Back to Articles
      </Link>
    </div>
  </section>
);

export default ArticleNotFound;
