// import { motion } from "framer-motion";
import { FiMonitor, FiServer, FiDatabase, FiCode } from "react-icons/fi";

const skillData = [
  {
    title: "Frontend",
    icon: <FiMonitor />,
    color: "text-sky-500",
    border: "border-sky-400",
    skills: [
      { name: "HTML & CSS", level: "90%" },
      { name: "Bootstrap", level: "70%" },
      { name: "Tailwind CSS", level: "75%" },
      { name: "JavaScript", level: "85%" },
      { name: "React.js", level: "80%" },
    ],
  },
  {
    title: "Backend",
    icon: <FiServer />,
    color: "text-purple-500",
    border: "border-purple-400",
    skills: [
      { name: "Node.js", level: "75%" },
      { name: "Express.js", level: "70%" },
      { name: "JWT Auth", level: "80%" },
      { name: "REST API", level: "78%" },
    ],
  },
  {
    title: "Database",
    icon: <FiDatabase />,
    color: "text-green-500",
    border: "border-green-400",
    skills: [
      { name: "MongoDB", level: "80%" },
      { name: "MySQL", level: "75%" },
    ],
  },
  {
    title: "Programming",
    icon: <FiCode />,
    color: "text-orange-500",
    border: "border-orange-400",
    skills: [
      { name: "C", level: "60%" },
      { name: "C++", level: "45%" },
      { name: "Python", level: "50%" },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-10 bg-gray-100 text-black dark:bg-gray-950 dark:text-white transition-colors duration-300"
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
          <h2 className="text-4xl md:text-5xl font-bold">My Skills</h2>
        </div>

        {/* Skill Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillData.map((category, index) => (
            <div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white dark:bg-gray-900 rounded-3xl p-7 shadow-sm border ${category.border} dark:border-gray-800`}
            >
              <div className={`flex items-center gap-3 text-2xl font-semibold mb-8 ${category.color}`}>
                <span className="text-2xl">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center text-sm mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {skill.name}
                        </span>
                        <span className={`font-semibold ${category.color}`}>
                            {skill.level}
                        </span>
                    </div>

                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${category.color.replace("text", "bg")}`}
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;