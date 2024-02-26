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
                <h1 className="text-4xl font-bold uppercase mb-2 font-serif">
                    Authenticating Products with Confidence and Precision    
                </h1>
                <p className="text-md mb-7">
                    Fluxxer is the leading authentication brand that ensures the genuineness of handbags, fragrance, and shoes. Trust our professionals to authenticate your products with precision and accuracy.</p>
                <div className="flex gap-7">
                    <button className="btn btn-neutral">Learn more</button>
                    <button className="btn btn-outline">Sign up</button>
                </div>
            </div>
        </div>
        <div className="w-full grid grid-rows-3 gap-5 h-[29rem]">
            {herodata.map((data, index) => (
                <div key={index} className="carousel relative flex flex-col  
                border-yellow-400 gap-5
                rounded-s-3xl
                ">
                    <h1 className="bottom-4 right-4 text-3xl z-50 uppercase font-bold
                    hidden">{data.type}</h1>
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
