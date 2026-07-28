import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-6 bg-transparent relative z-20">
      <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
        <span className="font-black text-white">My</span>Portfolio
      </div>

      <nav className="hidden md:flex items-center gap-10">
        <ul className="flex items-center gap-6 text-base text-gray-200">
          <li><a href="#home" className="hover:text-green-500 transition-colors">Home</a></li>
          <li><a href="#education" className="hover:text-green-500 transition-colors">Education</a></li>
          <li><a href="#skills" className="hover:text-green-500 transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-green-500 transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-green-500 transition-colors">Contact</a></li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-white hover:text-green-400 text-sm font-medium transition-colors">
            Login
          </Link>
          <Link to="/signup" className="bg-green-500 hover:bg-green-600 text-black font-medium px-4 py-1.5 rounded-full transition-colors text-sm">
            Sign Up
          </Link>
        </div>
      </nav>

      <button
        type="button"
        className="md:hidden relative w-6 h-6 z-30 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span
          className={`absolute left-0 w-6 h-0.5 bg-green-500 transition-all duration-300 ${
            isMenuOpen ? "rotate-45 top-3" : "top-1"
          }`}
        ></span>
        <span
          className={`absolute left-0 w-6 h-0.5 bg-green-500 transition-all duration-300 top-3 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`absolute left-0 w-6 h-0.5 bg-green-500 transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 top-3" : "top-5"
          }`}
        ></span>
      </button>

      {isMenuOpen && (
        <ul className="absolute top-full left-0 w-full bg-[#0a1210] flex flex-col items-center gap-4 py-6 md:hidden z-20">
          <li><a href="#home" onClick={() => setIsMenuOpen(false)} className="text-gray-200 hover:text-green-500">Home</a></li>
          <li><a href="#education" onClick={() => setIsMenuOpen(false)} className="text-gray-200 hover:text-green-500">Education</a></li>
          <li><a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-gray-200 hover:text-green-500">Skills</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-gray-200 hover:text-green-500">Projects</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-200 hover:text-green-500">Contact</a></li>
          <li>
            <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-green-500">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="bg-green-500 text-black px-4 py-1.5 rounded-full text-sm">
              Sign Up
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;