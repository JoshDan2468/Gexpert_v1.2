import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/pages/home/CTAFooter";
import ArticleContentSection from "@/pages/articles/ArticleContentSection";
import ArticleDetailHero from "@/pages/articles/ArticleDetailHero";
import ArticleNotFound from "@/pages/articles/ArticleNotFound";
import { articlesBySlug } from "@/pages/articles/articleData";

const ArticleDetail = () => {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  const article = articleSlug ? articlesBySlug[articleSlug] : undefined;

  if (!article) {
    return (
      <main className='overflow-x-hidden bg-[#f7f7f4]'>
        <Navbar />
        <ArticleNotFound />
        <CTAFooter />
      </main>
    );
  }

  return (
    <main className='overflow-x-hidden bg-[#f7f7f4]'>
      <Navbar />
      <ArticleDetailHero article={article} />
      <ArticleContentSection article={article} />
      <CTAFooter />
    </main>
  );
};

export default ArticleDetail;
