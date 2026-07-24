iimport Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Education />
    </div>
  );
}

export default App;