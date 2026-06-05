type PolicyBookVisualProps = {
  title: string;
};

const PolicyBookVisual = ({ title }: PolicyBookVisualProps) => (
  <div className='mx-auto flex min-h-[270px] w-full max-w-[760px] items-center justify-center bg-white/20 px-4 py-4 sm:min-h-[310px]'>
    <div className='relative h-[230px] w-full max-w-[620px] sm:h-[290px]'>
      <div className='absolute left-[5%] top-[14%] z-20 h-[72%] w-[28%] -rotate-[13deg] overflow-hidden rounded-[2px] bg-[#123615] shadow-[0_18px_30px_rgba(15,23,42,0.22)]'>
        <div className='absolute inset-0 bg-[linear-gradient(135deg,#012402_0%,#235f2a_100%)]' />
        <div className='absolute right-0 top-0 h-full w-[16%] bg-[#f1d36b]' />
        <div className='relative p-5 text-white'>
          <p className='text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70'>
            Global Experts
          </p>
          <h3 className='mt-5 text-2xl font-bold uppercase leading-none sm:text-3xl'>
            {title}
          </h3>
          <div className='mt-7 grid grid-cols-2 gap-2'>
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className='h-10 rounded-[2px] bg-white/18 sm:h-12'
              />
            ))}
          </div>
        </div>
      </div>

      <div className='absolute left-[30%] top-[20%] h-[68%] w-[34%] rounded-l-[8px] rounded-r-[2px] border border-slate-200 bg-white shadow-[0_14px_26px_rgba(15,23,42,0.16)]'>
        <div className='mx-auto mt-8 h-20 w-[70%] bg-[#dceaf0] sm:h-28' />
        <div className='absolute bottom-7 left-1/2 h-[35%] w-[42%] -translate-x-1/2 bg-[#b6423f] p-3 text-white'>
          <div className='h-2 w-20 bg-white/55' />
          <div className='mt-3 space-y-1'>
            <div className='h-1.5 w-full bg-white/30' />
            <div className='h-1.5 w-4/5 bg-white/30' />
            <div className='h-1.5 w-3/5 bg-white/30' />
          </div>
        </div>
      </div>

      <div className='absolute left-[59%] top-[21%] h-[67%] w-[32%] rounded-r-[5px] border border-slate-200 bg-white shadow-[0_14px_24px_rgba(15,23,42,0.12)]'>
        <div className='p-5'>
          <div className='h-2 w-28 bg-[#012402]/30' />
          <div className='mt-5 space-y-3'>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className='flex items-start gap-2'>
                <div className='mt-0.5 h-2.5 w-2.5 border border-[#012402]/40' />
                <div className='flex-1 space-y-1'>
                  <div className='h-1.5 w-4/5 bg-[#b6423f]/70' />
                  <div className='h-1.5 w-full bg-slate-200' />
                  <div className='h-1.5 w-2/3 bg-slate-200' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='absolute bottom-[10%] left-[26%] h-3 w-[65%] rounded-full bg-slate-400/20 blur-sm' />
    </div>
  </div>
);

export default PolicyBookVisual;
