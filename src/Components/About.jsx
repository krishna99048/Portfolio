// import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const stats = [
  { number: "10+", label: "Projects Built" },
  { number: "5+", label: "Technologies Used" },
  { number: "100%", label: "Learning Mindset" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-10 bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold leading-tight max-w-4xl">
            About Me
          </h2>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Content */}
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 md:p-10 border border-gray-200 dark:border-gray-800"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              Full Stack Developer passionate about building modern,
              scalable and meaningful digital products.
            </h3>

            <div className="space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I enjoy turning ideas into real-world digital experiences that
                are clean and functional.
              </p>

              <p>
                My focus is on responsive frontend, efficient backend, and smooth user experience.
              </p>

              <p>
                I work with React, Node.js, Express and MongoDB to build scalable applications.
              </p>
            </div>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold hover:gap-3 transition-all"
            >
              Explore My Work <FiArrowUpRight />
            </a>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            {stats.map((item, index) => (
              <div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-6 border border-gray-200 dark:border-gray-800"
              >
                <h4 className="text-3xl font-bold mb-2">
                  {item.number}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}