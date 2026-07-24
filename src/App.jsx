import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects.jsx"

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;