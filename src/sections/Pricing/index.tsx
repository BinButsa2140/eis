import { pricingdata } from "../../contents/pricingdata";

export default function Pricing() {
  return (
    <div id="pricing" className="lg:h-screen xl:h-screen m-10 flex flex-col border-2 border-green-500">
      <div className="">
        <div className=" text-center my-10 font-serifz">
          <div className="text-3xl font-extrabold uppercase ">Pricing</div>
          <div className="">Choose the pricing plan that suits your needs</div>
        </div>
        <div className="grid lg:grid-cols-3 grid-rows-3 gap-5 ">
          {pricingdata.map((data, index) => (
            <div className={`text-center`}>
              <div
                key={index}
                className={`w-full p-10 border rounded-xl space-y-2 bg-[url(${data.bgimg})] h-full`}
              >
                <div className="text-xl font-serif font-bold text-center ">
                  {data.title}
                </div>
                <div className="text-5xl text-center font-bold">
                  {data.price}
                </div>
                <div className="">{data.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
