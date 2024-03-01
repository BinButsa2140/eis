import { strengthpoint } from "../../contents/strenghpoints"

export default function Whyus() {
    
  return (
    <div className="mt-32 mb-44 max-h-screen mx-10 content-center ">
        <div className="flex flex-col">
            <div className="">
                <h1 className="text-3xl font-serif font-bold lg:w-2/5 xl:w-2/5 sm:w-2/5 w-3/5  my-5">Trustworthy Authentication Services for Your Products</h1>
                <h1 className="lg:w-1/2 mb-10">
                    At Fluxxer, we offer a range of services to help you determine the authenticity of your handbags, fragrance, and shoes. Our team of professionals is dedicated to providing accurate and reliable authentication.
                </h1>
            </div>
            <div className="grid lg:grid-cols-3 grid-rows-3 xl:grid gap-3 ">
                {
                    strengthpoint.map((data, index)=>(
                        <div key={index} className="border border-[#232A33] p-10 rounded-md h-full">
                            
                            <div className="text-2xl font-bold my-3">{data.title}</div>
                            <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, odit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, inventore!</div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
