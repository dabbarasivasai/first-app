import Menu from "./components/menu";
import Footer from "./components/footer";
import About from "./components/About";
import Home from "./components/home";
import { Routes, Route } from "react-router-dom";
import Vehiclelist from "./components/vehiclelist";
import Services from "./components/services";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Vehicles" element={<Vehiclelist />} />
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
