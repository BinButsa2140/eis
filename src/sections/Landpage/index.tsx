import Hero from "../Hero"
import AboutUs from "../AboutUs"
import Whyus from "../Whyus"
import Pricing from "../Pricing"
import Branding from "../Branding"
import Footer from "../Footer"
import ReviewFromUser from "../ReviewFromUser"
import Contact from "../Contact"


function Landpage() {
  
  return (
    <div className=" flex flex-col">
        <Hero/>
        <AboutUs/>
        <Whyus/>
        <Branding/>
        <ReviewFromUser/>
        <Pricing/>
        <Contact/>
        <Footer/>
      </div>
  )
}

export default Landpage
