import { Download } from "lucide-react";
import Profile from "../assets/images/Profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden"
    >

      <div className="absolute top-10 right-10 w-24 h-24 bg-green-400 rounded-full blur-3xl opacity-40"></div>

      <div className="flex-1 max-w-xl">

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Hi, I'm <span className="text-green-500">Beenish Ishaq</span> 
        </h1>

        <h2 className="text-lg md:text-xl text-gray-300 font-medium mb-4">
              PUCIT Graduate | Full Stack Developer | Exploring Software Quality Assurance 
</h2>

        <p className="text-gray-400 mb-8">
          I am motivated learner and always continue to grow. Here you can check
          my skills set,projects and Let get Connect!
        </p>

        <div className="mb-6 inline-flex items-center gap-2 rounded-full 
                bg-gradient-to-r from-green-500 to-emerald-600 
                px-5 py-2 text-sm font-semibold text-black 
                shadow-lg hover:scale-105 transition-transform duration-300">

  <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>

  Currently MERN Stack Intern at ML Bench Pvt Ltd

</div>


        <div className="flex flex-wrap gap-4 mb-10">

          <a
            href="#contact"
            className="bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-3 rounded-full transition-colors flex items-center gap-2"
          >
            Contact Me →
          </a>

<a
  href="/resume.pdf"
  download
  className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-medium px-6 py-3 rounded-full transition-colors flex items-center gap-2"
>
  <Download size={18} />
  Download CV
</a>

        </div>

      </div>


      <div className="flex justify-center">
<div className="flex justify-center">

  <div className="
      w-80 
      h-80 
      bg-green-500 
      rounded-full 
      overflow-hidden">

      <img
       src={Profile}
       className="w-full h-full object-cover"
/>
  </div>

</div>

</div>

    </section>
  );
}

export default Hero;