import { Link } from "react-router-dom";
import ctaImage from "@/assets/home_assets/port.jpg";

const ServicesContactBand = () => (
  <section className='relative isolate overflow-hidden bg-[#012402] px-6 py-16 text-center sm:px-10 lg:px-16 lg:py-20'>
    <div className='absolute inset-0'>
      <img
        src={ctaImage}
        alt=''
        aria-hidden='true'
        className='h-full w-full object-cover'
        loading='eager'
      />
      <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(1,36,2,0.86),rgba(1,36,2,0.74))]' />
    </div>
    <div className='relative z-10 mx-auto max-w-3xl'>
      <h2 className='text-4xl font-black text-white sm:text-5xl'>
        Get in Touch
      </h2>
      <p className='mx-auto mt-4 max-w-2xl text-sm font-semibold leading-7 text-white/90 sm:text-base'>
        Submit details through our contact form and our team will follow up with
        the right technical or advisory support.
      </p>
      <div className='mt-7 flex flex-wrap justify-center gap-4'>
        <Link
          to='/contact'
          className='inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-bold text-[#012402] transition-colors hover:bg-[#a9f3b1]'
        >
          Contact Us
        </Link>
        <Link
          to='/partners'
          className='inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-bold text-[#012402] transition-colors hover:bg-[#a9f3b1]'
        >
          Our Partners
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesContactBand;
