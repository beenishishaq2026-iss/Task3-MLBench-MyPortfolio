import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;