import { GraduationCap, Calendar, Code2, Globe, Database, Brain } from "lucide-react";

function Education() {
  const courses = [
    {
      icon: Code2,
      name: "Software Development",
      desc: "Built robust applications using modern development practices and design patterns.",
    },
    {
      icon: Globe,
      name: "Web Engineering",
      desc: "Designed and developed scalable, responsive web applications end to end.",
    },
    {
      icon: Database,
      name: "Database Systems",
      desc: "Structured, queried, and managed relational and non-relational databases.",
    },
    {
      icon: Brain,
      name: "AI & Machine Learning",
      desc: "Explored intelligent systems, models, and data-driven decision making.",
    },
  ];

  return (
    <section id="education" className="relative px-6 md:px-12 py-16 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center justify-center gap-2">
          <GraduationCap className="text-green-500" size={32} />
          <span className="text-green-500">Education</span>
        </h2>
        <p className="text-gray-400 text-sm">
          Aspiring Software Engineer & QA Engineer
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-gradient-to-br from-green-900/40 via-[#0d1a15] to-[#0a0f0d] border border-green-700/40 rounded-2xl p-8 mb-10 shadow-lg shadow-green-900/20">
  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
    <div>
      <h3 className="text-xl font-semibold text-white">
        BS Information Technology
      </h3>
      <p className="text-green-500 font-medium">
        Punjab University College of Information Technology (PUCIT)
      </p>
    </div>
    <span className="flex items-center gap-2 text-sm text-gray-300 bg-green-500/10 border border-green-600/40 rounded-full px-4 py-1.5 whitespace-nowrap self-start">
      <Calendar size={14} />
      2022 - 2026
    </span>
  </div>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {courses.map((course, index) => {
          const Icon = course.icon;
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-green-800/70 via-green-950 to-[#0a0f0d] border border-green-700/50 rounded-2xl p-6 hover:border-green-500 transition-colors"
            >
              <div className="bg-green-500/20 w-11 h-11 flex items-center justify-center rounded-lg mb-4">
                <Icon className="text-green-500" size={20} />
              </div>
              <h4 className="text-white font-semibold mb-2">{course.name}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {course.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Education;