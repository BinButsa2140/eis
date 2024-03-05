import { Autoplay, Pagination } from "swiper/modules";
import { herodata } from "../../contents/hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div
      id="Hero"
      className=" lg:mx-20 xl:mx-20 xl:my-7 lg:my-7 group overflow-hidden"
    >
      <div className="lg:block hidden bg-white p-20 absolute top-32 -left-20 rounded-full blur-3xl opacity-10 group-hover:left-32 transition-all duration-1000"></div>
      <div className="lg:block hidden bg-white p-20 absolute top-96 left-80 rounded-full blur-3xl opacity-10 group-hover:left-40 transition-all duration-1000"></div>
      <div className="lg:block hidden bg-white p-20 absolute top-24 left-96 rounded-full blur-3xl opacity-10 group-hover:top-96 transition-all duration-1000"></div>

      <div className="flex flex-wrap lg:flex-nowrap xl:flex-nowrap md:flex-nowrap gap-10">
        <div className="h-[20rem] flex flex-col justify-center w-full lg:mt-20 z-50 relative order-last lg:order-first xl:order-first">
          <div className="text-left px-5 relative">
            <h1 className="lg:text-4xl xl:text-5xl md:text-3xl text-3xl uppercase mb-2 font-main">
              <span className="text-green-500">Authenticating</span> Products with Confidence and Precision
            </h1>
            <p className="text-md mb-7">
              Fluxxer is the leading authentication brand that ensures the
              genuineness of handbags, fragrance, and shoes. Trust our
              professionals to authenticate your products with precision and
              accuracy.
            </p>
            <div className="flex gap-7">
              <button className="btn btn-neutral">Learn more</button>
              <Link to="/from" className="btn btn-outline text-green-400 hover:bg-green-500 hover:border-green-500">
                Start now
              </Link>

            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full grid grid-rows-3 gap-2 max-h-[31rem] xl:max-h-[40rem]">
            {herodata.map((data, index) => (
              <Swiper
                className="h-full overflow-hidden"
                key={index}
                mousewheel={true}
                direction="vertical"
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
              >
                {data.data.map((data, index2) => (
                  <SwiperSlide
                    className="object-cover object-center"
                    key={index2}
                  >
                    <img
                      className="object-cover object-center w-full h-full"
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
  );
}
