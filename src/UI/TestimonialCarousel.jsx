import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { TestimonialSection } from '../Utils/data';
import { PiStarFourFill } from "react-icons/pi";
import { PiStarFourLight } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TestimonialSection.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TestimonialSection.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='px-5 md:px-10 lg:px-15 mb-12 mt-6'>
    <header className="flex flex-col gap-6 mb-8 items-center lg:flex-row lg:items-center  lg:text-left text-center">
        <h1 className="font-bold text-xl">
          <span className="bg-primary box-decoration-clone text-center px-1 rounded-md">Testimonials</span>
        </h1>
        <p className='text-md leading-normal tracking-wide lg:w-[60%]'>
        Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </header>
    <div className='bg-secondary  rounded-3xl py-10 px-3 mt-10'>
    <div className="relative max-w-full md:max-w-[1200px] mx-auto overflow-hidden  md:p-10 ">
      <div className="relative px-[3%] md:px-[15%]"> {/* Added padding to show partial slides */}
        <motion.div   
          className="flex gap-8"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 0.8 }}
        >
          {TestimonialSection.map((testimonial, index) => (
           // In your existing component, modify the testimonial div styling:

<div
  key={testimonial.id}
  className="min-w-full flex flex-col gap-6  "
>
  <div className={`
    relative
    bg-secondary
    text-accent
    rounded-3xl
    p-8
    border-2
    border-primary
    shadow-lg
    transform
    transition-all
    duration-300
    before:content-['']
    before:absolute
    before:bottom-[-25px]
    before:left-[8%]
    before:z-[1]
    before:w-0
    before:h-0
    before:border-l-[22px]
    before:border-l-transparent
    before:border-t-[27px]
    before:border-t-secondary
    before:border-r-[23px]
    before:border-r-transparent
    after:content-['']
    after:absolute
    after:bottom-[-28px]
    after:left-[7.3%]
    after:z-[0]
    after:w-0
    after:h-0
    after:border-l-[27px]
    after:border-l-transparent
    after:border-t-[27px]
    after:border-t-primary
    after:border-r-[27px]
    after:border-r-transparent
    ${index === currentIndex ? 'scale-100 ' : 'scale-95 '}
  `}>
    <p className="text-accent mb-4 text-md leading-relaxed tracking-normal">`${testimonial.text}`</p>
   
  </div>
  <div className=" pt-4 mt-4 ml-5 pl-5">
      <h4 className="font-bold text-xl text-primary ">{testimonial.name}</h4>
      <p className="text-accent text-md">{testimonial.position}</p>
    </div>
</div>
        ))}
        </motion.div>
      </div>

      
      

      <div className="flex justify-between  items-center md:gap-5  mt-8 md:mt-12 md:w-[60%] md:mx-auto">
      <div>
        {/* Left arrow */}
        <button
        onClick={prevSlide}
        className=" text-accent font-semibold text-2xl md:text-3xl hover:text-primary"
      >
        <GoArrowLeft  />
      </button>
      </div>
      <div className='flex  gap-2 md:gap-6'>
        {TestimonialSection.map((_, index) => (
          
            <button
      key={index}
      onClick={() => setCurrentIndex(index)}
      className="text-blue-500 transition-colors"
    >
      {index === currentIndex ? (
        <PiStarFourFill className='text-primary  text-2xl md:text-3xl '  />
      ) : (
        <PiStarFourLight className='text-primary text-2xl md:text-3xl '  />
      )}
    </button>
        ))}
        </div>
        <div>
            {/* Right arrow */}
            <button
        onClick={nextSlide}
        className=" text-accent font-semibold text-2xl md:text-3xl hover:text-primary"
      >
        <GoArrowRight  />
      </button>
        </div>
      </div>
    </div>
    </div>
    </section>
  );
}
