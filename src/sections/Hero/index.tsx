import { herodata } from "../../contents/hero"
export default function Hero() {
    
  return (
    <div className='grid grid-cols-[40%_60%] h-screen mt-20 m-10'>
        <div className=" h-96 flex flex-col justify-center w-full lg:mt-20">
            <div className="text-left px-5">
                <h1 className="text-5xl font-bold uppercase mb-5">Real or fake?</h1>
                <p className="text-xl mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, corrupti.</p>
                <button className="bg-yellow-400 px-4 py-2 rounded-lg btn-primary">Start now!</button>
            </div>
            
        </div>
        <div className="w-full grid grid-rows-3 gap-5 mt-0 h-96">
            {herodata.map((data, index) => (
                <div key={index} className="carousel border relative flex flex-col border-yellow-400">
                    <h1 className="bottom-0 right-0 absolute">{data.type}</h1>
                    {data.data.map((pix, index2) =>(
                        <img className="w-full h-32 object-cover brightness-125" key={index2} src={pix} alt="" />
                    ))}
                </div>
            ))}
        </div>
    </div>
  )
}
