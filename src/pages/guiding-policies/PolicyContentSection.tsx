import { Link } from "react-router-dom";
import type { PolicyDetailItem } from "@/pages/guiding-policies/policyData";
import PolicyBookVisual from "@/pages/guiding-policies/PolicyBookVisual";

const primaryColor = "#012402";

type PolicyLink = {
  slug: string;
  title: string;
  subtitle: string;
};

type PolicyContentSectionProps = {
  activePolicySlug: string;
  onPolicyChange: (slug: string) => void;
  policy: PolicyDetailItem;
  policyLinks: PolicyLink[];
};

const PolicyContentSection = ({
  activePolicySlug,
  onPolicyChange,
  policy,
  policyLinks,
}: PolicyContentSectionProps) => {
  const narrative = policy.policyNarrative;

  return (
    <section className='bg-[#eef2f5] px-4 py-20 sm:px-6 lg:px-8 xl:py-24'>
      <div className='mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[300px_1fr] lg:gap-12'>
        <aside>
          <h2 className='text-[1.55rem] font-bold uppercase leading-tight text-[#012402]'>
            Guiding Policies
          </h2>
          <div className='mt-8 max-w-[300px]'>
            {policyLinks.map((policyLink) => {
              const isActive = policyLink.slug === activePolicySlug;

              return (
                <button
                  type='button'
                  key={policyLink.slug}
                  onClick={() => onPolicyChange(policyLink.slug)}
                  aria-pressed={isActive}
                  className={`block w-full border-b border-[#012402]/22 py-3.5 text-left text-[1.02rem] font-bold uppercase leading-7 transition-colors ${
                    isActive
                      ? "text-[#012402]"
                      : "text-[#7a837c] hover:text-[#012402]"
                  }`}
                >
                  {policyLink.subtitle}
                </button>
              );
            })}
          </div>
        </aside>

        <article className='min-w-0'>
          <div className='mx-auto max-w-[960px]'>
            <PolicyBookVisual title={policy.subtitle ?? policy.title} />
          </div>

          <div className='mt-5 max-w-[940px] text-[#1f2d22]'>
            <h2 className='sr-only'>
              {narrative?.leadLabel ?? policy.subtitle ?? policy.title}
            </h2>
            <div className='space-y-5 text-[0.96rem] leading-7 sm:text-[1rem]'>
              {(narrative?.paragraphs ?? [policy.intro])
                .slice(0, 2)
                .map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
            </div>

            <Link
              to='/contact'
              style={{ backgroundColor: primaryColor }}
              className='mt-7 inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-bold text-white shadow-[0_14px_28px_rgba(1,36,2,0.18)] transition-colors hover:bg-[#024704]'
            >
              Read More About This Policy
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default PolicyContentSection;
