import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills"

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
    </div>
  );
}

export default App;