import { pricingdata } from "../../contents/pricingdata"

export default function Pricing() {
  return (
    <div id="pricing" className="h-screen">
        <div className="text-3xl font-extrabold text-start ms-20">Pricing</div>
        <div className="flex justify-center mt-10">
            
            <div className="flex justify-between w-[70%]">
                {pricingdata.map((data, index) =>(
                    <div key={index} className="text-3xl font-bold">
                        {data.titie}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
