import { strengthpoint } from "../../contents/strenghpoints"
export default function AboutUs() {
  return (
    <div className='h-screen flex'>
        <div className=" flex flex-col h-full 
        w-full justify-center">
            <h1 className='text-4xl font-extrabold my-10 uppercase'>
                    What we do
            </h1>
            <div className="grid lg:grid-cols-3 gap-10 m-10">
            {strengthpoint.map((points, index)=>(
                <div className="bg-primary p-10">
                    <h1 key={index} className="text-2xl font-bold">{points.title}</h1>
                    <p className="text-xl">{points.description}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}
