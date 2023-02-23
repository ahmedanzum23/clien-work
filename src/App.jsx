import "./App.css";
import About from "./Components/About";
import Books from "./Components/Books";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className=" flex flex-col justify-between">
      <Navbar />
      <Home />
      <About />
      <Books />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
