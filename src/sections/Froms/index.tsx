
import { brandlogo } from "../../contents/partnerimg";
import { steps } from "../../contents/steps";
import { Link } from "react-router-dom";


export default function Froms() {


  return (
    <div className=" flex flex-col justify-center p-5 ">
      <div className=" flex flex-wrap lg:flex-nowrap xl:flex-nowrap rounded-lg gap-5">
        <div className="flex flex-col w-full gap-5 ">
          {steps.map((data, index) => (
            <div className="flex w-full gap-2 items-center group" key={index}>
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
            <div className="grid grid-cols-2">
              <div className="flex flex-col max-w-full p-2">
                <label
                  className="font-bold font-second py-2 rounded-lg"
                  htmlFor=""
                >
                  Firstname
                </label>
                <input className="p-2" type="text" placeholder="Firstname" />
              </div>
              <div className="flex flex-col max-w-full p-2">
                <label
                  className="font-bold font-second py-2 rounded-lg"
                  htmlFor=""
                >
                  Lastname
                </label>
                <input className="p-2" type="text" placeholder="Lastname" />
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col max-w-full p-2">
                <label
                  className="font-bold font-second py-2 rounded-lg"
                  htmlFor=""
                >
                  Email
                </label>
                <input className="p-2" type="email" placeholder="Enter email" />
              </div>
              <div className="flex flex-col max-w-full p-2">
                <label
                  className="font-bold font-second py-2 rounded-lg"
                  htmlFor=""
                >
                  Number
                </label>
                <input
                  className="p-2"
                  type="text"
                  placeholder=" Enter phone number"
                />
              </div>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap xl:flex-nowrap md:flex-nowrap">
              <div className="flex flex-col w-full p-2 uppercase">
                <label
                  className="font-bold font-second py-2 rounded-lg"
                  htmlFor=""
                >
                  Product brand
                </label>
                <select className="p-2 w-full" name="" id="">
                  {brandlogo.map((data, index) => (
                    <option className="uppercase" key={index} value="">
                      {data.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex w-full flex-col max-w-full p-2">
                <label
                  className="font-bold font-second py-2 rounded-lg"
                  htmlFor=""
                >
                  Series
                </label>
                <input
                  className="p-2"
                  type="text"
                  placeholder=" Enter product series"
                />
              </div>
            </div>
            <div className="flex flex-col max-w-full p-2">
              <label
                className="font-bold font-second py-2 rounded-lg"
                htmlFor=""
              >
                Address
              </label>
              <input
                className="p-2"
                type="text"
                placeholder=" Enter your address"
              />
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
                <Link className="btn px-6  btn-outline text-green-400 hover:bg-green-500 hover:border-green-500" to='/from/submit'>
                  Submit
                </Link>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
