import React, {useRef, useState} from 'react'
import { yourcategory, takeapic, certi, hand2hand} from './picexport';
import { animate, delay, easeIn, easeOut, motion } from "framer-motion"
import { SlArrowDown } from "react-icons/sl"


const quicklegitbutton = () => {

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

    
  return (
    <div>
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
    </div>
  )
}

export default quicklegitbutton