// import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-10 pt-24 bg-white dark:bg-gray-950 text-black dark:text-white transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Intro */}
        <p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4"
        >
          Hello, I'm
        </p>

        {/* Name */}
        <h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Krishna Sheladiya
        </h1>

        {/* Role */}
        <h2
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mt-4"
        >
          Full Stack Developer
        </h2>

        {/* Tagline */}
        <p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-2xl mx-auto mt-6 text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          I craft modern, scalable and user-friendly web applications with
          clean frontend experiences and powerful backend solutions.
        </p>

        {/* Buttons */}
        <div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            Contact Me
          </a>
        </div>

        
        
        {/* Scroll Down */}
        <a
          href="#about"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="inline-flex flex-col items-center mt-14 text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
        >
          Scroll Down
          <FiArrowDown className="mt-2 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

export default Hero;