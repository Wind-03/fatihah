import { CaseStudies } from '../Utils/data';
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";  
import { useState } from 'react';

export default function Case() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className='px-5 md:px-10 lg:px-15 mb-12 mt-6'>
      <header className="flex flex-col gap-6 mb-8 items-center lg:flex-row lg:items-center  lg:text-left text-center">
        <h1 className="font-bold text-xl">
          <span className="bg-primary box-decoration-clone text-center px-1 rounded-md">Case Studies</span>
        </h1>
        <p className='text-md  leading-normal tracking-wide lg:w-[50%]'>
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </header>

      <div className='flex flex-col lg:flex-row lg:gap-4 bg-secondary text-accent lg:py-6 lg:px-6 px-4 md:px-6 rounded-3xl cursor-pointer gap-7 py-8'>
        {CaseStudies.map((item, index) => (
          <div key={index} className='flex flex-col gap-4 lg:gap-4 border-t border-accent lg:border-l lg:border-t-0 first:border-0 lg:px-8 p-5'>
            <p className='text-md  tracking-wider leading-normal'>{item.info}</p>
            <div 
              className='flex items-center gap-2 text-xl'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <p className='text-primary '>Learn More</p>
              {hoveredIndex === index ? 
                <GoArrowRight className='text-primary font-bolder md:text-2xl'/> : 
                <GoArrowUpRight className='text-primary md:text-2xl'/>
              }
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
