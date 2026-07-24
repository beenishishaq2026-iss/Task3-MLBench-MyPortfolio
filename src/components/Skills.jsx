import { Braces, Coffee, FileCode2, Palette, TestTube, Send, Webhook, GitBranch } from "lucide-react";

function Skills() {
  const skills = [
    { icon: Braces, name: "JavaScript" },
    { icon: Coffee, name: "Java" },
    { icon: FileCode2, name: "HTML5" },
    { icon: Palette, name: "CSS3" },
    { icon: TestTube, name: "Testing" },
    { icon: Send, name: "Postman" },
    { icon: Webhook, name: "API Testing" },
    { icon: GitBranch, name: "GitHub" },
  ];

  return (
    <section id="skills" className="relative px-6 md:px-12 py-16 md:py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          My <span className="text-green-500">Skills</span>
        </h2>
        
        <p className="text-gray-400 text-sm">
          Technologies and tools I work with
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-10 max-w-4xl mx-auto">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div key={index} className="group flex flex-col items-center gap-3 w-24">
              <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-green-800/60 via-green-950 to-[#0a0f0d] border border-green-700/40 group-hover:border-green-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300">
                <Icon className="text-green-400 group-hover:text-green-300 transition-colors" size={30} />
              </div>
              <span className="text-gray-300 text-xs font-medium text-center group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;