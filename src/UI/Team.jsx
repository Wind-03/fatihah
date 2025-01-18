
import { TeamMembers } from '../Utils/data'


export default function Team() {
  return (
    <section className='px-5 md:px-10 lg:px-15 mb-12 mt-6'>
     <header className="flex flex-col gap-6 mb-8 items-center lg:flex-row lg:items-center  lg:text-left text-center">
    <h1 className="font-bold text-xl  ">
        <span className="bg-primary box-decoration-clone text-center px-1 rounded-md">Team</span>
      </h1>
        <p className='text-md leading-normal tracking-wide lg:w-[60%]'>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
    </header>

    <div className=''>
        <div className='flex flex-col gap-8 relative md:gap-10 md:grid md:grid-cols-2 lg:grid-cols-3'>
            {TeamMembers.map((item, index) =>(
                <div key={index} className='flex flex-col gap-4 border border-b-8 border-secondary rounded-3xl p-5 '>
                    <div className='flex flex-col gap-2   '>
                        <div className='flex items-start justify-between   border-secondary '>
                        <div className='flex gap-5 items-end'>
                            <img src={item.image} alt="" className='w-[30%]' />
                            <div className='flex flex-col gap-1'>
                                <p className='font-bold text-lg'>{item.name}</p>
                                <p className='text-sm'>{item.position}</p>
                            </div>
                            </div>
                            <img src={item.logo} alt="" className='w-[10%] ' />
                        </div>
                    </div>
                    <div className='border-t pt-4 leading-normal tracking-wide border-secondary text-md'>{item.about}</div>
                </div>
            ))}
        </div>
    </div>

    <div className='flex md:justify-end'>

    <button type="button" className=' cursor-pointer border py-3 px-5 rounded-lg bg-secondary text-accent text-md mt-6  w-full md:w-[30%] lg:w-[25%] md:text-md md:py-5 md:rounded-xl  hover:bg-primary hover:text-secondary'>See all team</button>
    </div>


    </section>
  )
}
