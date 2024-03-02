import { strengthpoint } from "../../contents/strenghpoints"

export default function Whyus() {
    
  return (
    <div className="mx-5 my-20">
        <div className="flex flex-col">
  <div className="">
    <h1 className="text-2xl lg:text-3xl xl:text-4xl font-serif font-bold my-5">Trustworthy Authentication Services for Your Products</h1>
    <h1 className="lg:w-1/2 mb-10">
      At Fluxxer, we offer a range of services to help you determine the authenticity of your handbags, fragrance, and shoes. Our team of professionals is dedicated to providing accurate and reliable authentication.
    </h1>
  </div>
  <div className="grid lg:grid-cols-3 grid-rows-3 xl:grid gap-3  h-[40rem]">
    {strengthpoint.map((data, index) => (
      <div key={index} className="border border-[#232A33] p-10 rounded-md">
        <div className="text-2xl font-bold my-3">{data.title}</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, odit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, inventore!</div>
      </div>
    ))}
  </div>
</div>
    </div>
  )
}
