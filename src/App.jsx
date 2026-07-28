import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects"
import Contact from "./components/Contact.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup";

function Home(){
  return(
    <>
    <Hero/>
    <Education/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen">
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
     </BrowserRouter>
  );
}

export default App;