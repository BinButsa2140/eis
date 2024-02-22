import { herodata } from "../../contents/hero"
export default function Hero() {
  return (
    <div className='grid grid-cols-[40%_60%] h-screen mt-20'>
        <div className=" h-96 flex flex-col justify-center w-full lg:mt-20">
            <div className="text-left px-5">
                <h1 className="text-5xl font-bold uppercase mb-5">Real or fake?</h1>
                <p className="text-xl mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, corrupti.</p>
                <button className="bg-blue-500 px-4 py-2 rounded-lg btn-primary">Start now!</button>
            </div>
            
        </div>
        <div className="w-full grid gap-10 ps-4 carousel h-96 ">
                {herodata.map((data, index) => (
                    <div key={index} className="bg-primary shadow-blue-800 shadow-lg 
                    carousel-item  w-full rounded-2xl ">
                        <img className="w-full h-98 object-cover brightness-75" src={data.imgpath} alt="" />
                    </div>
                ))}
        </div>
    </div>
  )
}
