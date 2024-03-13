import { ReactElement, useState } from "react";
import { brandlogo } from "../../contents/partnerimg";
import { steps } from "../../contents/steps";
import { Link } from "react-router-dom";

export default function Froms() {
  const [isPremium, setisPremium] = useState(false);
  function from() {
    let content:ReactElement;
    if (isPremium) {
      content = (
        <div className="flex w-full">
          <div className="flex flex-col w-full p-2 uppercase">
            <label className="font-bold font-second py-2 rounded-lg" htmlFor="">
              Product brand
            </label>
      
            <select className="p-2 w-full " name="" id="">
              {brandlogo.map((data, index) => (
                <option className="uppercase " key={index} value="">
                  {data.name}
                </option>
              ))}
            </select>

          </div>
          <div className="flex w-full flex-col max-w-full p-2">
            <input
              className="p-2 bg-transparent border-[2px]  rounded-md relative peer mt-10 focus: outline-none focus:border-green-500 transition-colors"
              type="text"
              placeholder=""
            />
            <label className="uppercase font-bold font-second py-2 absolute w-fit ml-6 mt-11 p-0 pointer-events-none peer-focus:text-sm peer-focus:translate-y-[-19px] peer-focus:bg-[#080b0e] peer-focus:border-x-1 peer-focus:border-white peer-focus:text-center peer-focus:px-2 peer-focus:duration-200" htmlFor="">
              Enter Product Series
            </label>
          </div>
        </div>
      );
    } else {
      content = (
        <div className="flex w-full">
          <div className="flex flex-col w-full p-2 uppercase">
            <label className="font-bold font-second py-2 rounded-lg" htmlFor="">
              Product brand
            </label>
            <select className="p-2 w-full" name="" id="">
              {brandlogo.map((data, index) => (
                <option className="uppercase bg-transparent" key={index} value="">
                  {data.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex w-full flex-col p-2">
            <input
              className="p-2 bg-transparent border-[2px]  rounded-md relative peer mt-10 focus: outline-none focus:border-green-500 transition-colors"
              type="text"
              placeholder=""
            />
            <label className="uppercase font-bold font-second py-2 absolute w-fit ml-6 mt-11 p-0 pointer-events-none peer-focus:text-sm peer-focus:translate-y-[-19px] peer-focus:bg-[#080b0e] peer-focus:border-x-1 peer-focus:border-white peer-focus:text-center peer-focus:px-2 peer-focus:duration-200" htmlFor="">
              Enter product Series
            </label>
          </div>
        </div>
      );
    }
  
    // Repeat the content 5 times if isPremium is true
    if (isPremium) {
      return Array.from({ length: 5 }, (_, index) => (
        <div className="flex flex-col" key={index}>{content}</div>
      ));
    } else {
      return content;
    }
  }

  const peertext = 0



  return (
    <div className=" flex flex-col justify-center p-5 ">
      <div className=" flex flex-wrap lg:flex-nowrap xl:flex-nowrap rounded-lg gap-5">
        <div className="flex flex-col w-full gap-5 ">
          {steps.map((data, index) => (
            <div className="flex w-full gap-2 items-center group hover:text-white transition-all" key={index}>
              <div className="w-full">
                <img
                  className="h-28 w-full object-cover brightness-50 "
                  src={data.img}
                  alt=""
                />
              </div>
              <div className="absolute flex items-center font-second font-bold gap-5 m-3 ">
                <div className="text-6xl">{data.number}</div>
                <div className="text-3xl">{data.title}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full ">
          <form className="flex flex-col  p-5">
            <div className="grid grid-cols-2 relative">
              <div className="flex flex-col max-w-full p-2">
                <input id="username" className="p-2 bg-transparent border-[2px]  rounded-md relative peer mt-5 focus: outline-none focus:border-green-500 transition-colors" type="text"  />
                <label 
                  className=" uppercase font-bold font-second py-2 absolute w-fit ml-6 mt-6 p-0 pointer-events-none peer-focus:text-sm peer-focus:translate-y-[-19px] peer-focus:bg-[#080b0e] peer-focus:border-x-1 peer-focus:border-white peer-focus:text-center peer-focus:px-2 peer-focus:duration-200"
                  htmlFor=""
                >
                  Firstname
                </label>
              </div>
              <div className="flex flex-col max-w-full p-2">
                <input className="p-2 bg-transparent border-[2px]  rounded-md relative peer mt-5 focus: outline-none focus:border-green-500 transition-colors" type="text" placeholder="" />
                <label
                  className="uppercase font-bold font-second py-2 absolute w-fit ml-6 mt-6 p-0 pointer-events-none peer-focus:text-sm peer-focus:translate-y-[-19px] peer-focus:bg-[#080b0e] peer-focus:border-x-1 peer-focus:border-white peer-focus:text-center peer-focus:px-2 peer-focus:duration-200"
                  htmlFor=""
                >
                  Lastname
                </label>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col max-w-full p-2">
                <input className="p-2 bg-transparent border-[2px]  rounded-md relative peer mt-5 focus: outline-none focus:border-green-500 transition-colors" type="email" placeholder="" />
                <label
                  className="uppercase font-bold font-second py-2 absolute w-fit ml-6 mt-6 p-0 pointer-events-none peer-focus:text-sm peer-focus:translate-y-[-19px] peer-focus:bg-[#080b0e] peer-focus:border-x-1 peer-focus:border-white peer-focus:text-center peer-focus:px-2 peer-focus:duration-200"
                  htmlFor=""
                >
                  Email
                </label>
              </div>
              <div className="flex flex-col max-w-full p-2">
                <input
                  className="p-2 bg-transparent border-[2px]  rounded-md relative peer mt-5 focus: outline-none focus:border-green-500 transition-colors"
                  type="text"
                  placeholder=""
                />
                <label
                  className="uppercase font-bold font-second py-2 absolute w-fit ml-6 mt-6 p-0 pointer-events-none peer-focus:text-sm peer-focus:translate-y-[-19px] peer-focus:bg-[#080b0e] peer-focus:border-x-1 peer-focus:border-white peer-focus:text-center peer-focus:px-2 peer-focus:duration-200"
                  htmlFor=""
                >
                  Number
                </label>
              </div>
            </div>
            <div className="flex flex-col transition-all duration-500">
              {from()}
            </div>
            <div className="flex flex-col max-w-full p-2">
              <label
                className="font-bold font-second py-2 rounded-lg"
                htmlFor=""
              >
                Package
              </label>
              <select onChange={() => setisPremium(!isPremium)} name="Package" id="" className="p-2">
                <option value="">Basic(1 items)</option>
                <option value="">Premium(5 items)</option>
              </select>
            </div>
            <div className="flex flex-col max-w-full p-2">
              <label
                className="font-bold font-second py-2 rounded-lg"
                htmlFor=""
              >
                Upload images
              </label>
              <input className="p-2" type="file" multiple />
            </div>
            <div className="flex justify-center">
              <Link
                className="btn px-6  btn-outline text-green-400 hover:bg-green-500 hover:border-green-500"
                to="/from/submit"
              >
                Submit
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
