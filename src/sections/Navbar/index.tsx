
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="flex justify-between w-full m-0 px-2 py-4">
      <div className="flex w-full">
        <div className="text-2xl ms-3 font-bold">
          <Link to={'eis/'}>Fluxxer logo here</Link>
        </div>
      </div>

      <div className="w-full lg:flex justify-center uppercase font-bold hidden gap-10 ">
        <Link to="how-it-works" className="">How it works</Link>
        <Link to="/pricing" className="">Pricing</Link>
        <Link to="/contact" className="">Contact</Link>
      </div>
      <div className="">
        <button className="btn btn-primary" >
          <Link to="eis/from" className="w-[4rem]">Start now</Link>
        </button>
      </div>
    </div>
  )
}
