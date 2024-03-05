import { pricingdata } from "../../contents/pricingdata";

export default function Pricing() {
  return (
    <div id="pricing" className=" m-10 lg:h-screen xl:h-screen flex flex-col">
      <div className="">
        <div className=" text-center my-10 font-serifz">
          <div className="text-6xl font-extrabold uppercase ">Pricing</div>
          <div className="">Choose the pricing plan that suits your needs</div>
        </div>
        <div className="grid lg:grid-cols-3 grid-rows-3 gap-5 ">
          {pricingdata.map((data, index) => (
            <div className={`text-center rounded-lg border border-gray-800 overflow-hidden`}>
              <div className="">
                  <img className="h-40 w-full object-cover brightness-75 rounded-t-xl" src={data.bgimg} alt="" />
                </div>
              <div
                key={index}
                className={`w-full p-10 rounded-xl space-y-2 
                relative z-50
                 overflow-hidden`}
              >
                
                <div className="text-xl font-bold text-center font-second">
                  {data.title}
                </div>
                <div className="text-5xl text-center font-bold font-second uppercase text-green-500">
                  {data.price}
                </div>
                <div className="">{data.description}</div>
                <div className="flex flex-row  text-green-500 justify-center gap-3 font-bold">
                    {data.pro.map((pro,index)=>(
                      <div className="" key={index}>
                        {pro}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
