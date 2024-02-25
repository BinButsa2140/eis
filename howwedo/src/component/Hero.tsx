import React from 'react'
import yourcategory from '../assets/yourcategory.png'
import { FiArrowDownLeft } from "react-icons/fi";

const Hero = () => {
  return (
    <div className='flex flex-wrap justify-center relative w-full h-[500px] top-[50px] '>
        <h1 className='uppercase block text-4xl w-full text-center font-extrabold font-weight text-gray-200'>how it work</h1>
        <h2 className='uppercase text-gray-300 w-full text-center mt-14 font-bold text-2xl'>for quick legit check</h2>
        <img src={yourcategory}
        className='w-[250px] h-[400px] relative my-8 '/>
        <h3 className='text-gray-400 font-bold text-3xl w-full text-center'>step 1</h3>
        <p className='uppercase text-gray-500 mt-3 font-medium'>Select your item category from our category <br />sneaker clothes pants or toys</p>
        <FiArrowDownLeft  color='white' className='w-[200px] h-[200px] block relative right-[350px] top-[50px]'/>

    </div>
    
  )
}

export default Hero