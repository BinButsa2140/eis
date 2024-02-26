import { strengthpoint } from "../../contents/strenghpoints"

export default function Whyus() {
  return (
    <div className='h-screen flex mt-10 mb-56 mx-20'>
        <div className=" flex flex-col h-full 
        w-full justify-center">
            <div className="my-10">
                <h1 className='text-4xl font-serif font-bold
                my-5 uppercase text-Start  w-2/3'>
                        Trustworthy Authentication Services for Your Products
                </h1>
                <p className="">
                    At Fluxxer, we offer a range of services to help you determine the authenticity of your handbags, fragrance, and shoes. Our team of professionals is dedicated to providing accurate and reliable authentication.
                </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-10">
            {strengthpoint.map((points, index)=>(
                <div key={index} className="">
                    <div className=" p-10 bg-gray-800 rounded-lg transition-all duration-1000 ">
                        <h1 className="text-3xl font-bold my-3 mix-blend-screen">{points.title}</h1>
                        <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequatur voluptas quo recusandae architecto necessitatibus repellat voluptates consequuntur eaque laudantium!</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}
