// import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const blogs = [
  {
    title: "React Best Practices for Clean Code",
    description:
      "Learn how to structure React applications cleanly using reusable components, better folder structure and scalable patterns.",
    date: "March 2026",
    link: "#",
  },
  {
    title: "How REST APIs Work in Real Projects",
    description:
      "A practical guide to understanding how REST APIs are designed, connected and used in modern full stack applications.",
    date: "April 2026",
    link: "#",
  },
  {
    title: "MongoDB Tips for Better Performance",
    description:
      "Useful MongoDB practices to improve query speed, schema design and performance in real-world applications.",
    date: "April 2026",
    link: "#",
  },
];

function Blog() {
  return (
    <section
      id="blog"
      className="py-24 px-6 md:px-10 bg-gray-50 text-black dark:bg-black dark:text-white transition-colors duration-300"
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
          <h2 className="text-4xl md:text-5xl font-bold">Blog</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thoughts, learnings and practical insights from my journey in web development.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <a
              key={blog.title}
              href={blog.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="block bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md hover:shadow-xl transition group"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {blog.date}
              </p>

              <h3 className="text-2xl font-semibold mb-3 group-hover:underline">
                {blog.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                {blog.description}
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                Read More <FiArrowRight />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;