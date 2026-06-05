import detailImage from "@/assets/services/engin.jpg";

const ServicesDetailBand = () => (
  <section className='grid bg-[#012402] lg:grid-cols-2'>
    <div className='min-h-[360px] overflow-hidden lg:min-h-[470px]'>
      <img
        src={detailImage}
        alt='Technical service execution and field delivery'
        loading='lazy'
        className='h-full w-full object-cover'
      />
    </div>
    <div className='flex items-center px-6 py-14 sm:px-10 lg:px-16'>
      <div className='max-w-xl space-y-7 text-left text-base font-semibold leading-8 text-white/90'>
        <p>
          Our services help clients manage and support complex assets, projects,
          and operations. Offered as standalone scopes or as an integrated
          engagement, each service is shaped around practical delivery,
          specialist capability, and measurable project value.
        </p>
        <p>
          We span engineering support, asset integrity, project management,
          procurement coordination, installation readiness, research,
          intelligence, and local-content advisory for demanding technical
          environments.
        </p>
        <p>
          Each service is designed to reduce complexity, strengthen compliance,
          improve cost efficiency, and support safer, more reliable decisions
          across the client operation.
        </p>
      </div>
    </div>
  </section>
);

export default ServicesDetailBand;
