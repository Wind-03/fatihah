import { useState } from 'react';
import Logo from '../assets/logo.png'

import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { menuItems } from '../Utils/data';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    

  return (
    <nav className='py-8 px-5 md:px-10 lg:px-15 md:py-10 '>
    <div className='flex justify-between items-center'>
    {/* Logo for the website */}
        <div className='flex items-center gap-2'>
            <img src={Logo} alt="Logo" className='w-[30%]' />
            <h1 className='text-2xl font-bold'>Positivus</h1>
        </div>

        {/* Desktop Menu */}
        <div>
            {menuItems.map((item) =>
            <a key={item.title} href={item.url} className='hidden lg:inline-block lg:mr-8 hover:bg-primary hover:box-decoration-clone hover:px-1 hover:rounded-md cursor-pointer '>
                {item.title}
            </a>)} 
        </div>

        {/* Hamburger menu Button */}
        <div className='text-3xl lg:hidden' onClick={()=> setIsOpen(!isOpen)}>{isOpen ? <RiCloseFill className='text-3xl'/> : <RiMenu3Fill className='text-3xl' />}</div>
        </div>

        {/* Mobile menu */}
        <div className={`

          absolute 
          w-full 
          h-screen
          flex
          flex-col
          justify-around
          bg-white 
          shadow-lg 
          transition-all 
          duration-500 
          ease-in-out
          lg:hidden
          z-40
          ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
          overflow-hidden
        `}>
            {
                menuItems.map((item, index) =>(
                    <a key={item.title}
                    href={item.url}
                    className='block text-center cursor-pointer   '
                    style={{
              transitionDelay: `${index * 100}ms`
            }}>{item.title}</a>
                ))
            }
        </div>
        

        
       

      
    </nav>
  )
}
