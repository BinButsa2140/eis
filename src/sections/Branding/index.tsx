import { brandlogo } from "../../contents/partnerimg"
import {Swiper,SwiperSlide} from "swiper/react"

export default function Branding() {
  return (
    <div className="h-20 w-full relative mb-52 lg:block hidden">
        <div className=" h-full absolute blur-xl bg-white my-5">.</div>
        <Swiper className="bg-white rounded-2xl relative">
            <SwiperSlide className="flex lg:flex-nowrap flex-wrap">
                {
                    brandlogo.map((data, index)=>(
                        <div key={index} className="m-5 relative">
                            <img className="w-full lg:h-20 h-10
                            object-contain 
                            " src={data.imgpath} alt="" />
                        </div>
                    ))
                }
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
