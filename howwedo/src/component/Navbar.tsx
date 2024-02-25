import React from 'react'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-20 max-w-[1920px] mx-auto px-4 w-full'>
       <h1 className='font-bold text-2xl text-green-500 ml-20'><span>LOGO | </span>LEGIT.checK</h1>
       <ul className='flex font-bold text-gray-500 text-l'>
        <li className='p-6'>ABOUT US</li>
        <li className='p-6'>HOW IT WORK</li>
        <li className='p-6'>PRICING</li>
        <li className='p-6 mr-10' >CONTACT</li>
       </ul>
    </div>
    
  )
}

export default Navbar