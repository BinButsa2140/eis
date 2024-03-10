import Landpage from "./sections/Landpage";
import Navbar from "./sections/Navbar";
import Froms from "./sections/Froms";
import Submit from "./sections/Submit";
import Pagenotfault from "./sections/Pagenotfault";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./sections/Howwedo/Hero";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="eis/" element={<Landpage />} />
          <Route path="from/*" element={<Froms />}>
          </Route>
          <Route path="how-it-works" element={<Hero />}></Route>
          <Route path="from/submit" element={<Submit name="Josh" />} />
          <Route path="*" element={<Pagenotfault />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
