import { herodata } from "../../contents/hero"
export default function Hero() {
    
  return (
    <div className='grid grid-cols-[40%_60%] h-screen mx-10 mt-10 mb-20 group'>
        <div className="bg-white p-20 absolute top-32 -left-20 rounded-full blur-3xl opacity-10 group-hover:left-32 transition-all duration-1000"></div>
        <div className="bg-white p-20 absolute top-96 left-80 rounded-full blur-3xl opacity-10 group-hover:left-40 transition-all duration-1000"></div>
        <div className="bg-white p-20 absolute top-24 left-96 rounded-full blur-3xl opacity-10 group-hover:top-96 transition-all duration-1000"></div>
        <div className=" h-96 flex flex-col justify-center w-full lg:mt-20">
        <div className="bg-yellow-500 rounded-full p-40 hidden transition-all blur-3xl opacity-20"></div>
            <div className="text-left px-5 relative">
                <h1 className="text-4xl font-extrabold uppercase mb-2">Real or <span className="text-yellow-400">fake?</span></h1>
                <p className="text-xl mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, corrupti.</p>
                <button className="bg-yellow-400 px-4 py-2 rounded-lg btn-primary text-3xl font-extrabold">Start now!</button>
            </div>
        </div>
        <div className="w-full grid grid-rows-3 gap-5 h-[29rem]">
            {herodata.map((data, index) => (
                <div key={index} className="carousel relative flex flex-col  
                border-yellow-400 gap-5
                rounded-s-3xl
                ">
                    <h1 className="bottom-4 right-4 text-3xl z-50 uppercase font-bold
                    absolute">{data.type}</h1>
                    {data.data.map((pix, index2) =>(
                        <img className="w-full h-36 
                        object-cover 
                        brightness-125
                        
                        " key={index2} src={pix} alt="" />
                    ))}
                </div>
            ))}
        </div>
    </div>
  )
}
