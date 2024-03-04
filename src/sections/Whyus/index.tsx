import { strengthpoint } from "../../contents/strenghpoints";

export default function Whyus() {
  return (
    <div className="mx-5 my-20 flex items-center justify-center">
      <div className="flex flex-col h-1/2  ">
        <div className="">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-main font-bold my-5">
            Trustworthy <span className="text-green-500">Authentication</span>{" "}
            Services for Your Products
          </h1>
          <h1 className="lg:w-1/2 mb-10">
            At Fluxxer, we offer a range of services to help you determine the
            authenticity of your handbags, fragrance, and shoes. Our team of
            professionals is dedicated to providing accurate and reliable
            authentication.
          </h1>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap xl:flex-nowrap  gap-3 ">
          {strengthpoint.map((data, index) => (
            <div
              key={index}
              className="border border-[#232A33] p-10 rounded-md hover:bg-green-500 group "
            >
              <div className="text-2xl font-bold my-3 text-green-500 group-hover:hidden transition-all">
                {data.title}
              </div>
              <div className="group-hover:text-xl group-hover:font-bold group-hover:text-black transition-all duration-500">
                {data.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
