import { useState } from 'react'
import MaskGroup from '../assets/Mask Group.png'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    
    })

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
       
    })

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

        // Clear error when user starts typing
        setErrors(prev => ({
            ...prev,
            [name]: ''
        }))

        // Validate as user types
        if (!value.trim()) {
            setErrors(prev => ({
                ...prev,
                [name]: 'This field cannot be left empty'
            }))
        } else if (name === 'email' && !validateEmail(value)) {
            setErrors(prev => ({
                ...prev,
                email: 'Please fill in a valid email address'
            }))
        }
    }

    const isFormValid = () => {
        return (
            formData.name.trim() !== '' &&
            formData.email.trim() !== '' &&
            validateEmail(formData.email) &&
            formData.message.trim() !== '' 
           
        )
    }

    const handleSubmit = (e) => {
    e.preventDefault()
    if (isFormValid()) {
        alert('Message has been sent successfully! 🎉')
        // Clear form after successful submission
        setFormData({
            name: '',
            email: '',
            message: '',
       
        })
    }
}




  return (
   <section className="px-5 md:px-10 lg:px-15 mb-12 mt-6">
   <header className="flex flex-col gap-6 mb-8 items-center lg:flex-row lg:items-center  lg:text-left text-center">
    <h1 className="font-bold text-xl ">
        <span className="bg-primary box-decoration-clone text-center px-1 rounded-md">Contact Us</span>
      </h1>
        <p className='text-md leading-normal tracking-wide lg:w-[60%]'>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
    </header>

    <section className=' mt-10  '>
        <div className='bg-accent rounded-xl md:rounded-3xl py-10 px-6 lg:flex lg:justify-between lg:pr-0 md:text-xl'>
            <form className='flex flex-col gap-7 lg:w-1/2 lg:px-3' onSubmit={handleSubmit}>
            {/* Select buttons */}
                <div className='flex justify-between'>
                    <div className='flex gap-2 items-center '>
                    <input type="radio" name="" id="" className='text-md'/>
        
                        <label htmlFor="">Say Hi</label>
                    </div>
                    <div className='flex gap-2 items-center '>
                    <input type="radio" name="" id="" className='text-md'/>
        
                        <label htmlFor="">Get a Quote</label>
                    </div>
                    
                </div>
                {/* Bottom form */}
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="" className='text-md'>Name</label>
                        <input  type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                     className='border border-secondary rounded-lg px-2 py-3' />
                        {errors.name && <p className='text-red-500'>{errors.name}</p>}
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="">Email*</label>
                        <input type="email" name="email" id="" placeholder='Email' className='border border-secondary rounded-lg px-2 py-3'
                        value={formData.email} onChange={handleChange}/>
                        {errors.email && <p className='text-red-500'>{errors.email}</p>}
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="">Message*</label>
                        <textarea  name="message" id="" className='border border-secondary rounded-lg p-2'
                        rows='4'
                        value={formData.message} onChange={handleChange}/>
                        {errors.message && <p className='text-red-500'>{errors.message}</p>}
                    </div>
                </div>
                <button
                type="submit"
                disabled={!isFormValid()}
                className={`px-4 py-2 rounded-lg hover:bg-primary hover:text-secondary ${
                    isFormValid()
                        ? 'bg-secondary text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
            >
                Send Message
            </button>
            </form>
            <div className='hidden lg:inline-block'>
            <img src={MaskGroup} alt="" />
        </div>
        </div>
        
    </section>

   </section>
  )
}
