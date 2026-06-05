import { Link } from "react-router-dom";
import type { PolicyDetailItem } from "@/pages/guiding-policies/policyData";

type PolicyBreadcrumbProps = {
  policy: PolicyDetailItem;
};

const PolicyBreadcrumb = ({ policy }: PolicyBreadcrumbProps) => (
  <nav
    aria-label='Breadcrumb'
    className='bg-[#012402] px-4 py-3 text-sm font-semibold text-white sm:px-6 lg:px-8'
  >
    <div className='mx-auto flex max-w-[1320px] flex-wrap items-center gap-2'>
      <Link to='/' className='transition-colors hover:text-[#f1d36b]'>
        HOME
      </Link>
      <span className='text-white/65'>&gt;</span>
      <Link
        to='/guiding-policies'
        className='transition-colors hover:text-[#f1d36b]'
      >
        GUIDING POLICIES
      </Link>
      <span className='text-white/65'>&gt;</span>
      <span className='text-white/85'>{policy.subtitle ?? policy.title}</span>
    </div>
  </nav>
);

export default PolicyBreadcrumb;
