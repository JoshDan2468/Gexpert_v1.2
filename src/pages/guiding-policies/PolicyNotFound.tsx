import { Link } from "react-router-dom";
import { ArrowRight } from "@/lib/icons";
import Navbar from "@/components/Navbar";
import PolicyFooter from "@/pages/guiding-policies/PolicyFooter";

const PolicyNotFound = () => (
  <main className='overflow-x-hidden bg-white'>
    <Navbar />
    <section className='min-h-screen px-4 py-32 sm:px-6 lg:px-8'>
      <div className='container mx-auto max-w-3xl text-center'>
        <h1 className='text-4xl font-bold text-[#132015]'>
          Policy not found
        </h1>
        <p className='mt-4 text-lg leading-8 text-[#5a6b5d]'>
          We could not find that policy page. Please continue to the quality
          policy or contact us for assistance.
        </p>
        <Link
          to='/guiding-policies/quality-policy'
          className='mt-8 inline-flex items-center gap-2 rounded-md bg-[#012402] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#024704]'
        >
          View Quality Policy
          <ArrowRight className='h-4 w-4' />
        </Link>
      </div>
    </section>
    <PolicyFooter />
  </main>
);

export default PolicyNotFound;
