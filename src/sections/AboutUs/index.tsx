import { Autoplay, Pagination } from "swiper/modules"
import { data } from "../../contents/aboutus"
import { herodata } from "../../contents/hero"
import {Swiper,SwiperSlide} from "swiper/react"


export default function AboutUs() {
  return (
   <div className="justify-center group overflow-hidden">
  <div className="h-screen flex relative border justify-center items-center transition-all duration-1000 w-full">
    <div className="flex flex-col justify-center  lg:h-screen h-[20rem] p-5 z-20">
      {data.map((data, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="text-3xl font-bold uppercase font-serif">
            {data.title}
          </div>
          <div className="w-3/5 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
            reprehenderit minima illum cumque enim reiciendis tempore non?
            Voluptatibus, quibusdam quaerat.
          </div>
        </div>
      ))}
    </div>
    <div className="w-full absolute h-screen bg-opacity-50 brightness-50">
      <div className="h-screen flex">
        {herodata.map((data, index) => (
          <Swiper
            className="w-full"
            style={{ height: "100vh" }}
            mousewheel={true}
            freeMode={true}
            direction="vertical"
            modules={[Pagination, Autoplay]}
            loop={true}
            spaceBetween={0}
            slidesPerView={4}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            key={index}
          >
            {data.data.map((data, index2) => (
              <SwiperSlide className="" key={index2}>
                <img
                  className="w-full h-full object-cover"
                  src={data}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ))}
      </div>
    </div>
  </div>
</div>
  )
}
