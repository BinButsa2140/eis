
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="flex justify-between w-full m-0 p-5 items-center">
      <div className="flex w-full">
        <div className="text-2xl ms-3 font-bold uppercase group">
          <Link to={'eis/'}>Flu<span className='text-green-500'>x</span><span className='text-green-500 transition-colors group-hover:text-red-500 duration-1000'>x</span>er</Link>
        </div>
      </div>

      <div className=" lg:flex w-1/5 justify-center uppercase font-bold hidden gap-10 hover:text-green-500 transition-colors">
        <Link to="how-it-works" className="">How we works</Link>
      </div>
      <div className="">
        <button className="btn bg-gray-900 hover:bg-green-400 hover:border-green-400 hover:text-black" >
          <Link to="eis/from" className="w-[4rem]">Start now</Link>
        </button>
      </div>
    </div>
  )
}
