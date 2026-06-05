import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Cog,
  Factory,
  FlaskConical,
  HardHat,
  Search,
  Settings2,
  ShieldCheck,
} from "@/lib/icons";

const serviceTiles = [
  {
    icon: ShieldCheck,
    title: "Asset Integrity",
    subtitle: "Integrity, O&M, asset performance",
    to: "/services/oil-gas-management",
  },
  {
    icon: HardHat,
    title: "Engineering Services",
    subtitle: "Concept, FEED, detailed design",
    to: "/services/engineering-services",
  },
  {
    icon: BriefcaseBusiness,
    title: "Project Management",
    subtitle: "Planning, scheduling, controls",
    to: "/services/project-management-execution",
  },
  {
    icon: Factory,
    title: "Procurement Support",
    subtitle: "Sourcing, evaluation, logistics",
    to: "/services/project-management-execution",
  },
  {
    icon: Settings2,
    title: "Installation Services",
    subtitle: "Construction and field readiness",
    to: "/services/project-management-execution",
  },
  {
    icon: Cog,
    title: "OEM Representation",
    subtitle: "Global OEM access and local support",
    to: "/services/business-processes",
  },
  {
    icon: FlaskConical,
    title: "Research & Development",
    subtitle: "Technical research and delivery planning",
    to: "/services/research-development",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    subtitle: "Research, analysis, and insight",
    to: "/services/research-market-intelligence",
  },
  {
    icon: Search,
    title: "Local Insight",
    subtitle: "Local content and market visibility",
    to: "/services/research-market-intelligence",
  },
] as const;

const ServicesAreasSection = () => (
  <section className='px-6 py-16 sm:px-10 lg:px-16 lg:py-24'>
    <div className='mx-auto max-w-7xl'>
      <div className='grid gap-8 lg:grid-cols-[0.28fr_0.72fr] lg:gap-12'>
        <h2 className='text-left text-3xl font-black text-[#012402] sm:text-4xl'>
          Service Areas
        </h2>
        <p className='max-w-5xl text-left text-base font-medium leading-8 text-[#53605a]'>
          With deep technical expertise, regional reach, and a commitment to
          operational excellence, we deliver reliable services that enhance asset
          performance, ensure compliance, and support safe, efficient, and
          sustainable project execution.
        </p>
      </div>

      <div className='mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
        {serviceTiles.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className='group rounded-lg bg-white p-8 shadow-[0_16px_34px_rgba(15,23,42,0.04)]'
            >
              <Link to={service.to} className='block h-full'>
                <div className='flex min-h-32 items-center justify-center'>
                  <div className='flex items-center gap-4'>
                    <div className='flex h-16 w-16 items-center justify-center rounded-md bg-[#eef8ef] text-[#012402] transition-colors group-hover:bg-[#012402] group-hover:text-white'>
                      <Icon className='h-8 w-8' />
                    </div>
                    <div>
                      <p className='text-left text-3xl font-black tracking-tight text-[#012402]'>
                        {service.title}
                      </p>
                      <p className='mt-2 text-left text-sm font-semibold text-[#6b746f]'>
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-8 flex items-center justify-between gap-4'>
                  <span className='text-left text-base font-black text-[#012402]'>
                    {service.title}
                  </span>
                  <ArrowRight className='h-5 w-5 text-[#012402] transition-transform group-hover:translate-x-1' />
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesAreasSection;
