import { Link } from "react-router-dom";

export default function CheckNumber() {
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="lg:text-5xl xl:text-5xl md:text-5xl text-xl font-bold uppercase">
          Check your <span className="text-green-600">certificate</span> number
        </div>
        <input className="w-full p-5" type="text" placeholder="XXX-XXX-XXX"/>
        <Link to='/resultpage'>
          <button className="transition-all duration-500 px-6 py-2 text-2xl text-center border-gray-400 btn hover:bg-green-600 hover:text-black">Check</button>
        </Link>
      </div>
    </div>
  );
}
