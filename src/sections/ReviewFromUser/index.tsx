import { Swiper, SwiperSlide } from 'swiper/react'
import { reviewdata } from '../../contents/review'
import { Autoplay, Pagination } from 'swiper/modules'



export default function ReviewFromUser() {
  return (
    <div className='h-screen overflow-hidden flex flex-col justify-center mt-20 lg:mt-0 xl:mt-0'>
        
        <h1 className='text-3xl mb-10 font-bold text-center'>Happy Custo<span>m</span>ers</h1>
        <div className="flex overflow-hidden justify-center rounded-xl">
            <Swiper className='lg:h-96 h-80  flex rounded-xl'
            mousewheel={true}
            direction='vertical'
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              
            }}
            >
                {reviewdata.map((data, index)=>(
                    <SwiperSlide className='lg:h-64 xl:h-64 flex items-center 
                    justify-center bg-white text-black
                    
                    '
                     key={index}>
                        <div className="m-10 h-3/4 flex flex-col gap-4 p-10 w-full">
                            <div className="h-3/5 flex">
                                <img className='max-w-20 max-h-20 rounded-full' src={data.pfppath} alt="" />
                                <div className="flex w-full my-5 justify-end">
                                    {Array.from({length: data.rate},(_,i)=>(
                                        <div key={i} className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div id={'description'+index} className="h-3/5 flex flex-col
                            items-start w-full">
                                <h1 className="text-start font-bold w-full text-2xl my-2 ">{data.name}</h1>
                                <h1 className='content-start'>
                                    {data.review}
                                </h1>
                            </div>
                        </div>
                        <div className="w-full h-full lg:block xl:block md:block hidden">
                            <img className='w-full object-conver' src={data.reviewimg} alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  )
}
