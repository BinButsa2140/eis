import React, {useState} from 'react'
import { yourcategory, takeapic, certi } from '.';
import { BsArrowDownLeft,BsArrowDownRight } from "react-icons/bs";
import { animate, easeOut, motion } from "framer-motion"

const Hero = () => {
  const [quicklegit,setquicklegit] = useState(false)
  const [deeplegit,setdeeplegit] = useState(false)
  const [checkOP,setcheckOP] = useState(false)

  const handlequick = () => {
    setquicklegit(!quicklegit)
  }
  const handledeep = () => {
    setdeeplegit(!deeplegit) 
  }
  const handleOP = () => {
    setcheckOP(!checkOP)
  }

  const allquickfn = () => {
    if (checkOP){
      handledeep();
      handlequick();
    }
    else if (quicklegit || !checkOP) {
      handlequick();
      handleOP();
    }
  }

  const alldeepfn = () => {
    if (checkOP){
      handlequick();
      handledeep();
    }
    else if (deeplegit || !checkOP) {
      handledeep();
      handleOP();
    }

  }


  return (
    <div className='flex flex-wrap justify-center relative w-full h-[500px] top-[50px]'>
        <h1 className='uppercase block text-4xl w-full text-center font-extrabold font-weight text-gray-200'>how it work</h1>
        <h2 className='uppercase text-gray-300 w-full text-center mt-14 font-bold text-2xl'>for quick legit check</h2>
        <img src={yourcategory}
        className='w-[260px] h-[400px] relative my-8 '/>
        <h3 className='text-gray-400 font-bold text-3xl w-full text-center'>step 1</h3>
        <button className='uppercase text-gray-500 mt-3 font-medium text-l w-full text-center m-0'>Select your item category from our category <br />sneaker clothes pants or toys</button>
        <div className='flex items-center justify-center w-full gap-[20%]'>
        <BsArrowDownLeft  color='white' className='w-[200px] h-[180px] top-[50px]'/>
        <BsArrowDownRight color='white' className='w-[200px] h-[180px] top-[50px]'/>  
        </div>


        <div className='flex w-full justify-around relative right-[50px] mt-[30px] justify-between'>
        <motion.button onClick={allquickfn} className='uppercase self-start relative left-16 text-gray-400 text-3xl font-semibold p-3 border-2 rounded-lg'
        initial={{
          x:0,
          y:0
        }} 
        animate={{
          rotate : quicklegit ? -90 : 0,
          x: quicklegit ? 15 : 0,
          y: quicklegit ? 400 : 0
        }}
        transition={{
          duration: 1
        }}
        >for quick legit check</motion.button>  
        
        <motion.button onClick={alldeepfn} className='uppercase self-start text-gray-400 text-3xl font-semibold p-3 border-2 rounded-lg'
        initial={{
          x:0,
          y:0
        }} 
        animate={{
          rotate : deeplegit ? 90 : 0,
          x: deeplegit ? 100 : 0,
          y: deeplegit ? 400 : 0
        }}
        transition={{
          duration: 1
        }}
        >for deep legit check</motion.button>
        </div>

        <motion.div id='quicklegit' className=' scroll-m-8 flex-col gap-[150px] absolute right-0 top-[220%] w-[60%] border-l p-6' 
        initial={{
          opacity: 0, 
          x: 200
        }} 
        animate={{
          opacity:quicklegit ? 1 : 0, 
          x:quicklegit ? 0 : 200
        }} 
        transition={{
          duration: 1, 
          ease: "easeOut"
        }}
        >
          <div className='flex gap-[150px]'>
          <img src={takeapic} className='w-[500px] h-[700px] block' />
          <h3 className='text-gray-400 self-center font-bold text-4xl text-start'>step 2 <br /><span className='uppercase text-gray-500 font-lg text-base'>Send us images of your items as requested via our email, such as the appearance, soles or size tag </span></h3>
          </div>
          <div className='flex'>
            <h3 className='text-gray-400 self-center font-bold text-4xl text-start m-10'>step 3 <br /><span className='uppercase text-gray-500 font-lg text-base'>Get your result and certificate in just a few days with over 80% correct rate</span></h3>
            <img src={certi} className='w-[700px] h-[450px] mt-[200px] self-start' alt="" />
          </div>
        </motion.div>

        <motion.div id='deeplegit' className=' scroll-m-8 flex-col gap-[150px] absolute left-0 top-[220%] w-[60%] border-r p-6' 
        initial={{opacity: 0 , x: 200}} 
        animate={{
          opacity:deeplegit ? 1 : 0, 
          x:deeplegit ? 0 : 200
        }} 
        transition={{
          duration: 1, 
          ease: "easeOut"
        }}
        >
          <div className='flex gap-[150px]'>
          <h3 className='text-gray-400 self-center font-bold text-4xl text-start'>step 2 <br /><span className='uppercase text-gray-500 font-lg text-base'>Send us images of your items as requested via our email, such as the appearance, soles or size tag </span></h3>
          <img src={takeapic} className='w-[500px] h-[700px] block' />
          </div>
          <div className='flex'>
            <img src={certi} className='w-[700px] h-[450px] mt-[200px] self-start' alt="" />
            <h3 className='text-gray-400 self-center font-bold text-4xl text-start m-10'>step 3 <br /><span className='uppercase text-gray-500 font-lg text-base'>Get your result and certificate in just a few days with over 80% correct rate</span></h3>
          </div>
        </motion.div>

    </div>
    
  )
}

export default Hero