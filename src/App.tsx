import Landpage from "./sections/Landpage";
import Navbar from "./sections/Navbar";
import Froms from "./sections/Froms";
import Footer from "./sections/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="eis/" element={<Landpage />}/>
          <Route path="eis/from" element={<Froms />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;