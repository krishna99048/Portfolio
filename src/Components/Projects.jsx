// import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "Built a modern e-commerce platform with authentication, product filtering, cart management and secure checkout flow.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    live: "#",
    github: "#",
  },
  {
    title: "Tour Management System",
    description:
      "Developed a tour booking platform where users can explore destinations, book packages and manage travel plans easily.",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Designed and developed a personal portfolio website to showcase projects, skills and blogs with modern UI and smooth animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    live: "#",
    github: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-10 bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Features Projects</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects I’ve worked on, focused on solving real-world problems with clean and scalable solutions.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-sm font-medium hover:underline"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-medium hover:underline"
                  >
                    <FiGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;