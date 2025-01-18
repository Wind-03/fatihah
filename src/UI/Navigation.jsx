import illustration from '../../public/assets/illustration.png'

export default function Navigation() {
  return (
    <section className='flex flex-col  lg:flex-row lg:justify-center lg:items-start  px-5 md:px-10 lg:px-15 mb-12'>
    <div className='flex flex-col gap-10 lg:w-3/5 lg:flex lg:flex-col lg:gap-10 '>
        <h1 className='text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-snug tracking-wide lg:w-[65%]'>Navigating the digital landscape for success</h1>
        <img src={illustration} alt=""  className='lg:hidden'/>
        <p className='text-lg  leading-normal tracking-wide lg:w-[65%]'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
        <button type="button" className='w-full lg:w-[30%] rounded-lg bg-secondary text-accent text-lg font-bold cursor-pointer py-3 hover:bg-primary hover:text-secondary'>Book  a consultation</button>
        </div>

        {/* desktop image */}
        <div className='lg:w-2/5'>
            <img src={illustration} alt="" className='hidden lg:block' />
        </div>
    
    </section>
  )
}
