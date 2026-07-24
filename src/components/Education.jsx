import { GraduationCap, Calendar, Code2, Globe, Database, Brain } from "lucide-react";

function Education() {
  const courses = [
    {
      icon: Code2,
      name: "Software Development",
      desc: "Building robust applications using modern development practices and design patterns.",
    },
    {
      icon: Globe,
      name: "Web Engineering",
      desc: "Designing and developing scalable, responsive web applications end to end.",
    },
    {
      icon: Database,
      name: "Software ",
      desc: "Structuring, querying, and managing relational and non-relational databases.",
    },
    {
      icon: Brain,
      name: "AI & Machine Learning",
      desc: "Exploring intelligent systems, models, and data-driven decision making.",
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

      <div className="max-w-3xl mx-auto bg-[#0f1613] border border-gray-800 rounded-2xl p-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-white">
              BS Information Technology
            </h3>
            <p className="text-green-500 font-medium">
              Punjab University College of Information Technology (PUCIT)
            </p>
          </div>
          <span className="flex items-center gap-2 text-sm text-gray-400 bg-[#0a0f0d] border border-gray-700 rounded-full px-4 py-1.5 whitespace-nowrap self-start">
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
      className="bg-gradient-to-br from-green-950/60 via-[#0d1a15] to-[#0a0f0d] border border-green-900/40 rounded-2xl p-6 hover:border-green-500/60 transition-colors"
    >
      <div className="bg-green-500/10 w-11 h-11 flex items-center justify-center rounded-lg mb-4">
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