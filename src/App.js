import About from "./components/About";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Location from "./components/Location";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Carousel/>
      <Products/>
      <Location/>
      <Contact/>
    </div>
   
  );
}

export default App;
