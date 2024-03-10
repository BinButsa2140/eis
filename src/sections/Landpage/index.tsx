import Hero from "../Hero"
import AboutUs from "../AboutUs"
import Whyus from "../Whyus"
import Pricing from "../Pricing"
import Branding from "../Branding"
import ReviewFromUser from "../ReviewFromUser"
import Contact from "../Contact"
import Footer from "../Footer"


function Landpage() {
  
  return (
    <div className=" flex flex-col space-y-50">
        <Hero/>
        <AboutUs/>
        <Whyus/>
        <Branding/>
        <ReviewFromUser/>
        <Pricing/>
        <Contact/>
        <Footer />
      </div>
  )
}

export default Landpage
