import { pricingdata } from "../../contents/pricingdata";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <div id="pricing" className=" m-10 lg:h-screen xl:h-screen flex flex-col ">
      <div className="">
        <div className=" text-center my-10 font-serifz">
          <div className="text-6xl font-extrabold uppercase ">Pricing</div>
          <div className="">Choose the pricing plan that suits your needs</div>
        </div>
        <div className="grid lg:grid-cols-3 grid-rows-3 gap-5 ">
          {pricingdata.map((data, index) => (
            <Link to={'/from'} className=" text-center rounded-lg border border-gray-800 overflow-hidden group hover:bg-green-500 transition-colors">
              <div className="">
                  <img
                    className="h-40 w-full object-cover brightness-75 "
                    src={data.bgimg}
                    alt=""
                  />
                </div>
                <div
                  key={index}
                  className={`w-full p-10  space-y-2 
                relative z-50  overflow-hidden`}
                >
                  <div className="text-xl font-bold text-center font-second group-hover:text-black transition-colors">
                    {data.title}
                  </div>
                  <div className="text-5xl text-center font-bold font-second uppercase group-hover:text-black text-green-500 transition-colors">
                    {data.price}
                  </div>
                  <div className="group-hover:text-black group-hover:font-semibold transition-all">
                    {data.description}
                  </div>
                  <div className="flex flex-col lg:flex-row xl:flex-row md:flex-row  text-green-500 transition-colors   
                  group-hover:text-white justify-center gap-3 font-bold">
                    {data.pro.map((pro, index) => (
                      <div className="" key={index}>
                        {pro}
                      </div>
                    ))}
                  </div>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
