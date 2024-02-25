import Navbar from "../Navbar"
import Hero from "../Hero"
import AboutUs from "../AboutUs"
import Whyus from "../Whyus"
import Pricing from "../Pricing"
import Branding from "../Branding"

function Landpage() {
  
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Whyus/>
        <Branding/>
        <Pricing/>
    </div>
  )
}

export default Landpage
