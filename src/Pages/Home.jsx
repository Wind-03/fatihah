import Navbar from "../Fixed/Navbar"
import Footer from "../Fixed/Footer"
import Navigation from "../UI/Navigation"
import Brand from "../UI/Brand"
import Services from "../UI/Services"
import Working from "../UI/Working"
import Team from "../UI/Team"
import Contact from "../UI/Contact"
import Case from "../UI/Case"
import TestimonialCarousel from "../UI/TestimonialCarousel"

// import Testimonials from '../UI/Testimonials'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Navigation/>
      <Brand/>
     <Services/>
     <Case/>
     <Working/>
     <Team/>
     <TestimonialCarousel/>
   
     <Contact/>
    
     <Footer
     />
    </div>
  )
}
