import { pricingdata } from "../../contents/pricingdata";

import pricing_OFFWHITE_bg from '../../assets/pricing_bg1.png'
import price1 from '../../assets/1st_price.jpg'
import price2 from '../../assets/2nd_price.jpg'
import price3 from '../../assets/3rd_price.jpg'

export default function Pricing() {
  // return (
  //   <div id="pricing" className="lg:h-screen xl:h-screen m-10 flex flex-col border-2 border-green-500">
  //     <div className="">
  //       <div className=" text-center my-10 font-serifz">
  //         <div className="text-3xl font-extrabold uppercase ">Pricing</div>
  //         <div className="">Choose the pricing plan that suits your needs</div>
  //       </div>
  //       <div className="grid lg:grid-cols-3 grid-rows-3 gap-5 ">
  //         {pricingdata.map((data, index) => (
  //           <div className={``}>
  //             <div
  //               key={index}
  //               className={`w-full p-10 border rounded-xl space-y-2 bg-[url(${data.bgimg})] h-full`}
  //             >
  //               <div className="text-xl font-serif font-bold text-center ">
  //                 {data.title}
  //               </div>
  //               <div className="text-5xl text-center font-bold">
  //                 {data.price}
  //               </div>
  //               <div className="">{data.description}</div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );

  return(
    <div id="pricing" className="w-full flex-col">
      <div id="get_start" style={{background: `url(${pricing_OFFWHITE_bg})`, backgroundRepeat: "no-repeat",backgroundSize: "cover"}} 
      className="flex items-center justify-center h-[400px] w-full mt-40 border-y-2 border-gray-500">
        <h1  className="uppercase font-bold text-8xl text-gray-300">let's get start</h1>
      </div>
      <div className="mt-[70px] grid grid-cols-3 h-[600px] w-[90%] gap-[3%] mx-auto ">
        <div id="1st_price" className=" flex flex-col ">
          <img src={price1} sizes="10" className="rounded-t-[25px] border-2 border-gray-400"/>
          <p className="relative h-full border-x-2 border-b-2 rounded-b-[25px] border-gray-400 font-bold text-4xl text-center p-6">Get your result in <br /> <span className="text-[#ff3131]">4 - 5 days </span><br />With 80% accuracy</p>
          <div className="flex">
            <p className="uppercase absolute text-white">fast</p>
          </div>
        </div>

        <div id="2nd_price" className="bg-white"></div>
        <div id="3rd_price" className="bg-white"></div>

      </div>
    </div>
  );
}
