
import Landpage from "./sections/Landpage"
import Navbar from "./sections/Navbar"
import { Route, Routes, useNavigate  } from "react-router-dom"
import Hero from "./sections/Howwedo/Hero";

Landpage


function App() {

  const navigate = useNavigate();

  const NavigateToHome = () => {
    navigate('/');
  };


  return (
    <div className="">
      <Navbar/>
      
      <Routes>

        <Route path="/" element={<Landpage />} />
        <Route path="/Howitwork" element={<Hero />} />


      </Routes>
      {/* <Navbar/>
      <Landpage/>    */}
    </div>
  )
}

export default App
