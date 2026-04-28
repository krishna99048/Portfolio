// import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";

function Contact() {
  return (
    <section
      id="contact"
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
          <h2 className="text-4xl md:text-5xl font-bold">Contact Me</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Left Info */}
          <div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-6">Let’s Connect</h3>

            <div className="space-y-5">
              

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
              >
                <FiGithub className="text-xl" />
                GitHub Profile
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
              >
                <FiLinkedin className="text-xl" />
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Right Form */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 shadow-md space-y-5"
          >
            {/* Web3Forms Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY"
            />

            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 outline-none"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 outline-none"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 outline-none resize-none"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;