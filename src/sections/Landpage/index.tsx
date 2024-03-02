import Hero from "../Hero"
import AboutUs from "../AboutUs"
import Whyus from "../Whyus"
import Pricing from "../Pricing"
import Branding from "../Branding"
import ReviewFromUser from "../ReviewFromUser"
import Contact from "../Contact"


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
      </div>
  )
}

export default Landpage
