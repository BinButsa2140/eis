import { useRef, useState } from "react";
import { yourcategory, takeapic, } from "./picexport";
import {  motion } from "framer-motion";
import { SlArrowDown } from "react-icons/sl";

const Hero = () => {
  const [quicklegit, setquicklegit] = useState(false);
  const [deeplegit, setdeeplegit] = useState(false);
  const [checkOP, setcheckOP] = useState(false);
  const step3Ref1 = useRef<HTMLDivElement | null>(null);

  const handlequick = () => {
    setquicklegit(!quicklegit);
  };
  const handledeep = () => {
    setdeeplegit(!deeplegit);
  };
  const handleOP = () => {
    setcheckOP(!checkOP);
  };

  const allquickfn = () => {
    if (quicklegit && checkOP) {
      handlequick();
      handleOP();
    } else if (checkOP) {
      handledeep();
      handlequick();
    } else {
      handlequick();
      handleOP();
    }
  };

  const alldeepfn = () => {
    if (deeplegit && checkOP) {
      handledeep();
      handleOP();
    } else if (checkOP) {
      handledeep();
      handlequick();
    } else {
      handledeep();
      handleOP();
    }
  };

  const scroll = () => {
    setTimeout(() => {
      step3Ref1.current?.scrollIntoView({ behavior: "smooth" });
    }, 90);
  };

  return (
    <div className="bg-[#080b0e] flex flex-wrap justify-center relative w-full h-full top-[50px] z-50">
      <h1 className="uppercase block text-4xl w-full text-center font-extrabold font-weight text-gray-200">
        how it work
      </h1>
      <h2 className="uppercase text-gray-300 w-full text-center mt-14 font-bold text-2xl">
        for quick legit check
      </h2>
      <img
        src={yourcategory}
        className="w-[260px] h-[400px] relative my-8 animate-bounce mt-[100px]"
      />
      <h3 className="uppercase text-gray-300 font-bold text-5xl w-full text-center">
        step 1
      </h3>
      <button className="uppercase text-gray-500 mt-3 font-semibold text-xl w-full text-center m-0">
        Select your item category from our category <br />
        sneaker clothes pants or toys
      </button>

      <div className="flex flex-col items-center animate-pulse mt-[100px]">
        <SlArrowDown color="white" size={180} className="" />
        <SlArrowDown color="white" size={160} className="" />
        <SlArrowDown color="white" size={140} className="" />
      </div>

      <motion.div
        className="flex flex-col w-full "
        initial={{
          opacity: 0,
          x: 200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{ once: false }}
      >
        <h3 className="uppercase font-bold text-5xl text-gray-300 mt-32 w-full block text-center">
          step 2
        </h3>
        <p className="uppercase font-semibold text-2xl text-gray-400 block text-center mt-3">
          <span className="text-4xl font-semibold text-red-700">
            scroll down
          </span>{" "}
          and select type of legit check you want
        </p>
      </motion.div>

      <div className="flex w-full justify-around relative mt-[400px]">
        <motion.button
          onClick={() => {
            allquickfn();
            scroll();
          }}
          className=" z-40 uppercase self-start text-gray-400 
          text-3xl font-semibold p-3 border-2 rounded-lg"
          initial={{
            translateX: -100,
            opacity: 0,
          }}
          whileInView={{
            translateX: 100,
            opacity: 1,
            rotate: quicklegit ? -90 : 0,
            x: quicklegit ? -200 : 0,
            y: quicklegit ? 800 : 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: false }}
        >
          #1 Click here
        </motion.button>

        <motion.button
          onClick={() => {
            alldeepfn();
            scroll();
          }}
          className=" z-40 uppercase self-start text-gray-400 text-3xl 
          font-semibold p-3 border-2 rounded-lg"
          initial={{
            translateX: 100,
            opacity: 0,
          }}
          whileInView={{
            translateX: -100,
            opacity: 1,
            rotate: deeplegit ? 90 : 0,
            x: deeplegit ? 200 : 0,
            y: deeplegit ? 800 : 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: false }}
        >
          #2 Click here!
        </motion.button>
      </div>

      <motion.div className={!checkOP ? "hidden" : "w-full mt-10"}>
        <motion.div
          id="quicklegit"
          className=" bg-[#232A33] bg-opacity-40 flex-col flex gap-10 absolute right-0 w-[70%] p-6"
          initial="hidden"
          whileInView={{
            opacity: quicklegit ? 1 : 0,
            x: quicklegit ? 0 : "hidden",
          }}
          transition={{
            ease: "easeIn",
            type: "between",
          }}
        >
          <div className="flex gap-5 h-96 shadow-lg">
            <img src={takeapic} className="object-cover w-full " />
            <div className="flex flex-col gap-5 justify-center">
              <div className="uppercase font-bold text-xl">step 1</div>
              <div className="">
                  Send us images of your items as requested via our email, such as
                  the appearance, soles or size tag, then your item pictures will
                  get verify our professional legit cheker to tell that yor item is
                  authentic or replica. 
              </div>
            </div>
          </div>
          <div className="flex gap-5 h-96 shadow-lg p-10">
            <div className="flex flex-col gap-5 justify-center">
              <div className="uppercase font-bold text-xl">step 2</div>
              <div className="">
                  We have people who has  been trained by professionals in this field to authenticate your items to check if it real or repica
              </div>
            </div>
            <img src="https://s.yimg.com/uu/api/res/1.2/_oXQtzZniALVdnHm_aRPPw--~B/Zmk9ZmlsbDtoPTU5OTt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-10/3e1b5d50-0ca5-11eb-bf7f-10a5b0a64bf0.cf.jpg" 
            className="object-cover w-96 " />
          </div>
        </motion.div>

        <motion.div
          id="deeplegit"
          className="bg-[#232A33] bg-opacity-40 flex-col gap-[150px] w-[70%] border-r p-6"
          initial="hidden"
          animate={{
            opacity: deeplegit ? 1 : 0,
            x: deeplegit ? 0 : "hidden",
          }}
          transition={{
            ease: "easeIn",
            type: "between",
          }}
        >
           <div className="flex gap-5 h-96 shadow-lg">
            <img src="https://d1f00kj7ad54bu.cloudfront.net/Pictures/480xany//P/web/j/g/o/snkrauthentication2_885740.jpg" 
            className="object-contain w-96 " />
            <div className="flex flex-col gap-5 justify-center">
              <div className="uppercase font-bold text-xl">step 3</div>
              <div className="">
              We perform thorough checks multiple times to ensure the accuracy of your items, guaranteeing that you will receive the correct results with utmost confidence.
              </div>
            </div>
          </div>
          <div className="flex gap-5 h-96 shadow-lg p-10">
            <div className="flex flex-col gap-5 justify-center">
              <div className="uppercase font-bold text-xl">step 4</div>
              <div className="">
              Rest assured, upon successful completion, we will promptly send you the verified results and an official certificate directly to your email, ensuring a trustworthy and reliable process
              </div>
            </div>
            <img src="https://i.postimg.cc/prTLQPrr/C-5.png" 
            className="object-contain w-96 " />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
