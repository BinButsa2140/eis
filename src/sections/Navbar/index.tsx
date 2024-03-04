
import { Route, Routes, useNavigate  } from "react-router-dom"



export default function Navbar() {

  const navigate = useNavigate();

const NavigateToHome = () => {
  navigate('/');
};
const NavigateToHowto = () => {
  navigate('/howitwork' , {replace:true});
};


  return (
    <div className="flex justify-between w-full m-0 px-2 py-4">
        <div className="flex w-full">
            <div className="text-2xl ms-3 font-bold">Fluxxer logo here</div>
        </div>

        <div className="w-full lg:flex justify-center items-center
         uppercase font-bold hidden
        gap-10 
        ">
            <button onClick={NavigateToHome} className="uppercase text-medium">About us</button>
            <button onClick={NavigateToHowto} className="uppercase text-medium">How it works</button>
            {/* <a href="" className="">How it works</a> */}
            <a href="#pricing" className="">pricing</a>
            <a href="" className="">contact</a>
        </div>
    </div>
  )
}
