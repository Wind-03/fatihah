import {useState} from 'react'   
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { BsFillArrowDownLeftCircleFill } from "react-icons/bs";
import first from '../../public/assets/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png';
import second from '../../public/assets/tokyo-magnifier-web-search-with-elements 2.png'
import third from '../../public/assets/tokyo-selecting-a-value-in-the-browser-window 1.png'
import fourth from '../../public/assets/tokyo-sending-messages-from-one-place-to-another 1.png'
import fifth from '../../public/assets/ame.png'
import sixth from '../../public/assets/tkyp.png'
import seventh from '../../public/assets/tokyo-extra.png'

export default function Services() {

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className='px-5 md:px-10 lg:px-15 mb-12 mt-6'>
    <header className="flex flex-col gap-6 mb-8 items-center lg:flex-row lg:items-center  lg:text-left text-center">
    <h1 className="font-bold text-xl  ">
        <span className="bg-primary box-decoration-clone text-center px-1 rounded-md">Services</span>
      </h1>
        <p className='text-md  leading-normal tracking-wide lg:w-[50%] '>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
    </header>

    {/* Desktop Services section */}

    <section className="hidden lg:grid lg:grid-cols-2 lg:gap-10">
    {/* service div */}
      <div className='flex  space-around border-b-8 border border-black rounded-3xl  py-5 transition-transform duration-300 hover:scale-105 bg-accent'
       onMouseEnter={() => setHoveredId('seo')}
       onMouseLeave={() => setHoveredId(null)}
       >
      <div className='flex flex-col justify-around px-4'>
      <h2 className="font-medium text-lg w-[80%] ">
        <span className="bg-primary  box-decoration-clone">Search engine optimization</span>
      </h2>
        <div className='flex gap-3 items-center'
        >
        {hoveredId === 'seo'? (
          <BsFillArrowDownLeftCircleFill className="text-xl "/>
        ) : (
          <BsFillArrowUpRightCircleFill className="text-xl"/>
        )}
          <p className='font-bold text-md'>Learn more</p>
        </div>
      </div>
      <img src={second} alt="" className='w-[40%]' />
      
      </div>
      {/* service div */}
      <div className='flex  space-around border-b-8 border border-black rounded-3xl  py-5 transition-transform duration-300 hover:scale-105 bg-primary'
       onMouseEnter={() => setHoveredId('ppc')}
       onMouseLeave={() => setHoveredId(null)}>
      <div className='flex flex-col justify-around px-4'>
      <h2 className="font-medium text-lg w-[80%] ">
        <span className="bg-accent  box-decoration-clone">Pay-per-click Advertising</span>
      </h2>
      <div className='flex gap-3 items-center'
        >
        {hoveredId === 'ppc'? (
          <BsFillArrowDownLeftCircleFill className="text-xl "/>
        ) : (
          <BsFillArrowUpRightCircleFill className="text-xl"/>
        )}
          <p className='font-bold text-md'>Learn more</p>
        </div>
      </div>
      <img src={third} alt="" className='w-[40%]'/>
      
      </div>
      {/* service div */}
      <div className='flex  space-around border-b-8 border border-black rounded-3xl  py-5 transition-transform duration-300 hover:scale-105 bg-secondary'
       onMouseEnter={() => setHoveredId('social')}
       onMouseLeave={() => setHoveredId(null)}>
      <div className='flex flex-col justify-around px-4'>
      <h2 className="font-medium text-lg w-[80%] ">
        <span className="bg-accent  box-decoration-clone">Social Media Marketing</span>
      </h2>
      <div className='flex gap-3 items-center'
        >
        {hoveredId === 'social'? (
          <BsFillArrowDownLeftCircleFill className="text-xl  text-accent "/>
        ) : (
          <BsFillArrowUpRightCircleFill className="text-xl  text-accent"/>
        )}
          <p className='font-bold text-md  text-accent'>Learn more</p>
        </div>
      </div>
      <img src={first} alt="" className='w-[40%]'/>
      
      </div>
      {/* service div */}
      <div className='flex space-around border-b-8 border border-black rounded-3xl  py-5 transition-transform duration-300 hover:scale-105 bg-accent'
       onMouseEnter={() => setHoveredId('email')}
       onMouseLeave={() => setHoveredId(null)}>
      <div className='flex flex-col justify-around px-4'>
      <h2 className="font-medium text-lg w-[80%] ">
        <span className="bg-primary  box-decoration-clone">Email Marketing</span>
      </h2>
      <div className='flex gap-3 items-center'
        >
        {hoveredId === 'email'? (
          <BsFillArrowDownLeftCircleFill className="text-xl "/>
        ) : (
          <BsFillArrowUpRightCircleFill className="text-xl"/>
        )}
          <p className='font-bold text-md'>Learn more</p>
        </div>
      </div>
      <img src={fourth} alt="" className='w-[40%]'/>
      
      </div>
      {/* service div */}
      <div className='flex  space-around border-b-8 border border-black rounded-3xl  py-5 transition-transform duration-300 hover:scale-105 bg-primary'
       onMouseEnter={() => setHoveredId('content')}
       onMouseLeave={() => setHoveredId(null)}>
      <div className='flex flex-col justify-around px-4'>
      <h2 className="font-medium text-lg w-[80%] ">
        <span className="bg-accent  box-decoration-clone">Content Creation</span>
      </h2>
      <div className='flex gap-3 items-center'
        >
        {hoveredId === 'content'? (
          <BsFillArrowDownLeftCircleFill className="text-xl "/>
        ) : (
          <BsFillArrowUpRightCircleFill className="text-xl"/>
        )}
          <p className='font-bold text-md'>Learn more</p>
        </div>
      </div>
      <img src={seventh} alt="" className='w-[40%]' />
      
      </div>
      {/* service div */}
      <div className='flex  space-around border-b-8 border border-black rounded-3xl  py-5 transition-transform duration-300 hover:scale-105 bg-secondary'
       onMouseEnter={() => setHoveredId('analytics')}
       onMouseLeave={() => setHoveredId(null)}>
      <div className='flex flex-col justify-around px-4'>
      <h2 className="font-medium text-lg w-[80%] ">
        <span className="bg-primary  box-decoration-clone">Analytics and Tracking</span>
      </h2>
         <div className='flex gap-3 items-center'
        >
        {hoveredId === 'analytics'? (
          <BsFillArrowDownLeftCircleFill className="text-xl text-accent "/>
        ) : (
          <BsFillArrowUpRightCircleFill className="text-xl  text-accent"/>
        )}
          <p className='font-bold text-md text-accent'>Learn more</p>
        </div>
      </div>
      <img src={sixth} alt="" className='w-[40%]'/>
      
      </div>

      

    </section>

    <div className=' hidden  lg:flex justify-around  bg-accent rounded-xl p-10 mt-8'>
        <div className='flex flex-col gap-5'>
          <h2 className='font-bold text-xl'>Lets make things happen</h2>
          <p className='text-md w-[60%]'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
          <button type="button" className=' w-[35%] rounded-xl bg-secondary text-accent text-md font-bold cursor-pointer py-4'>Get your free Proposal</button>
        </div>
        <img src={fifth} alt="" className='w-[20%]' />
      </div>

    {/* Mobile Services section */}
    <section className="lg:hidden flex flex-col gap-7 ">
    {/* service div */}
      <div className="flex flex-col gap-5 border-b-8 border border-black rounded-3xl px-8 py-5 md:px-10 md:py-6 transition-transform duration-300 hover:scale-105 bg-accent"
      onMouseEnter={() => setHoveredId('seo')}
      onMouseLeave={() => setHoveredId(null)}
      >
      <h2 className="font-bold text-xl w-[50%] md:w-[60%] md:text-3xl  ">
        <span className="bg-primary  box-decoration-clone px-1">Search engine optimization</span>
      </h2>
        <div className="flex items-end justify-between">
        {hoveredId === 'seo' ? (
          <BsFillArrowDownLeftCircleFill className="text-3xl md:text-4xl "/>
        ) : (
          <BsFillArrowUpRightCircleFill className="text-3xl md:text-4xl"/>
        )}
      
          <img src={second} alt="" className="w-[50%] md:w-[40%]" />
        </div>
      </div>
       {/* service div */}
       <div className="flex flex-col gap-5 border-b-8 border border-black rounded-3xl px-8 py-5 md:px-10 md:py-6 transition-transform duration-300 hover:scale-105 bg-primary"
      onMouseEnter={() => setHoveredId('ppc')}
      onMouseLeave={() => setHoveredId(null)}>
     <h2 className="font-bold text-xl w-[60%] md:w-[50%] md:text-3xl ">
        <span className="bg-accent  box-decoration-clone">Pay-per-click Advertising</span>
      </h2>
        <div className="flex items-end justify-between">
        {hoveredId === 'ppc' ? (
          <BsFillArrowDownLeftCircleFill className="text-3xl md:text-4xl "/>
        ) : (
          <BsFillArrowUpRightCircleFill className="text-3xl md:text-4xl"/>
        )}
          <img src={third} alt="" className="w-[50%] md:w-[40%]"/>
        </div>
      </div>
       {/* service div */}
       <div className="flex flex-col gap-5 border-b-8 border border-black rounded-3xl px-8 py-5 md:px-10 md:py-6 transition-transform duration-300 hover:scale-105 bg-secondary"
      onMouseEnter={() => setHoveredId('social')}
      onMouseLeave={() => setHoveredId(null)}>
      <h2 className="font-bold text-xl w-[50%] md:w-[50%] md:text-3xl ">
        <span className="bg-accent  box-decoration-clone px-1">Social Media Marketing</span>
      </h2>
      <div className="flex items-end justify-between">
        {hoveredId === 'social' ? (
          <BsFillArrowDownLeftCircleFill className="text-3xl md:text-4xl text-accent"/>
        ) : (
          <BsFillArrowUpRightCircleFill className="text-3xl md:text-4xl text-accent"/>
        )}
          <img src={first} alt="" className="w-[50%] md:w-[40%]"/>
        </div>
      </div>
       {/* service div */}
       <div className="flex flex-col gap-5 border-b-8 border border-black rounded-3xl px-8 py-5 md:px-10 md:py-6 transition-transform duration-300 hover:scale-105 bg-accent"
      onMouseEnter={() => setHoveredId('email')}
      onMouseLeave={() => setHoveredId(null)}>
      <h2 className="font-bold text-xl w-[40%] md:w-[30%] md:text-3xl ">
        <span className="bg-primary  box-decoration-clone px-1">Email Marketing</span>
      </h2>
      <div className="flex items-end justify-between">
        {hoveredId === 'email' ? (
          <BsFillArrowDownLeftCircleFill className="text-3xl md:text-4xl "/>
        ) : (
          <BsFillArrowUpRightCircleFill className="text-3xl md:text-4xl"/>
        )}
          <img src={fourth} alt="" className="w-[50%] md:w-[40%]" />
        </div>
      </div>
       {/* service div */}
       <div className="flex flex-col gap-5 border-b-8 border border-black rounded-3xl px-8 py-5 md:px-10 md:py-6 transition-transform duration-300 hover:scale-105 bg-primary"
      onMouseEnter={() => setHoveredId('content')}
      onMouseLeave={() => setHoveredId(null)}>
      <h2 className="font-bold text-xl w-[50%] md:w-[30%] md:text-3xl ">
        <span className="bg-accent  box-decoration-clone px-1">Content Creation</span>
      </h2>
      <div className="flex items-end justify-between">
        {hoveredId === 'content' ? (
          <BsFillArrowDownLeftCircleFill className="text-3xl md:text-4xl"/>
        ) : (
          <BsFillArrowUpRightCircleFill className="text-3xl md:text-4xl"/>
        )}
          <img src={seventh} alt="" className="w-[50%] md:w-[40%]" />
        </div>
      </div>
      {/* service div */}
      <div className="flex flex-col gap-5 border-b-8 border border-black rounded-3xl px-8 py-5  md:px-10 md:py-6 transition-transform duration-300 hover:scale-105 bg-secondary"
      onMouseEnter={() => setHoveredId('analytics')}
      onMouseLeave={() => setHoveredId(null)}>
      <h2 className="font-bold text-xl w-[70%] md:w-[50%] md:text-3xl">
        <span className="bg-primary  box-decoration-clone px-1">Analytics and Tracking</span>
      </h2>
      <div className="flex items-end justify-between">
        {hoveredId === 'analytics' ? (
          <BsFillArrowDownLeftCircleFill className="text-3xl md:text-4xl text-accent"/>
        ) : (
          <BsFillArrowUpRightCircleFill className="text-3xl md:text-4xl text-accent"/>
        )}
          <img src={sixth} alt="" className="w-[50%] md:w-[40%]" />
        </div>
      </div>
      <div className='flex flex-col gap-6 md:gap-10 lg:hidden bg-accent rounded-2xl py-8 px-8 md:py-10'>
        <h2 className='text-2xl font-bold md:text-3xl'>Lets make things happen</h2>
        <p className='text-lg leading-tight  tracking-wider md:text-xl'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
        <button type="button" className=' w-full rounded-xl bg-secondary text-accent text-lg md:text-xl md:py-4 font-medium cursor-pointer py-3'>Get your free Proposal</button>
      </div>
    </section>

    </section>
  )
}
