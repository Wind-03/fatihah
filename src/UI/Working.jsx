import { useState } from 'react';
import { WorkingProcess } from "../Utils/data"
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

export default function Working() {
    const [expandedProcess, setExpandedProcess] = useState(null);

    const toggleProcess = (id) => {
        setExpandedProcess(expandedProcess === id ? null : id);
    };

    return (
        <section className='px-5 md:px-10 lg:px-15 mb-12 mt-6'>
            <header className='flex flex-col gap-6 mb-8 items-center lg:flex-row lg:items-center  lg:text-left text-center'>
            <h1 className="font-bold text-xl  ">
        <span className="bg-primary box-decoration-clone text-center px-1 rounded-md">Our Working Process</span>
      </h1>
                <p className='text-md  leading-normal tracking-wide lg:w-[50%]'>Step By Step Guide to Achieving Your Business Goals</p>
            </header>

            <section>
                <div className='flex flex-col gap-6 md:gap-12'>
                    {WorkingProcess.map((item) => (
                        <div key={item.id} className={`flex flex-col border border-b-8  border-secondary rounded-3xl px-3 py-4 md:px-10 md:pt-9 ${expandedProcess === item.id ? 'bg-primary' : 'bg-white'}`}>
                            <div className="flex justify-between items-center pb-3 md:pb-5 ">
                                <div className="flex gap-5 md:gap-8 items-center">
                                    <h1 className='font-bold text-xl md:text-3xl'>{item.number}</h1>
                                    <h2 className='font-medium text-lg md:text-xl sm:text-sm  '>{item.title}</h2>
                                </div>
                                <button 
                                    type="button" 
                                    onClick={() => toggleProcess(item.id)}
                                >
                                    {expandedProcess === item.id ? (
                                        <AiOutlineMinusCircle className="text-3xl md:text-4xl"/>
                                    ) : (
                                        <AiOutlinePlusCircle className="text-3xl md:text-4xl"/>
                                    )}
                                </button>
                            </div>
                            {expandedProcess === item.id && (
                                <div className="process-content border-t-2 border-secondary p-4 text-md">
                                    {item.description}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
}
