import { useState } from "react";
import { HiMenu, HiX, HiMoon, HiSun } from "react-icons/hi";

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["About", "Skills", "Projects", "Blog", "Contact"];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 dark:bg-[#0f0f0f]/80 backdrop-blur-md shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-black dark:text-white">
          Portfolio
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-300 font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-black dark:hover:text-white transition duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl text-black dark:text-white"
          >
            {darkMode ? <HiSun /> : <HiMoon />}
          </button>

          {/* Resume */}
          <a
            href="/resume.pdf"
            className="px-5 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Right */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl text-black dark:text-white"
          >
            {darkMode ? <HiSun /> : <HiMoon />}
          </button>

          <button
            className="text-3xl text-black dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#0f0f0f] px-6 pb-4 shadow-md transition-colors duration-300">
          <ul className="flex flex-col gap-4 text-gray-700 dark:text-gray-300 font-medium">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-black dark:hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
            <a
              href="/resume.pdf"
              className="w-fit px-5 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black"
            >
              Resume
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;