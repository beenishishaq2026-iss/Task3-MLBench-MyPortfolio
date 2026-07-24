function Projects() {
  const projects = [
    {
      title: "Project One",
      description:
        "A brief description of this project goes here — what it does, the problem it solves, and key features.",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Project Two",
      description:
        "A brief description of this project goes here — what it does, the problem it solves, and key features.",
      tags: ["JavaScript", "Express", "API"],
    },
    {
      title: "Project Three",
      description:
        "A brief description of this project goes here — what it does, the problem it solves, and key features.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section id="projects" className="relative px-6 md:px-12 py-16 md:py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          My <span className="text-green-500">Projects</span>
        </h2>
        <p className="text-gray-400 text-sm">
          A few things I've built and worked on
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-green-800/50 via-green-950 to-[#0a0f0d] border border-green-700/40 rounded-2xl p-6 hover:border-green-500 transition-colors duration-300"
          >
            <div className="w-10 h-1 bg-green-500 rounded-full mb-5"></div>

            <h3 className="text-lg font-semibold text-white mb-3">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs text-green-400 bg-green-500/10 rounded-md px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;