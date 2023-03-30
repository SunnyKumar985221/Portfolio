import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import './components/about.css'
import Certification from "./components/Certification";
function App() {
 
  return (
    <div className="hidescroll">
      <NavBar  />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Certification/>
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
