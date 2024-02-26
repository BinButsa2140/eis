import { pricingdata } from "../../contents/pricingdata"

export default function Pricing() {
  return (
    <div id="pricing" className="h-screen">
        <div className=" text-center">
            <div className="text-3xl font-extrabold uppercase ">Pricing</div>
            <div className="">Choose the pricing plan that suits your needs</div>
        </div>
        <div className="flex justify-center mt-10">
            
            <div className="flex w-[90%] gap-5">
                {pricingdata.map((data, index) =>(
                    <div key={index} className="bg-gray-800 w-full
                    rounded-xl p-10 relative">
                        <div className="grid grid-rows-3 space-y-5">
                            <div className="">
                                <h1 className="text-3xl font-bold my-5">{data.title}</h1>
                                <h1 className="mb-2">{data.description}</h1>
                            </div>
                            <ul className="font-bold text-yellow-600 flex gap-5">
                                {data.pro.map((pros, index)=>(
                                    <li key={index} className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                        {pros}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <h1 className="text-4xl font-extrabold absolute bottom-2 left-3 ">{data.price}</h1>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
