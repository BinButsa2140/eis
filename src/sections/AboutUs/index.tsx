import { data } from "../../contents/aboutus"
import { herodata } from "../../contents/hero"
export default function AboutUs() {
  return (
    <div className='h-screen mt-10 mb-40 grid grid-cols-[40%_60%] mx-10 '>
        <div className="flex flex-col ">
          {data.map((data, index) => (
            <div key={index} className="mt-32">
              <div className="text-3xl font-extrabold uppercase">
                {data.title}
              </div>
              <div className="pe-14">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit minima illum cumque enim reiciendis tempore non? Voluptatibus, quibusdam quaerat.</div>
            </div>
          ))}
        </div>
        <div className=" w-full">
          <div className="grid grid-cols-3 h-full ">
              {herodata.map((data, index)=>(
                  <div key={index} className="bg-green-700 h-[30rem] carousel carousel-vertical">
                    {data.data.map((image, index2)=>(
                      <div className="carousel-item">
                        <img key={index2} src={image} alt="" />
                      </div>
                    ))}
                  </div>
              ))}
          </div>
        </div>
    </div>
  )
}
