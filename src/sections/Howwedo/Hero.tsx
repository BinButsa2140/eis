
import React, {useRef, useState} from 'react'
import { yourcategory, takeapic, certi, hand2hand} from './picexport';
import { animate, delay, easeIn, easeOut, motion } from "framer-motion"
import { SlArrowDown } from "react-icons/sl"
import { Link } from "react-router-dom"

const Hero = () => {
  const [quicklegit,setquicklegit] = useState(false)
  const [deeplegit,setdeeplegit] = useState(false)
  const [checkOP,setcheckOP] = useState(false)
  const step3Ref1 = useRef<HTMLDivElement | null>(null)




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
    if (quicklegit && checkOP) {
      handlequick();
      handleOP();
    }
    else if (checkOP){
      handledeep();
      handlequick();
    }
    else{
      handlequick();
      handleOP();
    }
  }

  const alldeepfn = () => {
    if (deeplegit && checkOP) {
      handledeep();
      handleOP();
    }
    else if (checkOP){
      handledeep();
      handlequick();
    }
    else{
      handledeep();
      handleOP();
    }
  }

  const scroll = () => {
    setTimeout(() => {
      step3Ref1.current?.scrollIntoView({behavior : 'smooth'});
    }, 90);
  }


  return (
    <div className='bg-[#080b0e] flex flex-wrap justify-center relative w-full h-[500px] top-[50px] h-full'>
        <h1 className='uppercase block text-4xl w-full text-center font-extrabold font-weight text-gray-200'>how it work</h1>
        <h2 className='uppercase text-gray-300 w-full text-center mt-14 font-bold text-2xl'>for quick legit check</h2>
        <img src={yourcategory}
        className='w-[260px] h-[400px] relative my-8 animate-bounce mt-[100px]'/>
        <h3 className='uppercase text-gray-300 font-bold text-5xl w-full text-center'>step 1</h3>
        <button className='uppercase text-gray-500 mt-3 font-semibold text-xl w-full text-center m-0'>Select your item category from our category <br />sneaker clothes pants or toys</button>
        
        <div className='flex flex-col items-center animate-pulse mt-[100px]'>
          <SlArrowDown color='white' size={180} className=''/>
          <SlArrowDown color='white' size={160} className=''/>
          <SlArrowDown color='white' size={140} className=''/>
        </div>



        <motion.div className='flex flex-col w-full mt-[80px]' 
        initial={{
          opacity:0,
          x:200
      }}
      whileInView={{
        opacity: 1,
        x:0
      }}
      transition={{
        duration:0.8
      }}
      viewport={{ once: false}}
        >
          <h3 className='uppercase font-bold text-5xl text-gray-300 mt-32 w-full block text-center'
          
          >step 2</h3>
          <p className='uppercase font-semibold text-2xl text-gray-400 block text-center mt-3'><span className='text-4xl font-semibold text-red-700'>scroll down</span> and select type of legit check you want</p>

        </motion.div>


        <div className='flex w-full justify-around relative mt-[400px]'>
        <motion.button onClick={() => { allquickfn(); scroll();
      } } 
        className=' z-40 uppercase self-start text-gray-400 text-3xl font-semibold p-3 border-2 rounded-lg'
        initial={{
          translateX: -100, opacity: 0
          
        }} 
        whileInView={{
          translateX: 100,
          opacity: 1,
          rotate : quicklegit ? -90 : 0,
          x: quicklegit ? -200 : 0,
          y: quicklegit ? 800 : 0
        }}
        transition={{
          duration: 0.7
        }}
       viewport={{ once: false}}
        >for quick legit check</motion.button>  
        
        <motion.button onClick={() => {alldeepfn();  scroll();
        }} className=' z-40 uppercase self-start text-gray-400 text-3xl font-semibold p-3 border-2 rounded-lg'
        initial={{
          translateX: 100, opacity: 0
          
        }} 
        whileInView={{
          translateX: -100,
          opacity: 1,
          rotate : deeplegit ? 90 : 0,
          x: deeplegit ? 200 : 0,
          y: deeplegit ? 800 : 0
        }}
        transition={{
          duration: 0.7
        }}
       viewport={{ once:false}}
        >for deep legit check</motion.button>


        </div >

        <motion.div className={!checkOP ? 'hidden' : 'w-full mt-10'}>
        <motion.div id='quicklegit' className=' bg-[#232A33] bg-opacity-40 flex-col gap-[150px] absolute right-0 w-[70%] border-l p-6' 
        initial="hidden" 
        whileInView={{
          opacity:quicklegit ? 1 : 0, 
          x:quicklegit ? 0 : 'hidden'
        }} 
        transition={{
          ease: 'easeIn',
          type: 'between'
        }}
        >
          <div  className='flex gap-[150px]'>
          <img src={takeapic} className='w-[500px] h-[700px] block' />
          <h3   ref={step3Ref1} className='text-gray-300 self-center font-bold text-6xl text-start'>step 3 <br /><span className='uppercase text-gray-400 font-lg text-2xl text-center'>Send us images of your items as requested via our email, such as the appearance, soles or size tag, then your item pictures will get verify our professional lgit cheker to tell that yor item is authentic or replica.</span></h3>
          </div>
          <div className='flex mt-[200px]'>
            <h3 className='text-gray-300 self-center font-bold text-6xl text-end mr-10'>step 4 <br /><span className='uppercase text-gray-400 font-lg text-2xl text-center'>when the step 3 is complete we will take the result to make the certificate of your item and once we complete we will send you the result and certificate via your register account's eamil in just 1 to 3 days from the day you submit the photo into system. </span></h3>
            <img src={certi} className='w-[650px] h-[500px]  self-start' alt="" />
          </div>
        </motion.div>

        
        <motion.div id='deeplegit' className='bg-[#232A33] bg-opacity-40 flex-col gap-[150px] w-[70%] border-r p-6' 
        initial="hidden" 
        animate={{
          opacity:deeplegit ? 1 : 0, 
          x:deeplegit ? 0 : 'hidden'
        }} 
        transition={{
          ease: 'easeIn',
          type: 'between'
        }}
        >
          <div className='flex gap-[150px]'>
          <h3 ref={step3Ref1} className='text-gray-300 self-center font-bold text-6xl text-end'>step 3 <br /><span className='uppercase text-gray-400 font-lg text-2xl text-center'>Send us your items directly via mail to our addressthen, then your item will send it to 2 to 3 professional lgit cheker to tell that yor item is authentic or replica.</span></h3>
          <img src={hand2hand} className='w-[750px] h-[700px] block' />
          </div>
          <div   className='flex mt-[200px]'>
            <img src={certi} className='w-[700px] h-[500px] self-center' />
            <h3  className='text-gray-300 self-center font-bold text-6xl text-start ml-10'>step 4 <br /><span className='uppercase text-gray-400 font-lg text-2xl text-center'>your result might take a longer time than quick legit then you will get certificate in four to five days with over 95% correct rate</span></h3>
          </div>
        </motion.div>
        </motion.div>
    </div>
    
  )
}

export default Hero
